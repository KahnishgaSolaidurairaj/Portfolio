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
  report: string | null; 
  features: string[];
  technologies: string[];
  challenges?: string;
  learnings?: string;
}

export const projects: Project[] = [
  { id: "csPortfolio", 
    title: "CS Portfolio", 
    description: " Personal Website page (challenges and learnings) (demo and repository)", 
    fullDescription: "", 
    date: "Winter 2025", 
    images: [
      "/Portfolio/images/projects/square.png"
    ], 
    tags: ["Astro", "TypeScript", "HTML", "CSS", "JavaScript"], 
    github: "https://github.com/KahnishgaSolaidurairaj/Portfolio", 
    demo: null, 
    report: null, 
    features: [
      "Responsive UI from desktop to mobile viewing", 
      ""
    ], technologies: [
      "IDE: VSCode", 
      "Astro",
      "JavaScript, HTML, CSS"
    ], 
    challenges: "", 
    learnings: ""
  },
  { id: "fitch2025", 
    title: "Driving Sustainability using AI", 
    description: "Developed machine learning models that estimate Scope 1 and Scope 2 greenhouse gas emissions for non-reporting companies using ESG-related financial and operational data provided by Sustainable Fitch", 
    fullDescription: "This project was developed as part of the Sustainable Fitch Codeathon to address ESG data gaps caused by incomplete emissions reporting. Our team built data-driven pipelines that clean, analyze, and model company-level features such as revenue, region, industry, and ESG indicators to predict Scope 1 and Scope 2 emissions. The project includes extensive exploratory data analysis, feature engineering, and regression modeling, supported by visualizations such as histograms, scatter plots, and correlation heatmaps. Full details and methodology are available on our Devpost submission: https://devpost.com/software/team-3-ku6tey. Lastly this project was created in colaboration with Harini Solaidurairaj, Shreya Patel, and Krisha Patel.", 
    date: "November 2025", 
    images: [
      "/Portfolio/images/projects/fitch2025/sustainableFitch1.png", 
      "/Portfolio/images/projects/fitch2025/sustainableFitch2.png", 
      "/Portfolio/images/projects/fitch2025/sustainableFitch3.png", 
      "/Portfolio/images/projects/fitch2025/sustainableFitch4.png", 
      "/Portfolio/images/projects/fitch2025/sustainableFitch5.png", 
      "/Portfolio/images/projects/fitch2025/sustainableFitch6.png"
    ], 
    tags: ["Machine Learning", "Data Science", "Sustainability", "ESG", "Regression Models", "Codeathon"], 
    github: "https://github.com/HariniSolai/fitch-codeathon2025Team3", 
    demo: "https://youtu.be/86zQFLk3P3Y?si=5KesWubooC2hPSKT", 
    report: null, 
    features: [
      "Scope 1 and Scope 2 emissions prediction for non-reporting companies", 
      "Random Forest regression pipelines for emissions estimation", 
      "Log-transformed and engineered financial features to handle skewed data",
      "Exploratory data analysis with histograms, scatter plots, and correlation heatmaps",
      "End-to-end data cleaning, feature selection, and model evaluation workflow"
    ], technologies: [
      "IDE: VSCode", 
      "Python",
      "Jupyter Notebooks",
      "scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Git"
    ], 
    challenges: "One of the main challenges was handling heavily skewed revenue distributions and missing data across multiple features, which required careful preprocessing and feature engineering. We also experimented with more complex models such as XGBoost, but encountered stability and tuning challenges within the project timeline. Selecting the most informative variables and aligning model predictions with real-world emissions trends required extensive debugging and iteration.", 
    learnings: "This project strengthened our understanding of real-world data challenges in ESG analytics, particularly the importance of feature engineering and data visualization when working with noisy, incomplete datasets. We gained hands-on experience building and evaluating regression pipelines, interpreting model outputs, and connecting technical performance to business and sustainability impact."
  }, 
  { id: "sweetT", 
    title: "Sweet-T", 
    description: "A full-stack e-commerce website for SweetT Bakery with customizable product ordering, checkout flow, and live order tracking for customers", 
    fullDescription: "", 
    date: "September - December 2025", 
    images: [
      "/Portfolio/images/projects/square.png"
    ], 
    tags: ["MongoDb", "Express", "Node.js", "Astro", "JavaScript", "HTML", "TailwindCSS", "Git Version Control"], 
    github: "https://github.com/wics-uic/Sweet-T", 
    demo: null, 
    report: null, 
    features: [
      "Implemented a Node.js + Express REST API with MongoDB to manage products, customers, and orders, including order status pipeline", 
      "Developed an admin portal with authentication/authorization, enabling staff to log in, view incoming orders, update order status, and manage products", 
      "Designed a custom order builder (size, flavors, fillings, decorations) using Astro + Tailwind", 
      "Collaborated with a team of 15 students using Git Version Control (branches, pull requests, code reviews)"
    ], technologies: [
      "IDE: VSCode", 
      "Git Version Control/Github - to collaborate with WiCS team members", 
      ""
    ], 
    challenges: "This was my first time working with Astro and thus there was a learning curve. ", 
    learnings: ""
  },
  { id: "rescueRover", 
    title: "Rescue Rover", 
    description: "An autonomous Arduino-based rover designed to simulate search-and-rescue operations through obstacle avoidance, boundary detection, and color-based target identification", 
    fullDescription: "The Rescue Rover is an autonomous search-and-rescue simulation developed for my CS 362 (Computer Design) course at UIC. The rover patrols a predefined area, avoids obstacles, detects boundary limits, and identifies target objects using infrared, ultrasonic, and RGB sensors. When a goal object of a specified color is detected, the rover halts, activates visual and audio alerts, and resumes patrol once the object is removed. The system is powered by four Arduino Uno boards communicating via I2C, separating sensing, control logic, motion, and output responsibilities to improve reliability and modularity. Built alongside Alexa Jimenez-Munoz, Darshan Zaware, and Mihaela Harizanova.", 
    date: "October - December 2025", 
    images: [
      "/Portfolio/images/projects/rescueRover/rover1.png",
      "/Portfolio/images/projects/rescueRover/rover2.png",
      "/Portfolio/images/projects/rescueRover/rover3.png"
    ], 
    tags: ["Arduino", "Robotics", "Autonomous Systems", "I2C Communication", "Hardware-Software Integration", "Embedded Systems"], 
    github: "https://github.com/KahnishgaSolaidurairaj/Rescue-Rover", 
    demo: "https://youtu.be/FQ8M7CXJ4NI", 
    report: "https://drive.google.com/file/d/1bd8bFb-hFHKfF51Ub0sd9Ql9N-ADaz1b/view?usp=sharing", 
    features: [
      "Autonomous navigation with obstacle avoidance and boundary detection",
      "Color-based goal object identification using an RGB sensor",
      "Multi-Arduino architecture with I2C master-slave communication",
      "Real-time feedback via LEDs, LCD display, and buzzer alerts",
      "Fully autonomous operation controlled by a single on/off input"
    ], technologies: [
      "IDE: Arduino IDE",
      "Arduino Uno R3", 
      "C / C++ (Embedded)",
      "I2C Communication (Wire.h)",
      "Ultrasonic Sensor",
      "RGB Color Sensor (TCS3200)",
      "Infrared Sensor",
      "DC Motors & L293D Motor Drivers",
      "LCD Display",
      "LEDs & Piezo Buzzer"
    ], 
    challenges: "One of the biggest challenges was coordinating communication between four Arduino boards using I2C while maintaining reliable timing and state synchronization. Sensor placement and calibration required extensive testing, particularly aligning the ultrasonic and RGB sensors so that object detection and color recognition did not interfere with each other. Power inefficiency was another challenge, as the rover required multiple 9V batteries and frequent replacements during testing. Debugging motor behavior, turn logic, and I2C data transmission also required multiple design iterations. Another issue faced was transporting the rover safely since it was big and I was tasked with taking it home and bringing it back to campus for team meeting. Thus there were a lot of pieces we decided to hot-glue onto the rovers build near the end.", 
    learnings: "This project provided hands-on experience with embedded systems design, multi-microcontroller communication, and real-world hardware debugging. We learned how to architect modular systems by separating sensing, decision-making, and actuation across multiple controllers, and gained a deeper understanding of sensor calibration, power management, and timing constraints in autonomous robotics."
  },
  { id: "poker",
    title: "3 Card Poker",
    description: "A multiplayer, networked 3-Card Poker game built with Java, featuring a client–server architecture, real-time gameplay, and a JavaFX-based graphical interface.",
    fullDescription: "This project implements a fully networked version of the casino game 3-Card Poker using Java Sockets and JavaFX. I have split this project into two Maven projects: a multithreaded server and a graphical client. The server manages all game logic, card dealing, bet validation, and payout calculations, while each client connects independently to play their own game session against the dealer. Any number of clients can connect simultaneously, each running on its own thread and interacting with the server through serialized objects. The client provides an intuitive, multi-scene JavaFX interface that allows users to place bets, view cards, make play-or-fold decisions, and see detailed results after each hand. The server includes its own GUI to monitor connected clients, track bets, display game outcomes, and manage server state.",
    date: "Sept-Dec 2025", 
    images: [
      "/Portfolio/images/projects/square.png",
      "/Portfolio/images/projects/square.png",
      "/Portfolio/images/projects/square.png"
    ],
    tags: ["Java", "JavaFX", "FXML", "CSS"],
    github: null,
    demo: "blah",
    report: null,
    features: [
      "Client-server architecture using Java Sockets",
      "Multithreaded server supporting multiple concurrent clients", 
      "Separate game instances and decks per client", 
      "Complete implementation of 3-Card Poker rules and payouts",
      "Ante, Pair Plus, and Play wagers with server-side validation", 
      "Multiple client scenes: welcome screen, gameplay screen, and win/lose screen", 
      "Server dashboard showing connected clients, bets, wins/losses, and game activity", 
      "Theme options including classic mode, pastel, and a christmas special"
    ],technologies: [
      "IDE: IntelliJ",
      "Java - core language for game logic, networking, and threading", 
      "Java Sockets - client/server communication",
      "JavaFX - GUI development for both client and server",
      "FXML & CSS - UI layout and styling",
      "JUnit 5 - Unit testing for server/core game logic",
      "Maven - project management and build automation"
    ],
    challenges: "A major challenge was building reliable client–server communication using Java Sockets while ensuring that all game logic ran only on the server. Supporting multiple clients at once required careful use of multithreading so that each game session remained independent. Another challenge was keeping the JavaFX interface responsive while handling network communication on background threads, especially when switching between different scenes during gameplay.",
    learnings: "This project strengthened my understanding of client–server architecture, networking, and multithreading in Java. I learned how to separate game logic, networking, and user interface code to build a more maintainable application. Additionally, working with JavaFX, FXML, and unit tests improved my ability to design responsive, testable, and event-driven applications."
  }, 
  {id: "keno", 
    title: "Lottery Game - Keno", 
    description: "A JavaFX-based simulation of the Keno lottery game featuring interactive gameplay, animations, and real-time statistics.", 
    fullDescription: "This project simulates the casino and state lottery game Keno using Java and JavaFX. Players select how many numbers to play, choose their picks manually or automatically, and decide how many drawings to participate in. During each drawing, numbers are revealed one at a time with pauses to simulate real gameplay. The application uses multiple JavaFX scenes to guide the user from a welcome screen to gameplay while providing clear prompts and feedback throughout the experience. All game logic is separated from the UI and thoroughly tested using unit tests, ensuring correctness and maintainability.",
    date: " -Sept 2025", 
    images: [
      "/Portfolio/images/projects/square.png",
      "/Portfolio/images/projects/square.png",
      "/Portfolio/images/projects/square.png"
    ],
    tags: ["JavaFX", "Java"], 
    github: null, 
    demo: "blah", 
    report: null, 
    features: [
      "Interactive number selection using a grid-based bet card", 
      "Multiple game modes (1, 4, 8, or 10 number spots)", 
      "Automatic number selection option", 
      "Animated number drawings with pause transitions", 
      "Multiple JavaFX scenes and menu options", 
      "Multiple themes - ", 
      "JUnit-tested game logic"
    ], technologies: [
      "IDE: IntelliJ",
      "Java", 
      "JavaFX", 
      "Maven", 
      "JUnit 5"
    ], 
    challenges: "A major challenge was designing an intuitive and responsive JavaFX interface without using FXML or CSS. Managing user input validation—such as preventing illegal number selections—required careful event-driven logic. Coordinating game flow across multiple drawings while maintaining clear feedback for the user also required thoughtful state management.", 
    learnings: "This project improved my skills in event-driven programming and JavaFX GUI development. I learned how to manage complex user interactions, control application flow, and provide real-time feedback to users. Additionally, writing extensive unit tests for the game logic reinforced best practices for separating UI from core functionality."
  }, 
  { id: "dataStructureLib", 
    title: "Custom Data Structure Library", 
    description: "A custom Java data structure library implementing a generic Queue and HashMap with full iterator support.", 
    fullDescription: "This project involved building a reusable data structure library in Java by implementing a generic Queue and HashMap from scratch, without using Java’s built-in collection classes. The Queue was implemented as a singly linked list following FIFO behavior, while the HashMap used an array of queues to handle collisions through chaining. The library was designed to be generic, allowing it to store different data types, and implemented the iterator design pattern to support forward and reverse traversal. Extensive JUnit tests were written to validate correctness, edge cases, and iterator behavior, ensuring the library could be reliably used by other programs.", 
    date: "--- 2025", 
    images: [
      "/Portfolio/images/projects/square.png"
    ], 
    tags: ["Java", "Maven", "JUnit 5"], 
    github: null, 
    demo: null, 
    report: null, 
    features: [
      "Generic singly linked list founcdation", 
      "FIFO Queue implementation", 
      "Custom HashMap with collision handling via chaining", 
      "Forward and reverse iterators", 
      "Support for for-each iteration", 
      "Fully implemented iterator design pattern", 
      "Comprehensive JUnit test coverage"
    ], technologies: [
      "IDE: IntelliJ",
      "Java", 
      "Maven", 
      "JUnit 5"
    ], 
    challenges: "One challenge was implementing core data structures from scratch without relying on Java’s built-in collections. Designing a generic singly linked list that could support both a queue and a hash map required careful handling of nodes, pointers, and edge cases such as empty lists. Implementing multiple iterators, including reverse iteration, added complexity and required a strong understanding of traversal logic.", 
    learnings: "This project strengthened my understanding of how fundamental data structures work internally. I gained experience with generics, inheritance, and the iterator design pattern, as well as collision handling in hash maps using linked lists. Writing unit tests for each method reinforced the importance of correctness and defensive programming when building reusable libraries."
  }, 
  { id: "typingShowdown",
    title: "Typing Showdown",
    description: "An interactive typing speed test that tracks accuracy and speed in real time, featuring visual feedback, detailed statistics, and customizable themes.",
    fullDescription: "This project is a fun typing speed test built using HTML, CSS, and JavaScript. It challenges users to type a given text within a timed session while measuring typing speed (WPM) and accuracy through real-time string comparison. The interface provides instant visual feedback by highlighting mistyped characters and displaying progress through a dynamic progress bar. After each attempt, curated statistics are generated to help users track performance and improvement over time. To enhance usability and personalization, the application includes multiple theme options (light, dark, and pastel) allowing users to customize the look and feel of the game.",
    date: "May 2025",
    images: [
      "/Portfolio/images/projects/square.png",
      "/Portfolio/images/projects/square.png",
      "/Portfolio/images/projects/square.png"
    ],
    tags: ["JavaScript", "CSS", "HTML"],
    github: "https://github.com/KahnishgaSolaidurairaj/Typing-Showdown",
    demo: "blah",
    report: null,
    features: [
      "Real-time typing speed (WPM) and accuracy calculation",
      "Visual progress bar to indicate status",
      "Highligting of incorrectly typed characters or words", 
      "Statisics after each run", 
      "Multiple UI themes --> light, dark, and pastel"
    ],technologies: [
      "IDE: VSCode",
      "HTML - structure and layout",
      "CSS - styling and themes", 
      "JavaScript - timers, string comparison, user unput handling, and statistics logic"
    ],
    challenges: "A challenge I faced was synchronizing timers with user input events.",
    learnings: "I learned about implementing timers and performance tracking in JavaScript and handling string comparison efficiently for real-time feedback."
  }, 
  { id: "sparkhacks2024", 
    title: "Sustain the Way", 
    description: "Our goal is to reduce food waste and support communities by connecting them with food pantries. Our platform bridges the gap between farmers and pantries ensuring better allocation of resources.", 
    fullDescription: "Our mission for Sustain the Way is to prevent food waste and food insecurity. This project was inspired by the ongoing issue of food waste and hunger. Food hunger is a problem as almost 47 million Americans face hunger, 1 in 5 are children. People struggle to find meals throught the world and farmers often discard surplus food due to distribution challenges. By creating a platform that connects farmers with food pantries in need we can reduce the waste. Our aim is to create a sustainable and food-secure future for all. This projected was created alongside Harini Solaidurairaj, Zona Noman, Asha Makwana, and Nguyet Pham. Check out our devpost submission --> https://devpost.com/software/sustaintheway", 
    date: "February 2025", 
    images: [
      "/Portfolio/images/projects/sustainTheWay/sustainTheWay1.png", 
      "/Portfolio/images/projects/sustainTheWay/sustainTheWay2.png", 
      "/Portfolio/images/projects/sustainTheWay/sustainTheWay3.png", 
      "/Portfolio/images/projects/sustainTheWay/sustainTheWay4.png", 
      "/Portfolio/images/projects/sustainTheWay/sustainTheWay5.png", 
      "/Portfolio/images/projects/sustainTheWay/sustainTheWay6.png"
    ], 
    tags: ["OpenAI", "CSS", "HTML", "JavaScript", "Node.js", "Git", "Python"], 
    github: "https://github.com/HariniSolai/SustainTheWay", 
    demo: "https://youtu.be/YYrFuMtBCTU?si=qqj_Rj2B1r0Y0pCV", 
    report: "https://drive.google.com/file/d/1F_0qHVYASFzxZsEKkzUvYjBtT7a6o7S_/view?usp=sharing", 
    features: [
      "Find Pantries - Connects users to local food pantires to prevent food waste and food insercurity", 
      "Learn - Join the mission! Read about STW's goals for the future!", 
      "AI Powered Search - Ask any question in our search function to get solutions to your problems and answers to your questions!"
    ], technologies: [
      "IDE: VSCode", 
      "Git Version Control", 
      "openai API", 
      "JavaScript, HTML, CSS", 
      "Node.js", 
      "Python"
    ], 
    challenges: "Setting up the Python 3 environment was initially challenging, but after a few searches we figured out the correct terminal commands needed to configure it properly. Once that was resolved, we used VS Code’s Live Server to continue development, which worked really well for instantly seeing changes as we coded. The biggest challenge by far was using Git and GitHub for version control. With a five person team working on different computers, certain packages were being overwritten, causing issues on some machines but not others. This made the problem difficult to identify at first. Afterward, we became much more careful about which files we pushed to GitHub and how we managed changes.", 
    learnings: "This project was created for SparkHacks 2024, a campus wide event run by WiCS at UIC. It was my first time collaborating with a five others under a strict 24-hour time constraint. Even though the experience was short, I learned a lot about troubleshooting, debugging, and working efficiently under pressure. I also gained experience using online resources for HTML page layouts and learning specific CSS lines to customize the site to match our theme."
  }, 
  {id: "fitch2024", 
    title: "UCAN Fleet Management Portal", 
    description: "A simple, intuitive way to submit and organize Vehicle Requests and Returns. Allows for seamless communication between Staff and Managers. Contributes to an organized space, and easy record keeping.", 
    fullDescription: "We were inspired by Break Through Tech Chicago's message of innovation and pioneering in the tech field. Before the Codeathon, none of us knew how to use any of the tools or softwares, but we took it as a challenge to learn and deliver a useful product to UCAN. Our website allows UCAN staff to access Vehicle management forms in an easy-to-access and intuitive website. When a staff member submits a Vehicle Request Form, an automated flow sends notifications and approval requests to their manager for seamless communication. Managers can find links to the requests in the emails sent through automation and can easily approve or reject requests without having to write out a full email. Information about the request, like status or if a vehicle has been allocated is also updated as approvals are given in the original form. Thus, all the information is linked together and managers do not need to go digging into paperwork for more information on the details of a request. We used Microsoft Automate to create workflows and automate email responses and next steps. SharePoint was used to organize and save request form information, vehicle return form submissions and vehicle status information. This application was created for the Chicago Fitch 2024 codeathon alongside Harini Solaidurairaj, Ariel Wong, Asha Makwana, Carissa Lau, and Rida Siddiqui. Check out our devpost submission --> https://devpost.com/software/ucan-fleet-portal-group-3", 
    date: "Dec 2024", 
    images: [
      "/Portfolio/images/projects/fitch2024/ucan1.png", 
      "/Portfolio/images/projects/fitch2024/ucan2.png",
      "/Portfolio/images/projects/fitch2024/ucan3.png", 
      "/Portfolio/images/projects/fitch2024/ucan4.png", 
      "/Portfolio/images/projects/fitch2024/ucan5.png", 
      "/Portfolio/images/projects/fitch2024/ucan6.png", 
      "/Portfolio/images/projects/fitch2024/ucan7.png"
    ], 
    tags: ["SharePoint", "Microsoft Power Automate", "Workflow Automation", "Codeathon"], 
    github: null, 
    demo: "https://youtu.be/uaeWwkiH64c?si=VZ17FtztFrCyECy0", 
    report: "https://drive.google.com/drive/folders/1kf_TxkOja62NWQ-zXNKy0nRTMBARU8Th?usp=share_link", 
    features: [
      "Digital vehicle request and return forms built with SharePoint",
      "Automated multi-step approval workflows using Microsoft Power Automate",
      "Email-based approval and rejection with comments for clear communication",
      "Real-time request status and vehicle availability tracking",
      "Linked calendar view to visualize vehicle usage schedules"
    ], technologies: [
      "SharePoint", 
      "Microsoft Power Automate",
      "Microsoft Forms", 
      "Outlook Email Integration"
    ], 
    challenges: "A huge challenge for all of us was unfamiliarity with the softwares. Before this Codeathon, none of us had used SharePoint, created flows or even knew what a flow was. We had to overcome a huge learning curve in order to get anything working. If we had more time, we would have liked to polish the website's user interface. ", 
    learnings: "This project taught us how to quickly learn and apply low-code tools to build real-world business solutions under tight time constraints. We gained hands-on experience designing automated workflows, managing structured data in SharePoint, and thinking critically about user roles, approval logic, and process efficiency. Most importantly, we learned how technology can be leveraged to streamline operations and create meaningful impact for UCAN Chicago a non-profit organization."
  }, 
  { id: "ciphers", 
    title: "Ciphers", 
    description: "Shift encryption and ceaser cypher", 
    fullDescription: "", 
    date: "--- 2025", 
    images: [
      "/Portfolio/images/projects/square.png"
    ], 
    tags: [""], 
    github: null, 
    demo: null, 
    report: null, 
    features: [
      "", 
      ""
    ], technologies: [
      "IDE: VSCode", 
      ""
    ], 
    challenges: "", 
    learnings: ""
  },
  { id: "search", 
    title: "Search", 
    description: "Cs 251 proj 2", 
    fullDescription: "", 
    date: "--- 2025", 
    images: [
      "/Portfolio/images/projects/square.png"
    ], 
    tags: [""], 
    github: null, 
    demo: null, 
    report: null, 
    features: [
      "", 
      ""
    ], technologies: [
      "IDE: VSCode", 
      ""
    ], 
    challenges: "", 
    learnings: ""
  },
  { id: "lists", 
    title: "Lists", 
    description: "cs 251 proj 3", 
    fullDescription: "", 
    date: "--- 2025", 
    images: [
      "/Portfolio/images/projects/square.png"
    ], 
    tags: [""], 
    github: null, 
    demo: null, 
    report: null, 
    features: [
      "", 
      ""
    ], technologies: [
      "IDE: VSCode", 
      ""
    ], 
    challenges: "", 
    learnings: ""
  },
  { id: "bst", 
    title: "BST", 
    description: "CS 251 Proj 4", 
    fullDescription: "", 
    date: "--- 2025", 
    images: [
      "/Portfolio/images/projects/square.png"
    ], 
    tags: [""], 
    github: null, 
    demo: null, 
    report: null, 
    features: [
      "", 
      ""
    ], technologies: [
      "IDE: VSCode", 
      ""
    ], 
    challenges: "", 
    learnings: ""
  },
  { id: "hash", 
    title: "Hash", 
    description: "CS 251 proj 5", 
    fullDescription: "", 
    date: "--- 2025", 
    images: [
      "/Portfolio/images/projects/square.png"
    ], 
    tags: [""], 
    github: null, 
    demo: null, 
    report: null, 
    features: [
      "", 
      ""
    ], technologies: [
      "IDE: VSCode", 
      ""
    ], 
    challenges: "", 
    learnings: ""
  },
  { id: "openStMaps", 
    title: "Open Street Maps", 
    description: "Cs 251 proj 6", 
    fullDescription: "", 
    date: "--- 2025", 
    images: [
      "/Portfolio/images/projects/square.png"
    ], 
    tags: [""], 
    github: null, 
    demo: null, 
    report: null, 
    features: [
      "", 
      ""
    ], technologies: [
      "IDE: VSCode", 
      ""
    ], 
    challenges: "", 
    learnings: ""
  },
  { id: "cell", 
    title: "Totalistic Cellular Automaton", 
    description: "CS 211 proj 1", 
    fullDescription: "", 
    date: "--- 2024", 
    images: [
      "/Portfolio/images/projects/square.png"
    ], 
    tags: ["C"], 
    github: null, 
    demo: null, 
    report: null, 
    features: [
      "", 
      ""
    ], technologies: [
      "IDE: zyBooks", 
      ""
    ], 
    challenges: "", 
    learnings: ""
  },
  { id: "foodWeb", 
    title: "Food Web Analysis with Dynamic Memory", 
    description: "CS 211 proj 2", 
    fullDescription: "", 
    date: "--- 2024", 
    images: [
      "/Portfolio/images/projects/square.png"
    ], 
    tags: ["C"], 
    github: null, 
    demo: null, 
    report: null, 
    features: [
      "", 
      ""
    ], technologies: [
      "IDE: zyBooks", 
      ""
    ], 
    challenges: "", 
    learnings: ""
  },
  { id: "wordLadder", 
    title: "Word Ladder Builder", 
    description: "CS 211 proj 3", 
    fullDescription: "", 
    date: "--- 2024", 
    images: [
      "/Portfolio/images/projects/square.png"
    ], 
    tags: ["C"], 
    github: null, 
    demo: null, 
    report: null, 
    features: [
      "", 
      ""
    ], technologies: [
      "IDE: zyBooks", 
      ""
    ], 
    challenges: "", 
    learnings: ""
  },
  { id: "voting", 
    title: "Popular Vote Minimizer", 
    description: "CS 211 proj 4", 
    fullDescription: "", 
    date: "--- 2024", 
    images: [
      "/Portfolio/images/projects/square.png"
    ], 
    tags: ["C"], 
    github: null, 
    demo: null, 
    report: null, 
    features: [
      "", 
      ""
    ], technologies: [
      "IDE: zyBooks", 
      ""
    ], 
    challenges: "", 
    learnings: ""
  },
  { id: "shortestLadder", 
    title: "Find Shortest Word Ladder", 
    description: "CS 211 proj 5  In this project we utilize Linked lists instead of arrays and thus the use of pointers and dereferencing comes into play in this project. We also had to debug since the program had to find the shortest ladder based on the critera.", 
    fullDescription: "", 
    date: "--- 2024", 
    images: [
      "/Portfolio/images/projects/square.png"
    ], 
    tags: ["C"], 
    github: null, 
    demo: null, 
    report: null, 
    features: [
      "", 
      ""
    ], technologies: [
      "IDE: zyBooks", 
      ""
    ], 
    challenges: "", 
    learnings: ""
  },
  { id: "pointerMaze", 
    title: "GDB Maze", 
    description: "CS 211 proj 6", 
    fullDescription: "The goal is to pass through a maze of pointer using (N, W, S, E) using constructors and decunstructers in C++, the focus is also on GDB. We used the memory adress of the pointers to hand trace a map and to be able to take note of the walls and also on which positions are the Potion, wand and speelbook as those are the three items we are searching for. we have excaped the maze if the path we go in goes through collects all three items. And if we change the key which is currentely set as 'ksola6' the whole maze can be changed. Note if we reset the virtual environment the memory adress may change but the maze has the same shape. (I have copies of my GDB logs in google drive)", 
    date: "--- 2024", 
    images: [
      "/Portfolio/images/projects/square.png"
    ], 
    tags: ["GDB", "C++"], 
    github: null, 
    demo: null, 
    report: null, 
    features: [
      "", 
      ""
    ], technologies: [
      "IDE: zyBooks", 
      ""
    ], 
    challenges: "This was my first time using GDB so it took a while for me to figure out", 
    learnings: ""
  },
  { id: "game", 
    title: "Outlast the Baddies and Avoid the abyss", 
    description: "CS 211 proj 7", 
    fullDescription: "One player game where the goal is to get the Hero to the exit while monsters and walls block the path. This is an interactive game where the user used keys on the computer board to move around. This project relied heavily on try catch statements to make sure no illegal moves were made and redirect the Hero and monsters from errors and collisions like going of the board. Its also what allowed the Hero to either win or lose.", 
    date: "--- 2024", 
    images: [
      "/Portfolio/images/projects/square.png"
    ], 
    tags: ["C++"], 
    github: null, 
    demo: null, 
    report: null, 
    features: [
      "", 
      ""
    ], technologies: [
      "IDE: zyBooks", 
      ""
    ], 
    challenges: "", 
    learnings: ""
  },
  { id: "csa", 
    title: "HIGHSCHOOL PROJECTS", 
    description: "frogger, pizeria, monopoly", 
    fullDescription: "", 
    date: "--- 2022", 
    images: [
      "/Portfolio/images/projects/square.png"
    ], 
    tags: [""], 
    github: null, 
    demo: null, 
    report: null, 
    features: [
      "", 
      ""
    ], technologies: [
      "IDE: IntelliJ, PyCharm", 
      ""
    ], 
    challenges: "", 
    learnings: ""
  },
  { id: "greenEnv", 
    title: "Save the Environment", 
    description: "An informational website created to raise awareness about environmental protection and encourage people to take action to care for the Earth", 
    fullDescription: "This project was created in collaboration with Harini Solaidurairaj as part of the 2020 Developer Program Cohort Final Project Showcase (https://stemleague.github.io/login/final-showcase.html). We were inspired by our passion to help the world and prevent further environmental damage. Our goal was to spread awareness about the importance of protecting the Earth and encourage people to make more environmentally conscious choices for the sake of future generations.", 
    date: "Summer 2020", 
    images: [
      "/Portfolio/images/projects/saveEnv/env1.png",
      "/Portfolio/images/projects/saveEnv/env2.png",
      "/Portfolio/images/projects/saveEnv/env3.png",
      "/Portfolio/images/projects/saveEnv/env4.png",
      "/Portfolio/images/projects/saveEnv/env5.png",
      "/Portfolio/images/projects/saveEnv/env6.png"
    ], 
    tags: ["HTML", "CSS", "JavaScript", "Replit", "Web Development"], 
    github: "https://replit.com/@Harini05/final-project-for-real", 
    demo: "https://youtu.be/zMxfrsZWKQM", 
    report: null,
    features: [
      "Educational content focused on environmental awareness",
      "Simple and clean webpage layout using HTML and CSS",
      "Interactive elements implemented with basic JavaScript"
    ], technologies: [
      "IDE: Replit", 
      "HTML", 
      "CSS", 
      "JavaScript"
    ], 
    challenges: "As one of our first web development projects, understanding how to structure a website and connect HTML, CSS, and JavaScript together was challenging. We also had to learn how to design pages that were both informative and visually engaging while working within our beginner-level skill set.", 
    learnings: "Through this project, we learned the fundamentals of web development, including structuring content with HTML, styling with CSS, and adding basic interactivity using JavaScript. More importantly, we learned how technology can be used as a tool to spread awareness and create positive social impact."
  }
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}