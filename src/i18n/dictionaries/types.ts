export type Dictionary = {
  meta: {
    titleDefault: string;
    titleTemplate: string;
    description: string;
    ogTitle: string;
  };
  brand: {
    alias: string;
  };
  nav: {
    inquire: string;
    languageLabel: string;
  };
  hero: {
    tagline: string;
    description: string;
    descriptionLong: string;
    ctaPrimary: string;
    ctaSecondary: string;
    aiNotice: string;
    aiNoticeMore: string;
  };
  ritual: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Array<{
      id: string;
      label: string;
      title: string;
      body: string;
      bodySecondary: string;
      imageAlt: string;
      imageCaption: string;
    }>;
  };
  formats: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Array<{
      id: string;
      label: string;
      title: string;
      body: string;
      href: string;
      cta: string;
    }>;
  };
  videos: {
    eyebrow: string;
    title: string;
    intro: string;
    items: Array<{
      id: string;
      title: string;
      description: string;
    }>;
  };
  screen: {
    eyebrow: string;
    title: string;
    intro: string;
    body: string;
    featuredCaption: string;
    featuredAlt: string;
    gallery: Array<{ caption: string; alt: string }>;
  };
  proof: {
    eyebrow: string;
    title: string;
    intro: string;
    uspsEyebrow: string;
    featuredCaption: string;
    featuredAlt: string;
    pairA: Array<{ caption: string; alt: string }>;
    pairB: Array<{ caption: string; alt: string }>;
    usps: Array<{ title: string; body: string }>;
    vertical: Array<{ caption: string; alt: string }>;
  };
  origin: {
    eyebrow: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
    targetLabel: string;
  };
  offer: {
    eyebrow: string;
    title: string;
    body: string;
    bullets: string[];
    pdfEyebrow: string;
    pdfSubtitle: string;
    pages: string;
    label: string;
    freeNote: string;
  };
  access: {
    eyebrow: string;
    title: string;
    body: string;
    bodySecondaryBefore: string;
    offerLink: string;
    bodySecondaryAfter: string;
    ctaEmail: string;
    ctaCal: string;
    ctaCall: string;
    mailtoSubject: string;
    mailtoBody: string;
  };
  footer: {
    tagline: string;
    offerPdf: string;
    contact: string;
    impressum: string;
    imageNotice: string;
  };
  impressum: {
    title: string;
    legalEyebrow: string;
    back: string;
    tmgHeading: string;
    imageHeading: string;
    imageBody: string;
    disclaimerHeading: string;
    privacyHeading: string;
    legalNote: string;
  };
  youtube: {
    play: string;
  };
};
