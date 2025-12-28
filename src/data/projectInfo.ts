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
  { id: "fitch2025", 
    title: "Driving Sustainability using AI", 
    description: "Developed machine learning models that estimate Scope 1 and Scope 2 greenhouse gas emissions for non-reporting companies using ESG-related financial and operational data provided by Sustainable Fitch", 
    fullDescription: "This project was developed as part of the Sustainable Fitch Codeathon to address ESG data gaps caused by incomplete emissions reporting. Our team built data-driven pipelines that clean, analyze, and model company-level features such as revenue, region, industry, and ESG indicators to predict Scope 1 and Scope 2 emissions. The project includes extensive exploratory data analysis, feature engineering, and regression modeling, supported by visualizations such as histograms, scatter plots, and correlation heatmaps. Full details and methodology are available on our Devpost submission: https://devpost.com/software/team-3-ku6tey. Lastly this project was created in colaboration with Harini Solaidurairaj, Shreya Patel, and Krisha Patel.", 
    date: "November 2025", 
    images: [
      "/Portfolio/images/projects/fitch2025/sustainableFitch1.avif", 
      "/Portfolio/images/projects/fitch2025/sustainableFitch2.avif", 
      "/Portfolio/images/projects/fitch2025/sustainableFitch3.avif", 
      "/Portfolio/images/projects/fitch2025/sustainableFitch4.avif", 
      "/Portfolio/images/projects/fitch2025/sustainableFitch5.avif", 
      "/Portfolio/images/projects/fitch2025/sustainableFitch6.avif"
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
    fullDescription: "Sweet-T is a full-stack e-commerce platform developed for SweetT Bakery to streamline custom dessert ordering and order management. Customers can build personalized orders by selecting sizes, flavors, fillings, and decorations, while bakery staff can manage products and track orders through a secure admin portal. The project was developed collaboratively as part of a WiCS @ UIC Dev Project Fall 2025, emphasizing scalable architecture, clear API design, and real-world workflow simulation.", 
    date: "September - December 2025", 
    images: [
      "/Portfolio/images/projects/sweetT/sweet1.avif",
      "/Portfolio/images/projects/sweetT/sweet2.avif",
      "/Portfolio/images/projects/sweetT/sweet3.avif",
      "/Portfolio/images/projects/sweetT/sweet4.avif",
      "/Portfolio/images/projects/sweetT/sweet5.avif",
      "/Portfolio/images/projects/sweetT/sweet6.avif",
      "/Portfolio/images/projects/sweetT/sweet7.avif",
      "/Portfolio/images/projects/sweetT/sweet8.avif",
      "/Portfolio/images/projects/sweetT/sweet9.avif",
      "/Portfolio/images/projects/sweetT/finalGroupPic.avif"
    ], 
    tags: ["MongoDb", "Express", "Node.js", "Astro", "JavaScript", "HTML", "TailwindCSS", "Git Version Control"], 
    github: "https://github.com/wics-uic/Sweet-T", 
    demo: null, 
    report: null, 
    features: [
      "Implemented a Node.js + Express REST API with MongoDB to manage products, customers, and orders, including a multi-stage order status pipeline", 
      "Designed and built a custom product order builder allowing users to select size, flavors, fillings, and decorations",
      "Developed a secure admin portal with authentication and authorization for managing products and updating order statuses",
      "Created responsive front-end pages using Astro and TailwindCSS for consistent styling across devices",
      "Enabled live order tracking so customers can monitor the progress of their orders",
      "Collaborated with a team of 15 students using Git version control, pull requests, and code reviews"
    ], technologies: [
      "IDE: VSCode", 
      "Node.js & Express",
      "MongoDB",
      "Astro",
      "TailwindCSS",
      "Git Version Control & Github for team collaboration"
    ], 
    challenges: "This was my first time working with Astro, which introduced a learning curve in understanding its component structure, routing, and data flow. Coordinating development across a large team also required clear communication, consistent coding standards, and careful version control to avoid merge conflicts. I also struggled with app reactivity since although I was able to make all the content shrink and grow based on the page size I had to add additional code for specific pieces to make sure it looked cohesive.", 
    learnings: "By working mainly on the front end of this project, I strengthened my skills in building responsive and user-friendly interfaces using Astro and TailwindCSS. I gained experience translating product requirements into interactive UI components, implementing custom ordering workflows, and ensuring consistent styling across pages. This project also improved my understanding of how front-end applications integrate with backend APIs, as well as how to collaborate effectively within a large team while focusing on a defined role."
  },
  { id: "rescueRover", 
    title: "Rescue Rover", 
    description: "An autonomous Arduino-based rover designed to simulate search-and-rescue operations through obstacle avoidance, boundary detection, and color-based target identification", 
    fullDescription: "The Rescue Rover is an autonomous search-and-rescue simulation developed for my CS 362 (Computer Design) course at UIC. The rover patrols a predefined area, avoids obstacles, detects boundary limits, and identifies target objects using infrared, ultrasonic, and RGB sensors. When a goal object of a specified color is detected, the rover halts, activates visual and audio alerts, and resumes patrol once the object is removed. The system is powered by four Arduino Uno boards communicating via I2C, separating sensing, control logic, motion, and output responsibilities to improve reliability and modularity. Built alongside Alexa Jimenez-Munoz, Darshan Zaware, and Mihaela Harizanova.", 
    date: "October - December 2025", 
    images: [
      "/Portfolio/images/projects/rescueRover/rover1.avif",
      "/Portfolio/images/projects/rescueRover/rover2.avif",
      "/Portfolio/images/projects/rescueRover/rover3.avif"
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
    date: "November 2025", 
    images: [
      "/Portfolio/images/projects/poker/poker1.avif",
      "/Portfolio/images/projects/poker/poker2.avif",
      "/Portfolio/images/projects/poker/poker3.avif", 
      "/Portfolio/images/projects/poker/poker4.avif", 
      "/Portfolio/images/projects/poker/poker5.avif",
      "/Portfolio/images/projects/poker/poker6.avif", 
      "/Portfolio/images/projects/poker/poker7.avif",
      "/Portfolio/images/projects/poker/poker8.avif"
    ],
    tags: ["Client-Server", "Java Sockets", "Maven", "HTML", "CSS"],
    github: null,
    demo: null,
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
    challenges: "A major challenge was building reliable client-server communication using Java Sockets while ensuring that all game logic ran only on the server. Supporting multiple clients at once required careful use of multithreading so that each game session remained independent. Another challenge was keeping the JavaFX interface responsive while handling network communication on background threads, especially when switching between different scenes during gameplay.",
    learnings: "This project strengthened my understanding of client-server architecture, networking, and multithreading in Java. I learned how to separate game logic, networking, and user interface code to build a more maintainable application. Additionally, working with JavaFX, FXML, and unit tests improved my ability to design responsive, testable, and event-driven applications."
  }, 
  {
    id: "coffeeShop",
    title: "Coffee Shop",
    description: "A customizable coffee ordering system using the Decorator design pattern.",
    fullDescription: "The Coffee Shop project is a JavaFX application that demonstrates the use of the Decorator design pattern to dynamically build coffee orders. Each order begins with a basic black coffee and allows users to add or remove various add-ons such as cream, sugar, extra shots, vanilla and cinnamon. The application uses FXML and CSS to separate UI layout and styling from application logic, and follows a clean MVC-style structure with controller classes handling user interaction. The final order displays a detailed cost breakdown for each add-on along with the total price, and users can reset and build multiple orders within a single session.",
    date: "November 2025",
    images: [
      "/Portfolio/images/projects/coffeeShop/coffee1.avif",
      "/Portfolio/images/projects/coffeeShop/coffee2.avif",
      "/Portfolio/images/projects/coffeeShop/coffee3.avif",
      "/Portfolio/images/projects/coffeeShop/coffee4.avif"
    ],
    tags: ["Decorator Design Pattern", "Object-Oriented Design", "JavaFX"],
    github: null,
    demo: "https://youtu.be/CF57x7YXX74",
    report: null,
    features: [
      "Build coffee orders dynamically using the Decorator design pattern",
      "JavaFX GUI with FXML layout and custom CSS styling",
      "Ability to add and remove coffee add-ons and view a full price breakdown",
      "Support for creating and resetting multiple orders in one session",
      "Unit-tested core logic using Maven and JUnit"
    ],
    technologies: [
      "IDE: VS Code",
      "Java",
      "JavaFX",
      "FXML",
      "CSS",
      "Maven",
      "JUnit"
    ],
    challenges: "One of the main challenges was managing the dynamic addition and removal of decorators while maintaining accurate pricing and order descriptions. Ensuring that the GUI stayed synchronized with the underlying decorated coffee object required careful controller logic. Integrating JavaFX with Maven and properly structuring FXML, CSS, and controller classes was also challenging, especially while keeping the design pattern implementation clean and testable.",
    learnings: "This project strengthened my understanding of the Decorator design pattern and how it can be applied to real-world scenarios. I gained hands-on experience building JavaFX applications using FXML and CSS, reinforcing the importance of separating UI, logic, and styling. Additionally, working with Maven and unit tests improved my confidence in creating maintainable, well-tested object-oriented applications."
  },
  {id: "keno", 
    title: "Lottery Game - Keno", 
    description: "A JavaFX-based simulation of the Keno lottery game featuring interactive gameplay, animations, and results", 
    fullDescription: "This project simulates the casino and state lottery game Keno using Java and JavaFX. Players select how many numbers to play, choose their picks manually or automatically, and decide how many drawings to participate in. During each drawing, numbers are revealed one at a time with pauses to simulate real gameplay. The application uses multiple JavaFX scenes to guide the user from a welcome screen to gameplay while providing clear prompts and feedback throughout the experience. All game logic is separated from the UI and thoroughly tested using unit tests, ensuring correctness and maintainability.",
    date: "October 2025", 
    images: [
      "/Portfolio/images/projects/keno/keno1.avif",
      "/Portfolio/images/projects/keno/keno2.avif",
      "/Portfolio/images/projects/keno/keno3.avif", 
      "/Portfolio/images/projects/keno/keno4.avif",
      "/Portfolio/images/projects/keno/keno5.avif",
      "/Portfolio/images/projects/keno/keno6.avif",
      "/Portfolio/images/projects/keno/keno7.avif"
    ],
    tags: ["JavaFX", "Java"], 
    github: null, 
    demo: "https://youtu.be/uWwUfOvOF9I", 
    report: "https://drive.google.com/file/d/1UzveTSlzfD2PiqgR8-pEBYF03L8Kdb_e/view?usp=sharing", 
    features: [
      "Interactive number selection using a grid-based bet card", 
      "Multiple game modes (1, 4, 8, or 10 number spots)", 
      "Automatic number selection option", 
      "Animated number drawings with pause transitions", 
      "Multiple JavaFX scenes and menu options", 
      "Light/Dark blue theme options", 
      "JUnit-tested game logic", 
      "Logic/calculations based on North Carolina state lottery winning and odds --> https://nclottery.com/KenoHow"
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
  { id: "dataStrucLib", 
    title: "Custom Data Structure Library", 
    description: "A custom Java data structure library implementing a generic Queue and HashMap with full iterator support", 
    fullDescription: "This project involved building a reusable data structure library in Java by implementing a generic Queue and HashMap from scratch, without using Java’s built-in collection classes. The Queue was implemented as a singly linked list following FIFO behavior, while the HashMap used an array of queues to handle collisions through chaining. The library was designed to be generic, allowing it to store different data types, and implemented the iterator design pattern to support forward and reverse traversal. Extensive JUnit tests were written to validate correctness, edge cases, and iterator behavior, ensuring the library could be reliably used by other programs.", 
    date: "September 2025", 
    images: [
      "/Portfolio/images/projects/dataStrucLib/lib1.avif",
      "/Portfolio/images/projects/dataStrucLib/lib2.avif"
    ], 
    tags: ["Iterator", "Java", "Maven", "JUnit 5"], 
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
  }, /*
  { id: "gpip", 
    title: "Detecting Emotions in LLM's - Ollama", 
    description: "GPIP exeriance", 
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
  }, */
  { id: "typingShowdown",
    title: "Typing Showdown",
    description: "An interactive typing speed test that tracks accuracy and speed in real time, featuring visual feedback, detailed statistics, and customizable themes.",
    fullDescription: "This project is a fun typing speed test built using HTML, CSS, and JavaScript. It challenges users to type a given text within a timed session while measuring typing speed (WPM) and accuracy through real-time string comparison. The interface provides instant visual feedback by highlighting mistyped characters and displaying progress through a dynamic progress bar. After each attempt, curated statistics are generated to help users track performance and improvement over time. To enhance usability and personalization, the application includes multiple theme options (light, dark, and pastel) allowing users to customize the look and feel of the game.",
    date: "May 2025",
    images: [
      "/Portfolio/images/projects/typingShowdown/typing1.avif",
      "/Portfolio/images/projects/typingShowdown/typing2.avif",
      "/Portfolio/images/projects/typingShowdown/typing3.avif"
    ],
    tags: ["JavaScript", "CSS", "HTML"],
    github: "https://github.com/KahnishgaSolaidurairaj/Typing-Showdown",
    demo: "https://youtu.be/IIoVs027G4E",
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
  }, /*
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
  }, */
  { id: "bst", 
    title: "Binary Search Tree", 
    description: "Implemented a generic binary search tree with full support for insertion, deletion, lookup, and traversal", 
    fullDescription: "This project involved designing and implementing a binary search tree that maintains strict ordering properties while supporting efficient data operations. The implementation required careful handling of recursion, pointer-based memory management, and edge cases to ensure correctness and robustness across all operations.", 
    date: "March 2025", 
    images: [
      "/Portfolio/images/projects/bst/bst1.avif",
      "/Portfolio/images/projects/bst/bst2.avif"
    ], 
    tags: ["Data Structures", "C++", "Memory Safety"], 
    github: null, 
    demo: null, 
    report: null, 
    features: [
      "Implemented a generic binary search tree with key-value storage",
      "Preserved BST ordering invariants across insertion, lookup, and deletion",
      "Handled all deletion cases, including nodes with two children",
      "Provided recursive traversal for efficient and sorted data access",
      "Ensured memory safety through proper allocation, destruction, and testing"
    ], technologies: [
      "IDE: VSCode", 
      "C++"
    ], 
    challenges: "The most challenging part was implementing node deletion correctly, particularly handling nodes with two children while maintaining tree structure. Debugging pointer-related issues and ensuring proper memory cleanup required close attention to detail.",
    learnings: "Through this project, I developed a strong understanding of tree-based data structures, recursion, and dynamic memory management. I learned how to design clean abstractions, manage complex edge cases, and write reliable low-level code—experience that directly translates to systems programming and backend development."
  },
  { id: "lists", 
    title: "Lists", 
    description: "A C++ data structures project implementing and rigorously testing a singly linked list and a circular vector", 
    fullDescription: "The Lists project is a comprehensive C++ data structures assignment focused on implementing a templated singly linked list and a circular vector from scratch. In addition to implementing core functionality, the project emphasizes writing thorough GoogleTest test suites designed to catch buggy implementations. Both data structures support common operations such as insertion, deletion, indexing, copying, and string conversion, while ensuring memory safety through proper pointer management and AddressSanitizer validation. The project follows a milestone-based development process that integrates testing and implementation at every stage.", 
    date: "March 2025", 
    images: [
      "/Portfolio/images/projects/lists/list1.avif",
      "/Portfolio/images/projects/lists/list2.avif"
    ], 
    tags: ["Data Structures", "C++", "Testing"], 
    github: null, 
    demo: null, 
    report: null, 
    features: [
      "Templated singly linked list implementation",
      "Circular vector with O(1) push and pop at both ends",
      "Comprehensive GoogleTest test suites for all operations",
      "Copy constructor and assignment operator support",
      "Memory-safe implementations validated with AddressSanitizer"
    ], technologies: [
      "IDE: VSCode", 
      "C++", 
      "GoogleTest", 
      "AdressSanitizer", 
      "Makefile"
    ], 
    challenges: "One of the main challenges was debugging pointer-related issues while maintaining strict memory safety guarantees. Writing tests that reliably exposed buggy implementations required careful thought about edge cases and undefined behavior. Implementing the circular vector was particularly challenging due to index wrapping and resizing logic.", 
    learnings: "This project significantly improved my understanding of low-level data structure implementation and memory management in C++. I gained hands-on experience writing high-quality tests that validate both correctness and robustness. The emphasis on AddressSanitizer reinforced best practices for avoiding memory leaks and undefined behavior."
  },
  { id: "sparkhacks2024", 
    title: "Sustain the Way", 
    description: "Our goal is to reduce food waste and support communities by connecting them with food pantries. Our platform bridges the gap between farmers and pantries ensuring better allocation of resources.", 
    fullDescription: "Our mission for Sustain the Way is to prevent food waste and food insecurity. This project was inspired by the ongoing issue of food waste and hunger. Food hunger is a problem as almost 47 million Americans face hunger, 1 in 5 are children. People struggle to find meals throught the world and farmers often discard surplus food due to distribution challenges. By creating a platform that connects farmers with food pantries in need we can reduce the waste. Our aim is to create a sustainable and food-secure future for all. This projected was created alongside Harini Solaidurairaj, Zona Noman, Asha Makwana, and Nguyet Pham. Check out our devpost submission --> https://devpost.com/software/sustaintheway", 
    date: "February 2025", 
    images: [
      "/Portfolio/images/projects/sustainTheWay/sustainTheWay1.avif", 
      "/Portfolio/images/projects/sustainTheWay/sustainTheWay2.avif", 
      "/Portfolio/images/projects/sustainTheWay/sustainTheWay3.avif", 
      "/Portfolio/images/projects/sustainTheWay/sustainTheWay4.avif", 
      "/Portfolio/images/projects/sustainTheWay/sustainTheWay5.avif", 
      "/Portfolio/images/projects/sustainTheWay/sustainTheWay6.avif"
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
  { id: "search", 
    title: "Search", 
    description: "Exploration of search algorithms with an emphasis on efficiency, correctness, and real-world performance trade-offs", 
    fullDescription: "This project focused on implementing and comparing different search strategies to locate data efficiently. The work involved analyzing algorithm behavior, handling edge cases, and validating results through structured testing. By experimenting with multiple approaches, the project emphasized understanding how algorithmic design choices affect performance and scalability.", 
    date: "February 2025", 
    images: [
      "/Portfolio/images/projects/search/search1.avif",
      "/Portfolio/images/projects/search/search2.avif"
    ], 
    tags: ["Algorithms", "Problem Solving", "Performance Analysis"], 
    github: null, 
    demo: null, 
    report: null, 
    features: [
      "Normalized and extracted unique tokens from text for accurate indexing",
      "Built an inverted index mapping words to the pages in which they appear",
      "Implemented Boolean-style search queries using union, intersection, and exclusion",
      "Processed structured data files and handled missing query terms gracefully",
      "Integrated and validated the system through an interactive search interface with extensive testing"
    ], technologies: [
      "IDE: VSCode", 
      "C++"
    ], 
    challenges: "A key challenge was debugging incorrect search results caused by subtle off-by-one and boundary errors. Ensuring correctness across all edge cases required systematic testing and careful reasoning about control flow.", 
    learnings: "This project strengthened my understanding of algorithmic thinking and time complexity. I learned how to evaluate trade-offs between different approaches, write precise conditional logic, and validate correctness using structured tests—skills essential for building reliable and efficient software."
  },
  { id: "ciphers", 
    title: "Ciphers", 
    description: "A C++ command-line application for encrypting and decrypting text using classical cryptographic ciphers", 
    fullDescription: "Implements multiple classical encryption and decryption techniques, including Caesar and substitution ciphers. This project supports both encryption and decryption workflows, with Caesar cipher decryption implemented using brute-force techniques combined with dictionary-based validation. For substitution cipher decryption, a hill-climbing algorithm guided by quadgram frequency scoring is used to evaluate the 'English-likeness' of candidate decryptions. The program is structured using helper functions and careful function decomposition, and all functionality is validated through an extensive milestone-based test suite.", 
    date: "February 2025", 
    images: [
      "/Portfolio/images/projects/ciphers/cip1.avif",
      "/Portfolio/images/projects/ciphers/cip2.avif",
      "/Portfolio/images/projects/ciphers/cip3.avif",
      "/Portfolio/images/projects/ciphers/cip4.avif"
    ], 
    tags: ["C++", "Algotithms", "Cryptography"], 
    github: null, 
    demo: null, 
    report: null, 
    features: [
      "Caesar cipher encryption and brute-force decryption",
      "Substitution cipher encryption and decryption using hill climbing",
      "Dictionary-based validation for Caesar decryption",
      "Quadgram-based scoring to evaluate English text likelihood",
      "File-based and console-based decryption support"
    ], technologies: [
      "IDE: VSCode", 
      "C++", 
      "string, vector, streams",
      "Makefile"
    ], 
    challenges: "The most challenging aspect of this project was designing efficient and correct decryption logic, especially for the substitution cipher. Implementing the hill-climbing algorithm required careful tuning to balance performance and accuracy. Another challenge was adhering to the project constraints, such as avoiding additional libraries and global variables, while still maintaining readable and modular code.", 
    learnings: "This project strengthened my understanding of algorithmic problem-solving and cryptanalysis techniques. I gained experience working with brute-force approaches, probabilistic scoring using quadgrams, and performance-aware C++ programming. It also reinforced the importance of clean function decomposition and systematic testing when working with complex logic."
  },
  {id: "fitch2024", 
    title: "UCAN Fleet Management Portal", 
    description: "A simple, intuitive way to submit and organize Vehicle Requests and Returns. Allows for seamless communication between Staff and Managers. Contributes to an organized space, and easy record keeping.", 
    fullDescription: "We were inspired by Break Through Tech Chicago's message of innovation and pioneering in the tech field. Before the Codeathon, none of us knew how to use any of the tools or softwares, but we took it as a challenge to learn and deliver a useful product to UCAN. Our website allows UCAN staff to access Vehicle management forms in an easy-to-access and intuitive website. When a staff member submits a Vehicle Request Form, an automated flow sends notifications and approval requests to their manager for seamless communication. Managers can find links to the requests in the emails sent through automation and can easily approve or reject requests without having to write out a full email. Information about the request, like status or if a vehicle has been allocated is also updated as approvals are given in the original form. Thus, all the information is linked together and managers do not need to go digging into paperwork for more information on the details of a request. We used Microsoft Automate to create workflows and automate email responses and next steps. SharePoint was used to organize and save request form information, vehicle return form submissions and vehicle status information. This application was created for the Chicago Fitch 2024 codeathon alongside Harini Solaidurairaj, Ariel Wong, Asha Makwana, Carissa Lau, and Rida Siddiqui. Check out our devpost submission --> https://devpost.com/software/ucan-fleet-portal-group-3", 
    date: "Dec 2024", 
    images: [
      "/Portfolio/images/projects/fitch2024/ucan1.avif", 
      "/Portfolio/images/projects/fitch2024/ucan2.avif",
      "/Portfolio/images/projects/fitch2024/ucan3.avif", 
      "/Portfolio/images/projects/fitch2024/ucan4.avif", 
      "/Portfolio/images/projects/fitch2024/ucan5.avif", 
      "/Portfolio/images/projects/fitch2024/ucan6.avif", 
      "/Portfolio/images/projects/fitch2024/ucan7.avif"
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
  { id: "pointerMaze", 
    title: "Grid Pointer Maze", 
    description: "Explored pointer-based data structures and memory debugging by navigating a dynamically linked maze in C++", 
    fullDescription: "This project focused on building and exploring a pointer-based maze implemented using dynamic memory allocation in C++. I first implemented a templated two-dimensional Grid abstraction backed by heap-allocated arrays and proper constructors and destructors. This grid abstraction was then used to represent a labyrinth of interconnected rooms, where each room was linked via directional pointers. Using GDB, I manually traced memory addresses to map out the maze, identify walls, and locate key items. The maze is considered solved only when a valid path collects the Spellbook, Potion, and Wand. Changing the maze key regenerates the pointer layout. Additionally if the virtual environment is reset the memory adress may change but the maze has the same shape.", 
    date: "November 2024", 
    images: [
      "/Portfolio/images/projects/pointerMaze/maze1.avif",
      "/Portfolio/images/projects/pointerMaze/maze2.avif"
    ], 
    tags: ["GDB", "C++", "Pointers", "Memory Management", "Debugging"], 
    github: null, 
    demo: null, 
    report: null, 
    features: [
      "Created a digital maze game with C++, This project involves the user to debug the created maze utilizing GDB to find a path which collects the Wand, Spellbook and Potion",
      "Created the mazes to be unique with a string the user can change, when tested in GDB the addresses are going to be different than the previous version allowing the user to trace through the maze again to find their path out of the maze",
      "Developed a grid.h and maze.h which I utilized throughout the project as it was the backbone for my regular maze and twisty maze",
      "Utilized if-else statements to make sure the user is inputting only valid moves based on the maze"
    ], technologies: [
      "IDE: zyBooks", 
      "C++",
      "Debugger: GDB",
      "Pointers & Dynamic Memory",
      "Memory Adress"
    ], 
    challenges: "This was my first experience working extensively with GDB and low-level pointer debugging. Tracing memory addresses, understanding segmentation faults, and mapping pointer relationships required patience and careful reasoning.",
    learnings: "This project gave me a strong understanding of pointer-based data structures, dynamic memory management, and debugging at the memory level. I learned how constructors and destructors control object lifecycles, how pointer errors lead to segmentation faults, and how powerful debugging tools like GDB are for diagnosing complex systems-level issues."
  },
  { id: "greenEnv", 
    title: "Save the Environment", 
    description: "An informational website created to raise awareness about environmental protection and encourage people to take action to care for the Earth", 
    fullDescription: "This project was created in collaboration with Harini Solaidurairaj as part of the 2020 Developer Program Cohort Final Project Showcase (https://stemleague.github.io/login/final-showcase.html). We were inspired by our passion to help the world and prevent further environmental damage. Our goal was to spread awareness about the importance of protecting the Earth and encourage people to make more environmentally conscious choices for the sake of future generations.", 
    date: "Summer 2020", 
    images: [
      "/Portfolio/images/projects/saveEnv/env1.avif",
      "/Portfolio/images/projects/saveEnv/env2.avif",
      "/Portfolio/images/projects/saveEnv/env3.avif",
      "/Portfolio/images/projects/saveEnv/env4.avif",
      "/Portfolio/images/projects/saveEnv/env5.avif",
      "/Portfolio/images/projects/saveEnv/env6.avif"
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