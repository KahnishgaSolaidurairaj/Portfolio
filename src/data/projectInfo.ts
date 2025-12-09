export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  date: string; 
  images: string[];
  tags: string[];
  github: string | null;
  demo: string | null;
  features: string[];
  technologies: string[];
  challenges?: string;
  learnings?: string;
}

export const projects: Project[] = [
  { id: "poker",
    title: "3 Card Poker",
    description: "Client and Server",
    fullDescription: "3 differnt themes, cards and many buttons with differnt win and lose screens.",
    date: "Sept-Dec 2025", 
    images: [
      "/images/projects/square.png",
      "/images/projects/square.png",
      "/images/projects/square.png"
    ],
    tags: ["Java", "JavaScript", "CSS"],
    github: null,
    demo: "blah",
    features: [
      "Client and server UI", "Multiple client capacity"
    ],technologies: [
      "IntelliJ",
      "Maven"
    ],
    challenges: "Making sure the game calculations were getting done by the server and sent back to the client thread. Aditionally I had issues sending and reciving information.",
    learnings: "I learned about . . ."
  }, 
  { id: "typingShowdown",
    title: "Typing Showdown",
    description: "A typing speed test",
    fullDescription: "A fun typing speed test which utilizes timers, string comparison, and user input. Easy visualization with a progress bar and highlights on mistyped words. Currated statistics with each play. Customizable aspects with a light, dark and pastel mode.",
    date: "Jan 2025?",
    images: [
      "/images/projects/square.png",
      "/images/projects/square.png",
      "/images/projects/square.png"
    ],
    tags: ["JavaScript", "CSS", "HTML"],
    github: "https://github.com/KahnishgaSolaidurairaj/Typing-Showdown",
    demo: "blah",
    features: [
      "Blah 1",
      "Blah 2",
      "Blah 3"
    ],technologies: [
      "VSCode",
      ". . . "
    ],
    challenges: "Challenges . . .",
    learnings: "I learned about . . ."
  }
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}