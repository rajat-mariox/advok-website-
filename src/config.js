// Logo Configuration — one place to set your logo everywhere (header, intro, footer, etc.)
// • File: put your image in the "public" folder (e.g. public/my-logo.png) and set LOGO to "/my-logo.png"
// • Link: set LOGO to a full URL (e.g. "https://example.com/logo.png")
const LOGO = "https://advok-files.s3.ap-south-1.amazonaws.com/images/White-Mono.png";

export const LOGO_CONFIG = {
  LOGO_URL: LOGO,
  FALLBACK_TEXT: "A",
  FALLBACK_COLOR: "white",
  BACKUP_URLS: [LOGO],
};

// Hero = first/large image (unchanged). Small images below = sci-fi + law style (like "scifi law" search).
const U = "https://images.unsplash.com";

// Hero & legal — hero stays as before (Lady Justice); strip/legal use local or Unsplash
export const LEGAL_IMAGES = {
  hero: "/lady-justice-hero.png",
  heroAlt: `${U}/photo-1734640672449-0d65faceb323?w=1920&q=80`,
  legalPractice: `${U}/photo-1589829545856-d10d557cf95f?w=800&q=80`,
  legalPracticeAlt: "/legal-practice.jpg",
  courtroom: `${U}/photo-1645570990200-2701a49d45ca?w=800&q=80`,
  courtroomAlt: "/legal-courtroom.jpg",
  documents: `${U}/photo-1450101499163-c8848c66ca85?w=800&q=80`,
  documentsAlt: "/legal-documents.jpg",
  team: `${U}/photo-1593115057322-e94b77572f20?w=800&q=80`,
  teamAlt: "/legal-team.jpg",
};

// Small images (product blocks, problem section): your legal-tech images in public/
// 1=Legal Tech Ecosystem, 2=legal icons network, 3=AI+justice, 4=scale/gavel, 5=industrial/tablet, 6=Digital Transformation, 7=holographic legal, 8=Compliance
export const PRODUCT_IMAGES = {
  hero: "/legal-tech-1.png",
  cases: "/legal-tech-2.png",
  ai: "/legal-tech-3.png",
  chat: "/legal-tech-7.png",
  court: "/legal-tech-4.png",
  problem: "/legal-tech-6.png",
};

export const getLogoUrl = () => LOGO_CONFIG.LOGO_URL;
