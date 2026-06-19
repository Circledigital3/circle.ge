export type Language = 'en' | 'ka';

export interface ServiceDetail {
  id: string;
  iconName: string;
  num: string;
  title: string;
  tagline: string;
  description: string;
  detailedPoints: string[];
  metricLabel: string;
  metricValue: string;
}

export interface Inquiry {
  id: string;
  date: string;
  name: string;
  brandName: string;
  email: string;
  service: string;
  budget: string;
  message: string;
  files: { name: string; size: number }[];
}

export interface TranslationDictionary {
  navHome: string;
  navServices: string;
  navBrand: string;
  navAbout: string;
  navContact: string;
  navFaq: string;
  navStartProject: string;
  
  heroBadge: string;
  heroHeadingBefore: string;
  heroHeadingHighlight: string;
  heroHeadingAfter: string;
  heroSub: string;
  heroButtonPrimary: string;
  heroButtonSecondary: string;
  heroSocialProof: string;
  
  aboutBadge: string;
  aboutHeading: string;
  aboutDesc: string;
  aboutStatsLabel: string;
  aboutGridTitle1: string;
  aboutGridDesc1: string;
  aboutGridTitle2: string;
  aboutGridDesc2: string;
  aboutGridTitle3: string;
  aboutGridDesc3: string;
  aboutGridTitle4: string;
  aboutGridDesc4: string;

  brandBadge: string;
  brandTitle: string;
  brandTypography: string;
  brandPalette: string;
  brandVisuals: string;
  brandHexCopy: string;
  brandHexCopied: string;

  calcBadge: string;
  calcTitle: string;
  calcSubtitle: string;
  calcBudget: string;
  calcFollowers: string;
  calcPlatform: string;
  calcEstReach: string;
  calcEstEngagement: string;
  calcEstROI: string;
  calcDisclaimer: string;

  servicesBadge: string;
  servicesTitle: string;
  servicesLearnMore: string;
  servicesClose: string;
  servicesIncluded: string;

  contactBadge: string;
  contactTitle: string;
  contactFormLabelName: string;
  contactFormLabelBrand: string;
  contactFormLabelEmail: string;
  contactFormLabelService: string;
  contactFormLabelBudget: string;
  contactFormLabelMessage: string;
  contactFormDragDrop: string;
  contactFormBrowse: string;
  contactFormSubmit: string;
  contactFormSubmitting: string;
  contactFormSuccess: string;
  contactSelectedServicePlaceholder: string;

  dashboardTitle: string;
  dashboardEmpty: string;
  dashboardSubCount: string;
  dashboardNoInquiries: string;

  footerCopyright: string;
  footerRights: string;
}
