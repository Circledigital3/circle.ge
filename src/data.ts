import { ServiceDetail, TranslationDictionary } from './types';

export const SERVICES_DATA: Record<'en' | 'ka', ServiceDetail[]> = {
  en: [
    {
      id: 'ads',
      num: '01',
      iconName: 'TrendingUp',
      title: 'Marketing Strategy & Growth',
      tagline: 'Data-driven strategies and effective marketing solutions for business growth.',
      description: 'Advertising budget management to secure maximum ROI. Search/PPC ads on Google, targeting on Meta and TikTok for unprecedented sales growth.',
      detailedPoints: [
        'Marketing Strategy',
        'Market Research',
        'Competitor Analysis',
        'Brand Positioning',
        'Meta & Google Ads'
      ],
      metricLabel: '',
      metricValue: ''
    },
    {
      id: 'webdev',
      num: '02',
      iconName: 'Globe',
      title: 'Web Development & SEO Optimization',
      tagline: 'High-tech websites and occupying leading positions on search engines.',
      description: '',
      detailedPoints: [
        'Building fast and responsive websites',
        'Technical and on-page SEO optimization',
        'Growth of Google Rank and organic visitors',
        'Integration of analytics, CRMs, and pixels',
        'Website UX/UI audit and optimization'
      ],
      metricLabel: '',
      metricValue: ''
    },
    {
      id: 'socialmedia',
      num: '03',
      iconName: 'Compass',
      title: 'Social Media Management',
      tagline: 'Creative content and professional social media management',
      description: '',
      detailedPoints: [
        'Viral Reels, TikTok, and Shorts modernization',
        'Professional video editing & sound design',
        'Visual feed design & planning',
        'Effective copywriting, scripts, and concepts',
        'Community management and daily interaction'
      ],
      metricLabel: '',
      metricValue: ''
    },
    {
      id: 'design',
      num: '04',
      iconName: 'PenTool',
      title: 'Graphic Design & Branding',
      tagline: 'Outstanding and sophisticated design for your brand identity.',
      description: '',
      detailedPoints: [
        'Creating custom brand books & logos',
        'Outstanding social media graphic templates',
        'Designing promotional banners and catalogs',
        'Unique illustrations, vectors, and typography',
        'High-converting carousel designs'
      ],
      metricLabel: '',
      metricValue: ''
    }
  ],
  ka: [
    {
      id: 'ads',
      num: '01',
      iconName: 'TrendingUp',
      title: 'მარკეტინგული სტრატეგია და ზრდა',
      tagline: 'მონაცემებზე დაფუძნებული სტრატეგიები და ეფექტური მარკეტინგული გადაწყვეტილებები ბიზნესის ზრდისთვის.',
      description: 'სარეკლამო ბიუჯეტების მართვა მაქსიმალური ROI-ს დასაფიქსირებლად. Search/PPC რეკლამები Google-ში, ტარგეტირება Meta-სა და TikTok-ზე გაყიდვების უპრეცედენტო ზრდისთვის.',
      detailedPoints: [
        'მარკეტინგული სტრატეგია',
        'ბაზრის კვლევა',
        'კონკურენტების ანალიზი',
        'ბრენდის პოზიციონირება',
        'Meta & Google Ads'
      ],
      metricLabel: '',
      metricValue: ''
    },
    {
      id: 'webdev',
      num: '02',
      iconName: 'Globe',
      title: 'ვებ დეველოპმენტი და SEO ოპტიმიზაცია',
      tagline: 'მაღალტექნოლოგიური ვებსაიტები და საძიებო სისტემებში წამყვანი პოზიციების დაკავება.',
      description: '',
      detailedPoints: [
        'სწრაფი და რესპონსიული ვებსაიტების აწყობა',
        'ტექნიკური და შიდა გვერდის SEO ოპტიმიზაცია',
        'Google Rank-ის და ორგანული ვიზიტორების ზრდა',
        'ანალიტიკების, CRM და პიქსელების ინგეგრაცია',
        'ვებგვერდის UX/UI აუდიტი და ოპტიმიზაცია'
      ],
      metricLabel: '',
      metricValue: ''
    },
    {
      id: 'socialmedia',
      num: '03',
      iconName: 'Compass',
      title: 'სოციალური მედიის მართვა',
      tagline: 'კრეატიული კონტენტი და სოციალური მედიის პროფესიონალური მართვა',
      description: '',
      detailedPoints: [
        'ვირუსული Reels, TikTok და Shorts მოდერნიზაცია',
        'პროფესიონალური ვიდეო მონტაჟი & ხმის დიზაინი',
        'ფიდის ვიზუალური გაფორმება & დაგეგმარება',
        'ეფექტური ქოფირაითინგი, სცენარები და კონცეფცია',
        'ქომიუნითი მენეჯმენტი და ყოველდღიური ინტერაქცია'
      ],
      metricLabel: '',
      metricValue: ''
    },
    {
      id: 'design',
      num: '04',
      iconName: 'PenTool',
      title: 'გრაფიკული დიზაინი და ბრენდინგი',
      tagline: 'გამორჩეული და დახვეწილი დიზაინი თქვენი ბრენდის იდენტობისთვის.',
      description: '',
      detailedPoints: [
        'ინდივიდუალური ბრენდბუქის & ლოგოს შექმნა',
        'სოც. მედიის გამორჩეული გრაფიკული შაბლონები',
        'სარეკლამო ბანერების და კატალოგების დიზაინი',
        'უნიკალური ილუსტრაციები, ვექტორები და ტიპოგრაფია',
        'მაღალი კონვერსიის კარუსელების დიზაინი'
      ],
      metricLabel: '',
      metricValue: ''
    }
  ]
};

export const TRANSLATIONS: Record<'en' | 'ka', TranslationDictionary> = {
  en: {
    navHome: 'Home',
    navServices: 'Services',
    navBrand: 'Identity',
    navAbout: 'About Us',
    navContact: 'Contact',
    navFaq: 'FAQ',
    navStartProject: 'Start a Project',
    
    heroBadge: 'FULL-SERVICE DIGITAL MARKETING AGENCY',
    heroHeadingBefore: 'Your Marketing',
    heroHeadingHighlight: 'Circle.',
    heroHeadingAfter: '',
    heroSub: 'Behind every successful business stand people — partners who are by your side at every step and walk the path of growth together with you.\nThat is why we created Circle.\nA space where marketing is not limited to just one service. Here, strategy, branding, design, digital development, and growth-oriented marketing unite to help your business develop stronger, clearer, and more confidently.\n\nFor us, each project is not just a task. It is a relationship, trust, and a common goal — your success. We work as part of your team, looking for opportunities, solving challenges, and creating solutions that turn into real results.\nThis is what we mean when we say we are\nyour marketing circle.',
    heroButtonPrimary: 'START NOW',
    heroButtonSecondary: 'Learn More',
    heroSocialProof: 'Trusted by over 100 successful businesses in Georgia and globally',
    
    aboutBadge: 'ABOUT US',
    aboutHeading: 'Our goal is to transform small companies into strong, global brands.',
    aboutDesc: 'Since 2020, we have been helping businesses achieve their marketing goals across various industries and markets. Over these years, we have worked on one-off projects as well as long-term partnerships, which helped us accumulate diverse experience and practical knowledge.\n\nA significant part of our operations is connected to international markets, where we have created numerous successful projects and earned the trust of satisfied customers through collaborations with companies of various sizes and directions.\n\nAt Circle, we believe that effective marketing is not made of separate services alone. It begins with the right strategy, continues with a strong brand, and leads to results-oriented actions. That is why we approach every project individually and build solutions based on specific goals and real outcomes.\n\nFor us, the most important elements are long-term relationships built on trust, professionalism, and mutual success. This experience and approach allow us to be a reliable partner for businesses focused on growth and development.',
    aboutStatsLabel: 'Client Growth',
    aboutGridTitle1: 'Top-tier Design',
    aboutGridDesc1: 'Branding, logos, and graphic style that will set your company apart.',
    aboutGridTitle2: 'Websites & SEO',
    aboutGridDesc2: 'Ultra-fast modern websites and technical optimization for Google’s first page.',
    aboutGridTitle3: 'Ads & Sales',
    aboutGridDesc3: 'Google Ads, Meta, and TikTok ad management for maximum ROI.',
    aboutGridTitle4: 'Content & Video',
    aboutGridDesc4: 'Creative video editing, scripting, and story-driven organic Reels/TikTok content.',
    
    brandBadge: 'AGENCY PALETTE',
    brandTitle: 'Cosmic & Neon Aesthetic',
    brandTypography: 'Premium Typography Pairing',
    brandPalette: 'Purple, Blue, and Cyan Palettes',
    brandVisuals: 'Gravity, Neon Spheres, and Orbits',
    brandHexCopy: 'Click to copy HEX code',
    brandHexCopied: 'Code Copied!',

    calcBadge: 'Growth Calculator',
    calcTitle: 'Brand Growth Simulator',
    calcSubtitle: 'Manage your digital marketing budget and target channels to calculate brand visibility and sales growth multiplier.',
    calcBudget: 'Estimated Monthly Budget ($)',
    calcFollowers: 'Target Audience Size (Impressions/Month)',
    calcPlatform: 'Core Marketing Focus',
    calcEstReach: 'Estimated Monthly Reach',
    calcEstEngagement: 'Engagement Rate',
    calcEstROI: 'Brand Growth Multiplier',
    calcDisclaimer: 'Projections are based on average conversion data from Georgian and global markets.',

    servicesBadge: 'Services',
    servicesTitle: 'Our services that help your brand achieve correct positioning',
    servicesLearnMore: 'Learn More',
    servicesClose: 'Close',
    servicesIncluded: 'What this field includes:',

    contactBadge: 'CONTACTS',
    contactTitle: 'Send us a message for collaboration',
    contactFormLabelName: 'Your Name',
    contactFormLabelBrand: 'Your Brand or Company Name',
    contactFormLabelEmail: 'Email',
    contactFormLabelService: 'Required Direction',
    contactFormLabelBudget: 'Monthly Advertising Budget',
    contactFormLabelMessage: 'Project Goal and Your Vision',
    contactFormDragDrop: 'Drag and drop your project description, brief, or documents here, or',
    contactFormBrowse: 'browse file',
    contactFormSubmit: 'Send',
    contactFormSubmitting: 'Launching Connection...',
    contactFormSuccess: 'Your message has been sent successfully!',
    contactSelectedServicePlaceholder: 'Choose the desired direction...',

    dashboardTitle: 'Submissions Terminal (Local Session)',
    dashboardEmpty: 'Active submissions are not yet recorded in this session.',
    dashboardSubCount: 'Work Requests',
    dashboardNoInquiries: 'The parameters of your filled application will appear here in real time.',

    footerCopyright: 'Circle - Marketing Company',
    footerRights: 'All rights and brand orbits are reserved.'
  },
  ka: {
    navHome: 'მთავარი',
    navServices: 'სერვისები',
    navBrand: 'იდენტობა',
    navAbout: 'ჩვენ შესახებ',
    navContact: 'კონტაქტი',
    navFaq: 'FAQ',
    navStartProject: 'პროექტის დაწყება',
    
    heroBadge: 'სრული ციფრული მარკეტინგის სააგენტო',
    heroHeadingBefore: 'Your Marketing',
    heroHeadingHighlight: 'Circle.',
    heroHeadingAfter: '',
    heroSub: 'ყველა წარმატებული ბიზნესის უკან ადამიანები დგანან — პარტნიორები, რომლებიც თქვენს გვერდით არიან ყოველ ნაბიჯზე და ზრდის გზას თქვენთან ერთად გადიან. \nსწორედ ამიტომ შევქმენით Circle.\nსივრცე, სადაც მარკეტინგი არ შემოიფარგლება მხოლოდ ერთი სერვისით. აქ სტრატეგია, ბრენდინგი, დიზაინი, ციფრული განვითარება და ზრდაზე ორიენტირებული მარკეტინგი ერთიანდება, რათა თქვენი ბიზნესი უფრო ძლიერად, უფრო მკაფიოდ და უფრო თავდაჯერებულად განვითარდეს.\n\nჩვენთვის თითოეული პროექტი უბრალოდ დავალება არ არის. ეს არის ურთიერთობა, ნდობა და საერთო მიზანი — თქვენი წარმატება. ჩვენ ვმუშაობთ ისე, როგორც თქვენი გუნდის ნაწილი, ვეძებთ შესაძლებლობებს, ვაგვარებთ გამოწვევებს და ვქმნით გადაწყვეტილებებს, რომლებიც რეალურ შედეგებად გარდაიქმნება.\nამას ვგულისხმობთ, როდესაც ვამბობთ ჩვენ ვართ \nშენი მარკეტინგის წრე.',
    heroButtonPrimary: 'START NOW',
    heroButtonSecondary: 'გაიგე მეტი',
    heroSocialProof: 'გვენდობა 100-ზე მეტი წარმატებული ბიზნესი საქართველოში და გლობალურად',
    
    aboutBadge: 'ჩვენ შესახებ',
    aboutHeading: 'ჩვენი მიზანია მცირე კომპანიების გლობალურ, ძლიერ ბრენდებად გარდაქმნა.',
    aboutDesc: '2020 წლიდან ვეხმარებით ბიზნესებს მარკეტინგული მიზნების მიღწევაში სხვადასხვა ინდუსტრიასა და ბაზარზე. ამ წლების განმავლობაში ვიმუშავეთ როგორც ერთჯერად პროექტებზე, ისე გრძელვადიან პარტნიორობებზე, რაც დაგვეხმარა მრავალფეროვანი გამოცდილებისა და პრაქტიკული ცოდნის დაგროვებაში.\n\nჩვენი საქმიანობის მნიშვნელოვანი ნაწილი საერთაშორისო ბაზრებს უკავშირდება, სადაც სხვადასხვა ზომისა და მიმართულების კომპანიებთან თანამშრომლობით შევქმენით არაერთი წარმატებული პროექტი და მოვიპოვეთ კმაყოფილი მომხმარებლების ნდობა.\n\nCircle-ში გვჯერა, რომ ეფექტური მარკეტინგი მხოლოდ ცალკეული სერვისებისგან არ შედგება. ის იწყება სწორი სტრატეგიით, გრძელვდება ძლიერი ბრენდით და შედეგზე ორიენტირებული ქმედებებით. სწორედ ამიტომ თითოეულ პროექტს ინდივიდუალურად ვუდგებით და ვქმნით გადაწყვეტილებებს, რომლებიც კონკრეტულ მიზნებსა და რეალურ შედეგებზეა დაფუძნებული.\n\nჩვენთვის ყველაზე მნიშვნელოვანი გრძელვადიანი ურთიერთობებია, რომლებიც ნდობაზე, პროფესიონალიზმსა და საერთო წარმატებაზე შენდება. სწორედ ეს გამოცდილება და მიდგომა გვაძლევს საშუალებას ვიყოთ საიმედო პარტნიორი ბიზნესებისთვის, რომლებიც ზრდასა და განვითარებაზე არიან ორიენტირებულნი.',
    aboutStatsLabel: 'კლიენტების ზრდა',
    aboutGridTitle1: 'უმაღლესი დონის დიზაინი',
    aboutGridDesc1: 'ბრენდინგი, ლოგოები და გრაფიკული სტილი, რომელიც გამოარჩევს თქვენს კომპანიას.',
    aboutGridTitle2: 'ვებსაიტები & SEO',
    aboutGridDesc2: 'ულტრა-სწრაფი თანამედროვე ვებგვერდები და ტექნიკური ოპტიმიზაცია Google-ის პირველი გვერდისთვის.',
    aboutGridTitle3: 'რეკლამები & გაყიდვები',
    aboutGridDesc3: 'Google Ads, Meta & TikTok რეკლამების მართვა მაქსიმალური ფინანსური უკუგებით (ROI).',
    aboutGridTitle4: 'კონტენტი & ვიდეო',
    aboutGridDesc4: 'კრეატიული ვიდეო მონტაჟი, სცენარების წერა და ამბავზე დაფუძნებული ორგანული Reels/TikTok კონტენტი.',
    
    brandBadge: 'სააგენტოს პალიტრა',
    brandTitle: 'კოსმოსური & ნეონის ესთეტიკა',
    brandTypography: 'პრემიუმ ტიპოგრაფიული წყვილი',
    brandPalette: 'იასამნისფერი, ლურჯი და Cyan (ცისფერი) პალიტრები',
    brandVisuals: 'გრავიტაცია, ნეონის სფეროები და ორბიტები',
    brandHexCopy: 'დააკლიკე HEX კოდის დასაკოპირებლად',
    brandHexCopied: 'კოდი დაკოპირდა!',
 
    calcBadge: 'ზრდის კალკულატორი',
    calcTitle: 'ბრენდის ზრდის სიმულატორი',
    calcSubtitle: 'მართეთ ციფრული მარკეტინგის ბიუჯეტი და სამიზნე არხები, რათა გამოთვალოთ ბრენდის ხილვადობა და გაყიდვების ზრდის კოეფიციენტი.',
    calcBudget: 'სავარაუდო ყოველთვიური ბიუჯეტი ($)',
    calcFollowers: 'სამიზნე აუდიტორიის ზომა (იმპრესიები/თვე)',
    calcPlatform: 'მარკეტინგის ძირითადი ფოკუსი',
    calcEstReach: 'სავარაუდო ყოველთვიური წვდომა',
    calcEstEngagement: 'ჩართულობის მაჩვენებელი',
    calcEstROI: 'ბრენდის ზრდის კოეფიციენტი',
    calcDisclaimer: 'პროგნოზები ეფუძნება ქართული და გლობალური ბაზრის საშუალო კონვერსიულ მონაცემებს.',
 
    servicesBadge: 'სერვისები',
    servicesTitle: 'ჩვენი სერვისები რომელიც ეხმარება ბრენდს სწორი პოზიციონირებისთვის',
    servicesLearnMore: 'გაიგე მეტი',
    servicesClose: 'დახურვა',
    servicesIncluded: 'რას მოიცავს ეს სფერო:',
 
    contactBadge: 'კონტაქტები',
    contactTitle: 'გამოგვიგზავნეთ შეტყობინება თანამშრომლობისთვის',
    contactFormLabelName: 'თქვენი სახელი',
    contactFormLabelBrand: 'თქვენი ბრენდის ან კომპანიის სახელი',
    contactFormLabelEmail: 'ელ. ფოსტა',
    contactFormLabelService: 'საჭირო მიმართულება',
    contactFormLabelBudget: 'ყოველთვიური სარეკლამო ბიუჯეტი',
    contactFormLabelMessage: 'პროექტის მიზანი და თქვენი ხედვა',
    contactFormDragDrop: 'ჩააგდეთ პროექტის აღწერა, ბრიფი ან დოკუმენტები აქ, ან',
    contactFormBrowse: 'მოძებნეთ ფაილი',
    contactFormSubmit: 'გაგზავნა',
    contactFormSubmitting: 'კავშირის გაშვება...',
    contactFormSuccess: 'თქვენი შეტყობინება წარმატებით გაიგზავნა!',
    contactSelectedServicePlaceholder: 'აირჩიეთ სასურველი მიმართულება...',
 
    dashboardTitle: 'განაცხადების ტერმინალი (ლოკალური სესია)',
    dashboardEmpty: 'ამ სესიაზე აქტიური განაცხადები ჯერ არ ფიქსირდება.',
    dashboardSubCount: 'სამუშაო მოთხოვნები',
    dashboardNoInquiries: 'თქვენ მიერ შევსებული განაცხადის პარამეტრები გამოჩნდება აქ რეალურ დროში.',
 
    footerCopyright: 'Circle - მარკეტინგული კომპანია ',
    footerRights: 'ყველა უფლება და ბრენდის ორბიტა დაცულია.'
  }
};

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_DATA: Record<'en' | 'ka', FAQItem[]> = {
  en: [
    {
      id: 'faq1',
      question: 'What services does Circle offer?',
      answer: 'Circle is a full-service digital agency. We provide custom Growth & Marketing Strategy, Meta & Google Ads management, Web Development, SEO, Social Media Management (including Reels/TikTok video editing & scriptwriting), and comprehensive Graphic Design & Branding.'
    },
    {
      id: 'faq2',
      question: 'How does the Growth Simulator work?',
      answer: 'Our Simulator projects monthly reach, engagement, and a brand growth multiplier based on your estimated budget, target impressions goal, and marketing channel focus using historical conversion benchmarks in Georgian and global sectors.'
    },
    {
      id: 'faq3',
      question: 'What is your typical client onboarding process?',
      answer: 'We initiate our collaboration with a detailed strategy and goals discussion. Then, we perform an in-depth competitor and brand positioning audit, outline a custom action plan, and activate development and marketing sprints with constant progress synchronization.'
    },
    {
      id: 'faq4',
      question: 'Do you work with international clients?',
      answer: 'Yes! Our digital operations are highly global. We serve clients across Georgia and internationally, enabling multi-lingual campaigns, seamless localized payment gateways, and international-standard modern branding systems.'
    }
  ],
  ka: [
    {
      id: 'faq1',
      question: 'რა სერვისებს გვთავაზობს Circle?',
      answer: 'Circle არის სრული ციფრული მარკეტინგის სააგენტო, რომელიც გთავაზობთ მარკეტინგულ სტრატეგიასა და ზრდას, Meta-სა და Google Ads რეკლამების მართვას, ვებ გვერდების დეველოპმენტს, ტექნიკურ და შიდა SEO ოპტიმიზაციას, სოციალური მედიის (SMM) მართვას და ბრენდინგს/გრაფიკულ დიზაინს.'
    },
    {
      id: 'faq2',
      question: 'როგორ მუშაობს ბრენდის ზრდის სიმულატორი?',
      answer: 'ჩვენი სიმულატორი ითვლის სავარაუდო ყოველთვიურ წვდომას, ჩართულობის დონესა და ზრდის კოეფიციენტს თქვენი სარეკლამო ბიუჯეტის, სამიზნე აუდიტორიის ზომისა და მარკეტინგული მიმართულების გათვალისწინებით.'
    },
    {
      id: 'faq3',
      question: 'რა ეტაპებს მოიცავს Circle-თან თანამშრომლობის დაწყება?',
      answer: 'პროცესს ვიწყებთ გაცნობითი შეხვედრით, სადაც განვიხილავთ თქვენს მიზნებს. შემდეგ ვატარებთ ბაზრისა და კონკურენტების სიღრმისეულ კვლევას, ვქმნით პერსონალიზებულ მარკეტინგულ საგზაო რუკას და გადავდივართ აქტიურ სამუშაო ფაზაში.'
    },
    {
      id: 'faq4',
      question: 'მუშაობს თუ არა Circle საერთაშორისო ბრენდებთან?',
      answer: 'დიახ! ჩვენი საქმიანობის დიდი ნაწილი დაფუძნებულია გლობალურ გამოცდილებაზე. ჩვენ ვთანამშრომლობთ როგორც ქართულ კომპანიებთან, ასევე სხვადასხვა საერთაშორისო სტარტაპთან და დაფუძნებულ ბრენდთან მსოფლიოს გარშემო.'
    }
  ]
};

