export const mockData = {
  about: {
    title: "About Me",
    description: "I'm a passionate full-stack developer with a PhD in Robotics and extensive experience in AI. My unique combination of academic research and practical development allows me to create innovative solutions that bridge theoretical concepts with real-world applications.",
    highlights: [
      "PhD in Robotics with focus on autonomous systems",
      "5+ years of full-stack development experience",
      "Published researcher in AI and machine learning",
      "Expert in building scalable web applications"
    ],
    stats: [
      { label: "Years Experience", value: "5+" },
      { label: "Projects Completed", value: "50+" },
      { label: "Research Papers", value: "12" },
      { label: "Technologies Mastered", value: "25+" }
    ]
  },
  skills: {
    categories: [
      {
        title: "Frontend Technologies",
        skills: ["React.js", "Vue.js", "TypeScript", "Next.js", "Tailwind CSS", "HTML5/CSS3"]
      },
      {
        title: "Backend Technologies",
        skills: ["Node.js", "Python", "FastAPI", "Express.js", "Django", "PostgreSQL", "MongoDB"]
      },
      {
        title: "AI & Machine Learning",
        skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "Natural Language Processing", "Computer Vision"]
      },
      {
        title: "Robotics & Research",
        skills: ["ROS (Robot Operating System)", "MATLAB", "Gazebo Simulation", "Control Systems", "Path Planning", "SLAM"]
      },
      {
        title: "DevOps & Tools",
        skills: ["Docker", "AWS", "Git", "CI/CD", "Kubernetes", "Linux"]
      }
    ]
  },
  projects: [
    {
      id: 1,
      title: "Autonomous Navigation System",
      category: "Robotics & AI",
      description: "Developed an intelligent navigation system for autonomous robots using deep reinforcement learning and computer vision.",
      technologies: ["Python", "TensorFlow", "ROS", "OpenCV", "SLAM"],
      features: [
        "Real-time obstacle detection and avoidance",
        "Dynamic path planning algorithms",
        "Integration with various sensor systems"
      ],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&h=400"
    },
    {
      id: 2,
      title: "AI-Powered Analytics Dashboard",
      category: "Full Stack & AI",
      description: "Built a comprehensive analytics platform with machine learning insights for business intelligence.",
      technologies: ["React", "Node.js", "Python", "MongoDB", "TensorFlow"],
      features: [
        "Real-time data visualization",
        "Predictive analytics using ML models",
        "Scalable microservices architecture"
      ],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&h=400"
    },
    {
      id: 3,
      title: "Collaborative Research Platform",
      category: "Full Stack",
      description: "Developed a web platform for researchers to collaborate, share datasets, and publish findings.",
      technologies: ["Vue.js", "FastAPI", "PostgreSQL", "Docker", "AWS"],
      features: [
        "User authentication and role management",
        "File sharing and version control",
        "Integrated publication workflow"
      ],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=400"
    }
  ],
  experience: [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "Tech Innovation Labs",
      period: "2022 - Present",
      location: "Remote",
      description: "Leading development of AI-powered web applications and managing a team of junior developers.",
      achievements: [
        "Built 3 major AI-integrated web applications serving 10k+ users",
        "Reduced application load time by 40% through optimization",
        "Mentored 5 junior developers and established coding standards"
      ]
    },
    {
      id: 2,
      title: "Research Scientist & Developer",
      company: "Robotics Research Institute",
      period: "2020 - 2022",
      location: "University Campus",
      description: "Conducted cutting-edge research in autonomous systems while developing practical applications.",
      achievements: [
        "Published 8 research papers in top-tier conferences",
        "Developed novel algorithms for robot navigation",
        "Secured $500K research funding for autonomous systems project"
      ]
    },
    {
      id: 3,
      title: "PhD Researcher",
      company: "University Robotics Lab",
      period: "2017 - 2020",
      location: "University Campus",
      description: "Focused on developing intelligent control systems for autonomous robots.",
      achievements: [
        "Completed PhD thesis on 'Adaptive Control in Dynamic Environments'",
        "Presented research at 12 international conferences",
        "Collaborated with industry partners on real-world applications"
      ]
    }
  ],
  contact: {
    title: "Let's Build Something Amazing Together",
    description: "Whether you're looking for a technical co-founder, research collaborator, or senior developer, I'm excited to discuss how we can work together.",
    email: "ahmad.alghooneh@example.com",
    linkedin: "https://www.linkedin.com/in/ahmad-alghooneh-176403169/",
    github: "https://github.com/ahmad-alghooneh",
    availability: "Available for new opportunities"
  }
};