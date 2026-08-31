export interface ResumeHeader {
  title: string;
  subtitle: string;
  pdfDownloadUrl: string;
}

export interface Experience {
  title: string;
  employer: string;
  date: string;
  icon: string;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  school: string;
  gpa: string;
  coursework: string[];
}

export interface SkillCategory {
  name: string;
  tagClass: "tags" | "tags2" | "tags3" | "tags4";
  skills: string[];
}

export interface Certification {
  id: string;
  title: string;
  variant: "lightBox" | "lightBox2";
  previewUrl: string | null;
  openUrl: string | null;
  subItems?: string[];
}

export const resumeHeader: ResumeHeader = {
  title: "☆ Resume",
  subtitle: "My professional experience and qualifications",
  pdfDownloadUrl:
    "https://drive.google.com/file/d/1wmJAdAx4VDeMcPCHt6tFy_NRkG8F-6cS/view?usp=sharing",
};

export const experiences: Experience[] = [
  {
    title: "Swift 101 Co-instructor",
    employer: "Innovation Center",
    date: "August 2026 - Present",
    icon: "/Portfolio/images/resume/uicIcon.jpeg",
    responsibilities: [
      "Teach students the fundamentals of Swift programming and SwiftUI for iOS app development in preparation for the Swift Associate Certification",
      "Co-leading live app-building sessions, delivering guided instruction, hosting office hours to provide individualized support, and proctoring student certifications",
    ],
  },
  {
    title: "Founder & Lead Developer",
    employer: "Continuum",
    date: "June 2026 - Present",
    icon: "/Portfolio/images/resume/continuumIcon.jpeg",
    responsibilities: [
      "Gamified speech therapy IOS app for kids 4-10",
      "Provides motivation, proper feedback and data tracking of improvement for clinicians and parents",
      "Utilizes a Machine Learning model for voice feedback and WebKit for video integration",
    ],
  },
  {
    title: "Web Developer",
    employer: "SparkHacks",
    date: "Aug 2026 - Present",
    icon: "/Portfolio/images/resume/sparkhacksIcon.jpeg",
    responsibilities: [
      "Build and maintain the SparkHacks website",
      "Develop registration dashboard and manage user data exports",
      "Implement QR code check-in system and other event tech tools",
    ],
  },
  {
    title: "Teaching Assistant - Computer Design",
    employer: "University of Illinois at Chicago",
    date: "Jan 2026 - Present",
    icon: "/Portfolio/images/resume/uicIcon.jpeg",
    responsibilities: [
      "Assisted students in debugging C/C++ code and troubleshooting circuit designs to fix wiring issues and improve understanding",
      "Co-Led hands on lab sessions and collaborated with teaching assistants to explain complex computer design concepts and prepare students for upcoming coursework",
      "Provided technical guidance for semester-long group projects, helping teams overcome challenges and successfully complete their goals",
    ],
  },
  {
    title: "Capital One Launchpad: Legacy & Leadership Program",
    employer: "Capital One",
    date: "Jul 2026",
    icon: "/Portfolio/images/resume/capitalOneIcon.jpeg",
    responsibilities: [
        "Selected as one of 50 students from HACU-member institutions to participate in Capital One’s professional development program focused on financial services, innovation, and strategy",
        "Collaborated with a team to develop and present a 7-minute business pitch for Capital One’s case competition, analyzing market opportunities, financial impact, and growth strategies",
        "Created financial projections and business recommendations while networking with Capital One associates and industry professionals to gain insights into corporate strategy and innovation",
    ],
  },
  {
    title: "App Accelarator Developer: Startup Edition",
    employer: "Everyone Can Code Chicgo",
    date: "June 2026 - Present",
    icon: "/Portfolio/images/resume/eccIcon.jpeg",
    responsibilities: [
      "Selected as a Top 12 team out of 56 Chicago wide teams on Competition day",
      "Collaborate on a cross-functional startup team to design, develop, and launch an iOS application using real-world product development workflows",
      "Contribute to the end-to-end startup process by developing a companion website, applying design thinking principles, and validating product ideas",
      "Create and deliver a professional investor-style pitch deck while gaining hands-on experience in entrepreneurship, product strategy, and collaborative problem-solving",
    ],
  },
  {
    title: "CS/DS NSAR Ambassador",
    employer: "University of Illinois Chicago College of Engineering",
    date: "May 2026 - Aug 2026",
    icon: "/Portfolio/images/resume/uicIcon.jpeg",
    responsibilities: [
      "Guiding CS/DS Transfer and New students through course registration and hold removals",
      "Discussing CS/DS coursework and audit credit alongside placement tests",
      "Supporting students through their new student onboarding process",
    ],
  },
  {
    title: "Health Access Lab Research Intern",
    employer: "Innovation Center",
    date: "Feb 2026 - Aug 2026",
    icon: "/Portfolio/images/resume/uicIcon.jpeg",
    responsibilities: [
      "Researching and developing innovative healthcare solutions using Apple's software ecosystem, with the focus of improving health access and usability",
      "Working in an interdisciplinary team to analyze health access patterns, synthesize findings and define scope",
    ],
  },
  {
    title: "Sandbox Labratory Assistant/Swift 101 tutor",
    employer: "Innovation Center",
    date: "Feb 2026 - Aug 2026",
    icon: "/Portfolio/images/resume/uicIcon.jpeg",
    responsibilities: [
      "Supporting hands-on learning experiences focused on Swift programming and Apple developer tools as part of Apple's Community Education Initiative",
      "Collaborating with lab and teaching staff to facilitate immersive, community-focused technology events",
      "Tutoring Swift 101 students helping them with coursework and prep for the certification exam alongside proctering",
    ],
  },
  {
    title: "Web Developer",
    employer: "Women in Computer Science @ UIC",
    date: "Sept 2025 - Dec 2025",
    icon: "/Portfolio/images/resume/wiCSIcon.jpeg",
    responsibilities: [
      "Built a full-stack e-commerce website for SweetT Bakery with customizable product ordering, checkout flow, and live order tracking for customers",
      "Implemented a Node.js + Express REST API with MongoDB to manage products, customers, and orders, including order status pipeline",
      "Developed an admin portal with authentication/authorization, enabling staff to log in, view incoming orders, update order status, and manage products",
      "Designed a custom order builder (size, flavors, fillings, decorations) using Astro + Tailwind",
      "Collaborated with a team of 15 students using Git Version Control (branches, pull requests, code reviews)",
    ],
  },
  {
    title: "Research Assistant - Detecting Emotions in Large Language Models",
    employer: "University of Illinois at Chicago",
    date: "June 2025 - Aug 2025",
    icon: "/Portfolio/images/resume/uicIcon.jpeg",
    responsibilities: [
      "Read academic papers related to LLM exhibition of emotions, and interacted with existing LLM's to determine whether they behave in a way that exhibits emotions",
      "Determined whether the emotions are correlated with some hardware or software signatures",
      "Utilized Python and Ollama to recreate data from research papers to test its validity",
    ],
  },
  {
    title: "Teaching Assistant - Mathematical Foundations of Computing",
    employer: "University of Illinois at Chicago",
    date: "Jan 2025 - May 2025",
    icon: "/Portfolio/images/resume/uicIcon.jpeg",
    responsibilities: [
      "Host weekly, in-person office hours to assist students understanding of logic, quantifiers, sets and proofs",
      "Co-lead lab sessions of 25+ students, answering questions about discrete mathematics and propositional logic",
      "Grade students labs and update grades on BlackBoard (university-wide learning management system)",
      "Monitor Piazza discussion platform for questions about the course and its material",
    ],
  },
];

export const education: Education = {
  degree: "Bachelor of Science in Computer Science and minor in Mathematics",
  school: "University of Illinois at Chicago | 2024 - 2027",
  gpa: "GPA: 3.9/4.0",
  coursework: [
    "Data Structures & Algorithms",
    "Web Development",
    "Machine Organization",
    "Program Design",
    "Languages and Automata",
    "Software Design",
    "Computer Design",
    "Systems Programming",
    "Game Development & Design",
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming languages",
    tagClass: "tags",
    skills: [
      "C", "C++", "C#", "JavaScript", "Python", "Java",
      "HTML", "CSS", "Dart", "Swift", "F#", "SQL",
    ],
  },
  {
    name: "Frameworks & Libraries",
    tagClass: "tags2",
    skills: ["Node.js", "Astro", "Express", "React", "Flutter"],
  },
  {
    name: "Tools & Technologies",
    tagClass: "tags3",
    skills: [
      "Git", "MongoDB", "AWS", "Figma", "Unity 3D",
      "UEFN - Unreal Editor for Fortnite", "Unreal Engine",
    ],
  },
  {
    name: "Concepts",
    tagClass: "tags4",
    skills: ["API", "Data Structures", "Algorithms"],
  },
];

/*
  {
    id: "",
    title: "",
    variant: "lightBox2",
    previewUrl: "https://drive.google.com/file/d/FILE_ID/preview",
    openUrl: "https://drive.google.com/file/d/FILE_ID/view?usp=sharing",
    // Use null for either field when no preview or external link is available:
    // previewUrl: null,
    // openUrl: null,
  },
*/

export const certifications: Certification[] = [
  {
    id: "AI110-certificate",
    title: "CodePath: Foundations of AI Engineering",
    variant: "lightBox",
    previewUrl: "https://certificates.codepath.org/32ab2659-213b-4083-af02-accbdb0112ba.pdf",
    openUrl: "https://certificates.codepath.org/32ab2659-213b-4083-af02-accbdb0112ba.pdf",
  },
  {
    id: "Web102-certificate",
    title: "CodePath: Intermediate Web Development",
    variant: "lightBox",
    previewUrl: "https://certificates.codepath.org/871d8ea6-843f-4cb4-b414-7f7f3f93c82f.pdf",
    openUrl: "https://certificates.codepath.org/871d8ea6-843f-4cb4-b414-7f7f3f93c82f.pdf",
  },
  {
    id: "Claude-101",
    title: "Anthropic: Claude 101",
    variant: "lightBox",
    previewUrl: "https://drive.google.com/file/d/1bU3pTuG_C6KAsHhJGCsLi2MyPAav8ooS/preview",
    openUrl: "https://verify.skilljar.com/c/gy3bxowfaggq",
  },
  {
    id: "AI-fluency",
    title: "Anthropic: AI Fluency Framework & Foundations",
    variant: "lightBox",
    previewUrl: "https://drive.google.com/file/d/1jEwLbacMXekDYjeK4xtXfkE-L9bH4927/preview",
    openUrl: "https://verify.skilljar.com/c/hkydjfawwdp4",
  },
  {
    id: "epic-games-game-jam-2026",
    title: "Epic Games & UIC Game Jam 2026 2nd place for Gameplay",
    variant: "lightBox2",
    previewUrl: "https://drive.google.com/file/d/1POrHZ5XyDguF7kI0Y6mhpEaDD8dX_qoM/preview",
    openUrl: "https://drive.google.com/file/d/1POrHZ5XyDguF7kI0Y6mhpEaDD8dX_qoM/view?usp=sharing",
  },
  {
    id: "citi-program-certification",
    title: "CITI Program Certification: Research Security and Integrity (June 2026)",
    variant: "lightBox",
    previewUrl: "https://drive.google.com/file/d/1VThnXmF9xlBd4SFFZ0EXBalf3vUpXIWH/preview",
    openUrl: "https://www.citiprogram.org/verify/?w02836210-6019-46ff-ba50-6d176faac6c4-76846314",
  },
  {
    id: "apple-swift-associate",
    title: "Apple Certification: App Development with Swift – Associate (Dec 2025)",
    variant: "lightBox",
    previewUrl: "https://drive.google.com/file/d/1m4FXUg_NgovFxJRy9LpEgI98iNDF4b7k/preview",
    openUrl: "https://drive.google.com/file/d/1m4FXUg_NgovFxJRy9LpEgI98iNDF4b7k/view?usp=sharing",
  },
  {
    id: "uic-deans-list",
    title:
      "Academic Achievement: University of Illinois Chicago's College of Engineering Dean's List",
    variant: "lightBox2",
    previewUrl: "https://drive.google.com/file/d/11o86rtdYg7Oi5eiFPgT7QPfWjQ8kCwBL/preview",
    openUrl: "https://engineering.uic.edu/undergraduate/academic-honors/#deans-list",
    subItems: ["Fall 2024, Spring 2025, Fall 2025, Spring 2026"],
  },
  {
    id: "fitch-codeathon-2024",
    title: "Fitch Group 2024 Codeathon Runner Up",
    variant: "lightBox2",
    previewUrl: null,
    openUrl: null,
  },
];

/*
Returns a certification entry by its unique id.
 - Parameter id: The certification slug used in the URL path
 - Returns: The matching certification, or undefined if not found
*/
export function getCertificationById(id: string): Certification | undefined {
  return certifications.find((certification) => certification.id === id);
}
