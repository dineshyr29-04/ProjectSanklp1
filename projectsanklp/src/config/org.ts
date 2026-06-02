import orgContent from "../../content/org-content.json";

export interface ValueItem {
  title: string;
  description: string;
  icon: string;
}

export interface HistoryItem {
  year: string;
  title: string;
  description: string;
}

export interface StatItem {
  value: string;
  label: string;
  icon: string;
}

export interface CaseStudyItem {
  title: string;
  challenge: string;
  solution: string;
  result: string;
  category: string;
}

export interface InitiativeItem {
  id: string;
  title: string;
  description: string;
  impact: string;
  image: string;
  category: string;
}

export interface EventItem {
  id: string;
  date: string;
  category: string;
  title: string;
  description: string;
  location: string;
}

export interface ProgramItem {
  id: string;
  title: string;
  description: string;
  category: string;
  ctaText: string;
  ctaLink: string;
  icon: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  email: string;
  linkedin: string;
}

export interface PartnerItem {
  name: string;
  description: string;
  logoType: string;
}

export interface GalleryItem {
  title: string;
  description: string;
  category: string;
  imageUrl: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  info: string;
  initials?: string;
}

export interface OrgContent {
  orgName: string;
  hero: {
    title: string;
    tagline: string;
    primaryCta: { text: string; link: string };
    secondaryCta: { text: string; link: string };
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    mission: string;
    vision: string;
    values: ValueItem[];
    history: HistoryItem[];
  };
  impact: {
    title: string;
    subtitle: string;
    stats: StatItem[];
    caseStudies: CaseStudyItem[];
  };
  initiatives: InitiativeItem[];
  events: EventItem[];
  programs: {
    title: string;
    subtitle: string;
    list: ProgramItem[];
  };
  team: {
    title: string;
    subtitle: string;
    members: TeamMember[];
  };
  partners: {
    title: string;
    subtitle: string;
    list: PartnerItem[];
  };
  gallery: {
    title: string;
    subtitle: string;
    stories: GalleryItem[];
  };
  testimonials: TestimonialItem[];
  contact: {
    email: string;
    phone: string;
    address: string;
    socials: {
      twitter: string;
      linkedin: string;
      github: string;
      instagram: string;
    };
  };
}

export const siteConfig: OrgContent = orgContent as OrgContent;
