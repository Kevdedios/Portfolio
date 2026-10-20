/* ==========================================================
   THIS IS THE ONLY FILE YOU NEED TO EDIT FOR MOST UPDATES.
   Change the text between the quotes, save, refresh the page.
   ========================================================== */

const SITE = {
  name: "Kevin Angelo D. De Dios",
  initials: "KD",
  role: "IT Graduate · Technical Support Professional",
  tagline:
    "Turning real-world troubleshooting experience into clean, reliable software and remote-ready IT support.",
  email: "kev.dedioss@gmail.com",
  location: "Philippines · Open to remote work",
  photo: "assets/photo.jpg", // put your formal picture here (see GUIDE.md)
  resumeLink: "assets/resume.pdf", // optional: put your resume PDF here, or set to "" to hide the button

  // Free form at https://formspree.io -> create form -> paste the URL here.
  // Leave "" and the form will open the visitor's email app instead.
  formEndpoint: "",

  about: [
    "I graduated with a degree in Information Technology from Our Lady of Fatima University, where I built a foundation in Java, C++ and Python.",
    "For over a year I have worked as a Technical Support / Subject Matter Expert for Verizon at Alorica, solving customer problems under pressure, communicating clearly, and learning how real users experience technology.",
    "Now I am sharpening my skills in modern web development and automation so I can contribute to remote teams."
  ],

  stats: [
    { value: "1+ yr", label: "Technical support" },
    { value: "3", label: "Languages learned" },
    { value: "BSIT", label: "Graduate" }
  ],

 experience: [
  {
    role: "Technical Support / Subject Matter Expert",
    company: "Alorica (Verizon account) — Cubao, Quezon City",
    period: "August 2025 — Present",
    points: [
      "Troubleshoot customer device, network and account issues through phone and chat.",
      "Explain technical concepts in simple language and keep calm under high call volume.",
      "Document cases accurately and follow escalation procedures.",
      "Maintain quality, handle-time and customer satisfaction targets."
    ]
  },                                    // <-- comma added here
  {
    role: "Project Management Intern & Junior Programmer",
    company: "Centrive Technologies — Caloocan, NCR",
    period: "January 2025 — June 2025",
    points: [
      "Supported project planning by tracking timelines, managing tasks, and assisting in client communications to secure delivery of systemrelated projects.",
      "Helped develop, test, and maintain web-based systems tailored to client needs. ",
      "Coordinated with team members and supervisors through regular check-ins, ensuring clear communication and smooth collaboration across teams. "
    ]
  }                                     // <-- no comma after the last one
],

  education: [
    {
      school: "Our Lady of Fatima University",
      degree: "Bachelor of Science in Information Technology",
      period: "Graduated 2025", // put your real years
      points: ["Programming in Java, C++ and Python", "Recipient of Dean’s Lister award with a GWA of 1.46", " Former President of Fatima Computing and Multimedia Society Antipolo." , "Earned Cisco Certified Support Technician – Cybersecurity (Cisco ID: CSCO14948164)." , "Earned the Information Technology Specialist in Python certification from Certiport (May 2025)" ]
    }
  ],

  skills: [
    "Python", "Java", "C++", "HTML", "CSS", "JavaScript",
    "Git & GitHub", "Troubleshooting", "Customer Communication", "Cybersecurity", "Networking"
  ],

  // ---------- YOUR WORKS ----------
  // To add a work: copy one block, paste it at the TOP, change the text.
  // image: optional screenshot in assets/ (e.g. "assets/todo.png"). Leave "" for a stylish placeholder.
  projects: [
    {
      title: "Web-based Real Estate Record Management System with 3-D Modeling for Sun Valley Estate Core group",
      description: "A web-based record management and interactive 3D visualization platform for Sun Valley Estate Core Group, designed to centralize property records, streamline lot inventory tracking, and deliver an immersive 3D spatial mapping experience for prospective buyers and sales teams..",
      tags: ["Web", "JavaScript"],
      category: "Web",
      image: "assets/realestate.png",
      live: "",
      code: "https://github.com/yourusername/portfolio",
      date: "2025"
    },
    {
      title: "Employee Record Management and Pre-Assessment Online System for Tri-R Secuirty Agency",
      description: "A centralized web platform for digital record management and automated pre-employment candidate assessments.",
      tags: ["Python", "Automation"],
      category: "Python",
      image: "assets/trir.png",
      live: "",
      code: "",
      date: "2025"
    },
    {
      title: "Integrated POS and Supply Chain Ordering System for Supremacy International and Kegg Franchise Operations",
      description: "A unified Point of Sale and inventory ordering platform built for Supremacy International to streamline daily cashier transactions, centralize multi-branch stock requests, and automate franchise supply ordering across Kegg outlets.",
      tags: ["Java", "C++"],
      category: "Java / C++",
      image: "assets/kegg.png",
      live: "",
      code: "",
      date: "2025"
    }
  ],

  socials: [
    { label: "LinkedIn", url: "www.linkedin.com/in/kevin-angelo-de-dios-bb0b24279" },
    { label: "GitHub", url: "https://github.com/Kevdedios" },
    { label: "Facebook", url: "https://facebook.com/yourprofile" },
    { label: "Instagram", url: "https://instagram.com/yourprofile" }
    // Delete any line you don't use.
  ]
};
