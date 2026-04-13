/**
 * SEO Configuration for Portfolio
 * Defines meta tags, Open Graph data, and structured data for all pages
 */

const siteURL = "https://babs-unique.github.io/Adegboye-Babatunde";
const siteName = "Babatunde Adegboye - Frontend Developer";
const authorName = "Babatunde Adegboye";
const authorImage = `${siteURL}/og-image.png`;

export const SEO_CONFIG = {
  DEFAULT: {
    title: "Babatunde Adegboye | Frontend Developer",
    description:
      "Junior Fullstack Developer specializing in React, JavaScript, and modern web technologies. Creating fast, accessible, and beautiful web experiences.",
    keywords: "frontend developer, React developer, JavaScript, web developer, portfolio",
    canonical: siteURL,
    ogImage: authorImage,
    ogType: "website",
  },
  ABOUT: {
    title: "About Me | Babatunde Adegboye",
    description:
      "Learn about my journey as a frontend developer, my expertise in React, JavaScript, and my approach to clean code and performance.",
    keywords: "about, frontend developer, React, JavaScript, web development",
    canonical: `${siteURL}/#about`,
    ogImage: authorImage,
    section: "About",
  },
  PROJECTS: {
    title: "My Projects | Babatunde Adegboye",
    description:
      "Explore my portfolio of projects built with React, JavaScript, Tailwind CSS, and modern web technologies. See what I've created.",
    keywords: "projects, portfolio, React projects, web development, case studies",
    canonical: `${siteURL}/#projects`,
    ogImage: authorImage,
    section: "Projects",
  },
  EXPERIENCE: {
    title: "Experience & Skills | Babatunde Adegboye",
    description:
      "Check out my professional experience, technical skills, and expertise in frontend development and web technologies.",
    keywords: "experience, skills, frontend development, JavaScript, React",
    canonical: `${siteURL}/#experience`,
    ogImage: authorImage,
    section: "Experience",
  },
  TESTIMONIALS: {
    title: "Testimonials | Babatunde Adegboye",
    description:
      "Read testimonials from colleagues and clients about my work as a frontend developer.",
    keywords: "testimonials, reviews, frontend developer",
    canonical: `${siteURL}/#testimonials`,
    ogImage: authorImage,
    section: "Testimonials",
  },
  CONTACT: {
    title: "Contact Me | Babatunde Adegboye",
    description:
      "Get in touch with me. I'm always open to new opportunities, collaborations, and interesting projects.",
    keywords: "contact, hire developer, collaboration, email",
    canonical: `${siteURL}/#contact`,
    ogImage: authorImage,
    section: "Contact",
  },
};

/**
 * Structured Data Schema (JSON-LD)
 * For Person/Developer profile
 */
export const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: authorName,
  jobTitle: "Frontend Developer",
  url: siteURL,
  image: authorImage,
  description:
    "Junior Fullstack Developer specializing in React and modern JavaScript",
  sameAs: [
    "https://github.com/Babs-unique",
    "https://www.linkedin.com/in/babatunde-adegboye/",
    "https://x.com/DevTunde5v",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },
};

/**
 * Website Schema (JSON-LD)
 * For site-wide structured data
 */
export const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteURL,
  description: SEO_CONFIG.DEFAULT.description,
  author: {
    "@type": "Person",
    name: authorName,
  },
};

/**
 * Helper function to get SEO config for a page
 */
export const getSEOConfig = (page = "DEFAULT") => {
  return {
    ...SEO_CONFIG.DEFAULT,
    ...SEO_CONFIG[page],
  };
};
