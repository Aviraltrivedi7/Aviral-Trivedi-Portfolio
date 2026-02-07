// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import framermotionLogo from './assets/tech_logo/framer.png';
import renderLogo from './assets/tech_logo/render.png';


// Education Section Logo's
import cbse from './assets/education_logo/cbse.png'

// Project Section Logo's
// Project Section Logo's
import iit from './assets/education_logo/iit.png';
import profile from './assets/aviral.jpg';
import kanpurMetro from './assets/work_logo/kanpur_metro.jfif';
import smartBudget from './assets/work_logo/smart_budget.jfif';
import cryptoDashboard from './assets/work_logo/crypto_dashboard.png';

// Note: work_logo images were missing, using profile image as placeholder for projects



export const personalInfo = {
  name: "Aviral Trivedi",
  firstName: "Aviral",
  lastName: "Trivedi",
  role: "Web Developer",
  roles: ["Web Developer", "Frontend Developer", "React.js Developer"],
  about: `We are committed to building a modern, transparent, and people focused digital platform that represents our community with clarity and purpose. This website is designed to provide accurate information, important updates, and easy access to public services in one place.\n\nOur goal is simple: make information accessible to everyone. From local announcements and public resources to development updates and community highlights, we aim to keep citizens informed and connected.\n\nThis platform reflects growth, responsibility, and trust. It is built to support residents, students, businesses, and visitors by offering a reliable digital space that promotes awareness, participation, and progress.\n\nWe believe that strong communities grow with transparency, technology, and collaboration. This website is a step towards a smarter and more connected future.`,
  resumeUrl: "/Aviraltrivedi.pdf",
  contactInfo: {
    phone: "+919219797581",
    location: "Kanpur, Uttar Pradesh, India",
    email: "trivediaviral46@gmail.com"
  },
  socialLinks: {
    github: "https://github.com/Aviraltrivedi7",
    linkedin: "https://www.linkedin.com/in/aviral-trivedi0/",
    whatsapp: "https://wa.me/919219797581?text=Hello!",
    facebook: "https://www.facebook.com/aviral.trivedi",
    instagram: "https://www.instagram.com/aviral.trivedi"
  }
};

export const SkillsInfo = [
  {
    id: 1,
    name: 'HTML',
    logo: htmlLogo
  },
  {
    id: 2,
    name: 'CSS',
    logo: cssLogo
  },
  {
    id: 3,
    name: 'JavaScript',
    logo: javascriptLogo
  },
  {
    id: 4,
    name: 'React JS',
    logo: reactjsLogo
  },
  {
    id: 5,
    name: 'Tailwind CSS',
    logo: tailwindcssLogo
  },
  {
    id: 6,
    name: 'GSAP',
    logo: gsapLogo
  },
  {
    id: 7,
    name: 'Framer Motion',
    logo: framermotionLogo
  },
  {
    id: 8,
    name: 'Node JS',
    logo: nodejsLogo
  },
  {
    id: 9,
    name: 'Express JS',
    logo: expressjsLogo
  },
  {
    id: 10,
    name: 'MongoDB',
    logo: mongodbLogo
  },
  {
    id: 11,
    name: 'Python',
    logo: pythonLogo
  },
  {
    id: 12,
    name: 'Git',
    logo: gitLogo
  },
  {
    id: 13,
    name: 'GitHub',
    logo: githubLogo
  },
  {
    id: 14,
    name: 'VS Code',
    logo: vscodeLogo
  },
  {
    id: 15,
    name: 'Vercel',
    logo: vercelLogo
  },
  {
    id: 16,
    name: 'Netlify',
    logo: netlifyLogo
  },
  {
    id: 17,
    name: 'Render',
    logo: renderLogo
  },
];


export const education = [
  {
    id: 0,
    img: iit,
    school: "Indian Institute of Technology Madras (IIT Madras)",
    date: "2024 - 2028",
    grade: "Ongoing",
    degree: "BS in Data Science and Applications - Focused on Data Science, Machine Learning, and Artificial Intelligence with hands-on experience in data analytics, coding, and problem solving.",
  },
  {
    id: 1,
    img: cbse,
    school: "Kendriya Vidyalaya Sangathan (KVS)",
    date: "2012 - 2024",
    grade: "Completed",
    degree: "Full schooling from Class 1 to 12 - Developed a strong academic foundation and discipline through KVS's national-level education system.",
  },
];

export const projects = [

  {
    id: 1,
    title: "Kanpur Metro Safar Guide",
    description:
      "Developed a responsive metro route and fare guide web app for Kanpur city using React.js and Tailwind CSS. Integrated real-time data and created an intuitive UI for smooth navigation and city travel assistance. Focused on user-friendly design, performance optimization, and clean frontend architecture.",
    image: kanpurMetro,
    tags: ["React.js", "Tailwind CSS", "Responsive Design"],
    github: "https://github.com/Aviraltrivedi7/Kanpur-Metro-Safar-Guide",
    webapp: "https://kanpur-metro-safar-guide.vercel.app",
  },
  {
    id: 2,
    title: "SmartBudget – AI-Enhanced Budget Planner",
    description:
      "Built an AI-powered budgeting web app using React.js and Tailwind CSS to help users manage expenses efficiently. Implemented interactive charts and smart suggestions for income and expense tracking. Focused on clean UI, responsive design, and seamless user experience.",
    image: smartBudget,
    tags: ["React.js", "Tailwind CSS", "AI", "Charts"],
    github: "https://github.com/Aviraltrivedi7/SmartBudget",
    webapp: "https://smartbudget-ai-enhanced7.vercel.app",
  },
  {
    id: 3,
    title: "CryptoDashboard – Real-Time Crypto Tracker",
    description:
      "Built a modern cryptocurrency dashboard using React.js to track real-time prices, market trends, and portfolio performance. Features interactive charts, live price updates, and a sleek dark-themed UI. Focused on API integration, responsive design, and seamless user experience.",
    image: cryptoDashboard,
    tags: ["React.js", "API Integration", "Charts", "Crypto"],
    github: "https://github.com/Aviraltrivedi7/CryptoDashboard",
    webapp: "https://cryptodashboard11425.vercel.app",
  },
];


import iitkAdv from './assets/certificate_activity_img/IITK_Advanced_Cybersecurity_Certificate.png';
import iitkCyber from './assets/certificate_activity_img/IITK_Cybersecurity_Certificate (1).png';
import google3 from './assets/certificate_activity_img/Google3.JPG';
import microsoft from './assets/certificate_activity_img/microsoft.jpg';
import ibmCert from './assets/certificate_activity_img/ibm_certificate.png';
import oracle from './assets/certificate_activity_img/ORACLE.JPG';
import googleOld from './assets/certificate_activity_img/google.JPG';
import aviralCert from './assets/certificate_activity_img/Aviral cert.JPG';

export const certificates = [
  {
    id: 1,
    img: iitkAdv, // Using certificate image as logo placeholder
    logo: iitkAdv,
    certificateImage: iitkAdv,
    title: "Advanced Cybersecurity",
    issuer: "IIT Kanpur",
    date: "2025",
    description: "Advanced certification in Cybersecurity.",
  },
  {
    id: 2,
    img: iitkCyber,
    logo: iitkCyber,
    certificateImage: iitkCyber,
    title: "Cybersecurity Fundamentals",
    issuer: "IIT Kanpur",
    date: "2025",
    description: "Certification in Cybersecurity fundamentals.",
  },
  {
    id: 3,
    img: google3,
    logo: google3,
    certificateImage: google3,
    title: "Google Technical Certification",
    issuer: "Google",
    date: "2025",
    description: "Professional certification from Google.",
  },
  {
    id: 4,
    img: microsoft,
    logo: microsoft,
    certificateImage: microsoft,
    title: "Microsoft Certification",
    issuer: "Microsoft",
    date: "2025",
    description: "Professional certification from Microsoft.",
  },
  {
    id: 5,
    img: oracle,
    logo: oracle,
    certificateImage: oracle,
    title: "Oracle Certification",
    issuer: "Oracle",
    date: "2025",
    description: "Professional certification from Oracle.",
  },
  {
    id: 6,
    img: ibmCert,
    logo: ibmCert,
    certificateImage: ibmCert,
    title: "Frontend Web Development Internship",
    issuer: "IBM",
    date: "2025",
    description: "Completed Frontend Web Development Internship at IBM.",
  },
  {
    id: 7,
    img: googleOld,
    logo: googleOld,
    certificateImage: googleOld,
    title: "Google Certification",
    issuer: "Google",
    date: "2025",
    description: "Professional certification from Google.",
  },
  {
    id: 8,
    img: aviralCert,
    logo: aviralCert,
    certificateImage: aviralCert,
    title: "Certificate of Appreciation",
    issuer: "Organization",
    date: "2025",
    description: "Recognition for contribution.",
  },
];

import campusRun from './assets/certificate_activity_img/campus_run.jfif';

export const extraCurricularActivities = [
  {
    id: 1,
    title: "Volunteer in Campus Run Event",
    description: "Credential ID: PRDX2500608. Volunteer for the campus run event at IIT Madras.",
    date: "Jul 2025 - Jul 2028",
    certificateImage: campusRun,
  },
];
// Extra curricular activities section is currently empty
