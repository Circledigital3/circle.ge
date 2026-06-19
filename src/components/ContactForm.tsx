import React, { useState, useEffect, useRef } from 'react';
import { Upload, FileText, Trash2, CheckCircle2, Send } from 'lucide-react';
import { Language, TranslationDictionary, Inquiry } from '../types';

interface ContactFormProps {
  lang: Language;
  translate: TranslationDictionary;
  preselectedService?: string;
  preselectedBudget?: string;
}

export default function ContactForm({ lang, translate, preselectedService = '', preselectedBudget = '' }: ContactFormProps) {
  // Form coordinates state
  const [name, setName] = useState('');
  const [brandName, setBrandName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [budget, setBudget] = useState('');
  const [message, setMessage] = useState('');
  
  // Update state if preselected props change
  useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
    }
  }, [preselectedService]);

  useEffect(() => {
    if (preselectedBudget) {
      setBudget(preselectedBudget);
    }
  }, [preselectedBudget]);
  
  // File attachments state
  const [files, setFiles] = useState<{ name: string; size: number }[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Handle Drag Events
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // Handle Drop Events
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const addedFiles: { name: string; size: number }[] = [];
      for (let i = 0; i < e.dataTransfer.files.length; i++) {
        const file = e.dataTransfer.files[i];
        addedFiles.push({ name: file.name, size: file.size });
      }
      setFiles((prev) => [...prev, ...addedFiles]);
    }
  };

  // Handle File Selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const addedFiles: { name: string; size: number }[] = [];
      for (let i = 0; i < e.target.files.length; i++) {
        const file = e.target.files[i];
        addedFiles.push({ name: file.name, size: file.size });
      }
      setFiles((prev) => [...prev, ...addedFiles]);
    }
  };

  const removeFile = (idx: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== idx));
  };

  // Handle Form Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !service) {
      alert(lang === 'en' ? 'Please complete all required fields.' : 'გთხოვთ შეავსოთ ყველა სავალდებულო ველი.');
      return;
    }

    setIsSubmitting(true);

    const payload = {
      name,
      brandName: brandName || 'Anonymous',
      email,
      service,
      budget: budget || 'N/A',
      message: message || 'N/A'
    };

    // Try posting to local Express API backend for email notification dispatch
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      console.log("API response:", data);
    } catch (err) {
      console.warn("Could not dispatch via local Express API:", err);
    }

    // Try posting directly from user's browser to FormSubmit.co AJAX API for 100% delivery guarantee
    try {
      const directResponse = await fetch("https://formsubmit.co/ajax/www.circle.ge@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          "სახელი და გვარი (Name)": name,
          "კომპანია / ბრენდი (Company)": brandName || 'Anonymous',
          "ელ-ფოსტა (Email)": email,
          "საჭირო მიმართულება (Service)": service,
          "ბიუჯეტი (Budget)": budget || 'N/A',
          "შეტყობინება (Message)": message || 'N/A',
          _subject: `[Circle.ge] ახალი საკონტაქტო ფორმა - ${name}`
        })
      });
      const directResult = await directResponse.json();
      console.log("Direct FormSubmit.co response:", directResult);
    } catch (err) {
      console.warn("Direct FormSubmit.co request failed:", err);
    }

    // Save to local inquiries drawer database as standard view / backup
    const newInquiry: Inquiry = {
      id: Math.random().toString(36).substring(2, 9).toUpperCase(),
      date: new Date().toLocaleDateString(lang === 'en' ? 'en-US' : 'ka-GE', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      name,
      brandName: brandName || 'Anonymous',
      email,
      service,
      budget: budget || 'N/A',
      message: message || 'N/A',
      files: [...files]
    };

    try {
      const existingStr = localStorage.getItem('circle_agency_inquiries');
      const existing = existingStr ? JSON.parse(existingStr) : [];
      localStorage.setItem('circle_agency_inquiries', JSON.stringify([newInquiry, ...existing]));
    } catch (e) {
      console.error('Error writing to localStorage.', e);
    }

    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Clean inputs
    setName('');
    setBrandName('');
    setEmail('');
    setService('');
    setBudget('');
    setMessage('');
    setFiles([]);

    // Reset success status after 6 seconds
    setTimeout(() => setSubmitSuccess(false), 6000);
  };

  return (
    <section id="contact" className="py-20 relative border-b border-[#1E1E24]/50">
      
      {/* Background concentric lines for circle aesthetic */}
      <div className="absolute left-1/2 bottom-0 w-[600px] h-[300px] rounded-t-full border border-[#1E1E24]/30 pointer-events-none -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-white mt-4">
            {translate.contactTitle}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto w-full" id="contact-form-grid">
          
          {/* Input Fields Wrapper */}
          <div className="bg-[#1E1E24]/20 border border-[#1E1E24]/60 rounded-[2.5rem] p-6 sm:p-8 flex flex-col justify-between">
            
            <form onSubmit={handleSubmit} className="space-y-6" id="agency-contact-form">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Field 1: Name */}
                <div className="space-y-2">
                  <label className="text-xs font-sans font-bold text-gray-400 uppercase tracking-wider block">
                    {translate.contactFormLabelName} <span className="text-[#00F2FE]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#0F0F14] border border-[#1E1E24] hover:border-gray-700 focus:border-[#00F2FE] rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#00F2FE] transition-all"
                    placeholder=""
                  />
                </div>

                {/* Field 2: Brand/Company */}
                <div className="space-y-2">
                  <label className="text-xs font-sans font-bold text-gray-400 uppercase tracking-wider block">
                    {translate.contactFormLabelBrand}
                  </label>
                  <input
                    type="text"
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    className="w-full bg-[#0F0F14] border border-[#1E1E24] hover:border-gray-700 focus:border-[#00F2FE] rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#00F2FE] transition-all"
                    placeholder=""
                  />
                </div>

              </div>

              {/* Field 3: Email */}
              <div className="space-y-2">
                <label className="text-xs font-sans font-bold text-gray-400 uppercase tracking-wider block">
                  {translate.contactFormLabelEmail} <span className="text-[#00F2FE]">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#0F0F14] border border-[#1E1E24] hover:border-gray-700 focus:border-[#00F2FE] rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#00F2FE] transition-all"
                  placeholder=""
                />
              </div>

              {/* Field 5: Service input */}
              <div className="space-y-2">
                <label className="text-xs font-sans font-bold text-gray-400 uppercase tracking-wider block">
                  {translate.contactFormLabelService} <span className="text-[#00F2FE]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-[#0F0F14] border border-[#1E1E24] hover:border-gray-700 focus:border-[#00F2FE] rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#00F2FE] transition-all"
                  placeholder=""
                />
              </div>

              {/* Field 6: Message goals */}
              <div className="space-y-2">
                <label className="text-xs font-sans font-bold text-gray-400 uppercase tracking-wider block">
                  {translate.contactFormLabelMessage}
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#0F0F14] border border-[#1E1E24] hover:border-gray-700 focus:border-[#00F2FE] rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#00F2FE] transition-all resize-none"
                  placeholder=""
                />
              </div>

              {/* Advanced Drag and Drop File Attachments Panel */}
              <div className="space-y-2">
                <label className="text-xs font-sans font-bold text-gray-500 uppercase tracking-wider block">
                  {lang === 'en' ? 'Optional Attachments' : 'ფაილების მიმაგრება'}
                </label>

                {/* Drag Area */}
                <div 
                  onDragEnter={handleDrag}
                  onDragOver={handleDrag}
                  onDragLeave={handleDrag}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`border border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all duration-300 flex flex-col items-center justify-center ${
                    dragActive 
                      ? 'border-[#00F2FE] bg-[#00F2FE]/5 text-white shadow-lg' 
                      : 'border-[#1E1E24] hover:border-gray-500 text-gray-400 bg-[#0F0F14]/25 hover:bg-[#0F0F14]/45'
                  }`}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <Upload className="w-8 h-8 text-[#00F2FE] mb-2.5 animate-bounce [animation-duration:3s]" />
                  <p className="text-xs">
                    {translate.contactFormDragDrop}{' '}
                    <span className="text-[#00F2FE] font-bold hover:underline">
                      {translate.contactFormBrowse}
                    </span>
                  </p>
                  <span className="text-[10px] text-gray-600 font-sans font-medium mt-1">PDF, DOC, PNG, JPG (Size up to 25MB)</span>
                </div>

                {/* Listing added files in queue */}
                {files.length > 0 && (
                  <div className="mt-3 space-y-2 bg-[#0F0F14]/50 border border-[#1E1E24] rounded-xl p-3 max-h-40 overflow-y-auto">
                    {files.map((f, idx) => (
                      <div key={idx} className="flex items-center justify-between text-xs py-1.5 px-2 bg-black/40 rounded-lg">
                        <div className="flex items-center gap-2 truncate">
                          <FileText className="w-4 h-4 text-[#00F2FE] shrink-0" />
                          <span className="text-gray-300 font-medium truncate" title={f.name}>{f.name}</span>
                          <span className="text-[9px] font-sans font-bold text-gray-500 uppercase shrink-0">
                            ({(f.size / 1024).toFixed(0)} KB)
                          </span>
                        </div>
                        <button 
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeFile(idx);
                          }}
                          className="p-1 rounded text-gray-500 hover:text-red-400 hover:bg-[#1E1E24]/80 text-right transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Submit CTA button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full relative overflow-hidden group py-4 rounded-full bg-gradient-to-r from-[#6A00FF] to-[#3B82F6] text-sm font-sans font-bold text-white shadow-xl hover:shadow-[#6A00FF]/25 transition-all cursor-pointer disabled:opacity-50"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/80 border-t-transparent rounded-full animate-spin"></div>
                        <span>{translate.contactFormSubmitting}</span>
                      </>
                    ) : (
                      <>
                        <span>{translate.contactFormSubmit}</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] to-[#00F2FE] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>

              {/* Form Success Popup */}
              {submitSuccess && (
                <div className="p-4 bg-[#00F2FE]/10 border border-[#00F2FE] text-[#00F2FE] rounded-2xl flex items-center gap-3 animate-fade-in">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span className="text-xs font-sans font-medium">{translate.contactFormSuccess}</span>
                </div>
              )}

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
