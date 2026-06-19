import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { Language } from '../types';

interface StrategyImpactProps {
  lang: Language;
}

interface FAQItem {
  id: string;
  question: Record<Language, string>;
  answer: Record<Language, string>;
}

export default function StrategyImpact({ lang }: StrategyImpactProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems: FAQItem[] = [
    {
      id: "when-is-marketing-needed",
      question: {
        en: "When does a business need marketing the most?",
        ka: "როდის სჭირდება ბიზნესს მარკეტინგი ყველაზე მეტად?"
      },
      answer: {
        en: "Not just when sales are dropping. Marketing is crucial at every stage of growth — from starting a new business, building brand awareness, capturing new markets, to long-term development strategies. Successful companies view marketing not as an expense, but as a strategic investment.",
        ka: "არა მხოლოდ მაშინ, როცა გაყიდვები ეცემა. მარკეტინგი მნიშვნელოვანია ზრდის ყველა ეტაპზე — ახალი ბიზნესის დაწყებიდან, ცნობადობის გაზრდით, ახალი ბაზრების ათვისებითა და გრძელვადიანი განვითარების სტრატეგიით. წარმატებული კომპანიები მარკეტინგს ხარჯად კი არა, ინვესტიციად განიხილავენ."
      }
    },
    {
      id: "marketing-without-strategy",
      question: {
        en: "Why does marketing fail without a strategy?",
        ka: "რატომ ვერ მუშაობს მარკეტინგი სტრატეგიის გარეშე?"
      },
      answer: {
        en: "Advertising, content, and social media are merely tools. Genuine results are driven by strategy. When a business has clear objectives, a precisely defined target audience, and a solid growth roadmap, every single marketing step becomes significantly more effective.",
        ka: "რეკლამა, კონტენტი და სოციალური მედია მხოლოდ ინსტრუმენტებია. შედეგს კი სტრატეგია ქმნის. როდესაც ბიზნესს აქვს მკაფიო მიზნები, სწორად განსაზღვრული აუდიტორია და განვითარების გეგმა, თითოეული მარკეტინგული ნაბიჯი ბევრად ეფექტური ხდება."
      }
    },
    {
      id: "right-marketing",
      question: {
        en: "What is required for right marketing?",
        ka: "რა არის საჭირო სწორი მარკეტინგისთვის?"
      },
      answer: {
        en: "Successful marketing is not created with a single tool. It requires strategy, branding, design, technology, and correct communication. When these elements unite, a perfect circle is created, leading the business to real growth.",
        ka: "წარმატებული მარკეტინგი არ იქმნება ერთი ინსტრუმენტით. მას სჭირდება სტრატეგია, ბრენდინგი, დიზაინი, ტექნოლოგია და სწორი კომუნიკაცია. როდესაც ეს ელემენტები ერთიანდება, იქმნება სრულყოფილი წრე, რომელიც ბიზნესს რეალურ ზრდამდე მიჰყავს."
      }
    },
    {
      id: "why-circle",
      question: {
        en: "Why is our company named Circle?",
        ka: "რატომ ჰქვია ჩვენს კომპანიას Circle?"
      },
      answer: {
        en: "We didn't choose Circle by accident. We believe that successful marketing is never created by a single action — it happens when strategy, branding, design, technology, and communication operate as a unified system. The circle represents this vital connection, continuous development, and a flawless process. When all elements align, real results are born.",
        ka: "Circle შემთხვევით არ შეგვირჩევია. გვჯერა, რომ წარმატებული მარკეტინგი ერთი მოქმედებით არ იქმნება — ის იქმნება მაშინ, როდესაც სტრატეგია, ბრენდინგი, დიზაინი, ტექნოლოგია და კომუნიკაცია ერთიან სისტემად მუშაობს. წრე სწორედ ამ კავშირს, უწყვეტ განვითარებასა და სრულყოფილ პროცესს გამოხატავს. როდესაც ყველა ელემენტი ერთმანეთს ერგება, იქმნება შედეგი."
      }
    },
    {
      id: "collaboration",
      question: {
        en: "Can any business collaborate with Circle?",
        ka: "შეუძლია თუ არა ნებისმიერ ბიზნესს Circle-თან თანამშრომლობა?"
      },
      answer: {
        en: "Yes. We believe that premium marketing should not be a privilege exclusive to large corporations. This is why we design solutions tailored to any business size, objectives, and resources. Our mission is to define the exact strategy that maximizes returns within your budget.",
        ka: "დიახ. გვჯერა, რომ ხარისხიანი მარკეტინგი მხოლოდ დიდი კომპანიების პრივილეგია არ უნდა იყოს. ამიტომ ვქმნით გადაწყვეტილებებს, რომლებიც ბიზნესის მასშტაბს, მიზნებსა და შესაძლებლობებს ერგება. ჩვენი ამოცანაა ვიპოვოთ სწორი გზა, რომელიც მაქსიმალურ შედეგს მოიტანს არსებული რესურსების ფარგლებში."
      }
    }
  ];

  return (
    <section id="faq" className="py-24 border-b border-[#1E1E24]/50 relative overflow-hidden bg-[#0A0A0F]">
      
      {/* Decorative radial leaks */}
      <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-[#6A00FF]/5 rounded-full blur-[110px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-[#00F2FE]/5 rounded-full blur-[110px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* FAQ ACCORDION SECTION */}
        <div className="bg-[#121217]/40 border border-[#1E1E24]/70 rounded-[2.5rem] p-6 sm:p-10 max-w-4xl mx-auto" id="faq-section">
          
          <div className="mb-10 text-center sm:text-left">
            <span className="inline-flex items-center gap-1.5 text-xs font-sans font-bold tracking-widest text-[#00F2FE] uppercase bg-[#00F2FE]/10 px-3 py-1.5 rounded-full mb-4">
              FAQ
            </span>
            <h3 className="text-2xl sm:text-3xl font-sans font-black text-white tracking-tight">
              {lang === 'en' ? 'Frequently Asked Questions' : 'ხშირად დასმული კითხვები'}
            </h3>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={item.id}
                  id={`faq-item-${item.id}`}
                  className={`border rounded-2xl transition-all duration-300 overflow-hidden cursor-pointer ${
                    isOpen 
                      ? 'border-[#00F2FE]/50 bg-[#00F2FE]/5 shadow-[0_4px_20px_rgba(0,242,254,0.05)]' 
                      : 'border-[#1E1E24] bg-[#0F0F14]/40 hover:border-[#1E1E24]/100 hover:bg-[#0F0F14]/80'
                  }`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <button className="w-full flex justify-between items-center px-6 py-5.5 text-left text-white focus:outline-none">
                    <span className="text-sm sm:text-base font-sans font-bold tracking-tight pr-4">
                      {item.question[lang]}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-[#00F2FE] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-gray-400 leading-relaxed border-t border-white/5 whitespace-pre-line">
                          {item.answer[lang]}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
