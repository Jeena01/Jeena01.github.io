import React from "react";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Full Stack Software Developer",
      company: "Enhance Lifestyle Apartments 🏢",
      duration: "2025 – Present",
      color: "pink",
      details: [
        "Designed and managed PostgreSQL databases and developed Django REST APIs for data analytics and scalability.",
        "Built responsive React + TailwindCSS interfaces with automated validation for booking and payment workflows.",
        "Implemented CI/CD pipelines using GitHub Actions and Docker, deploying via Cloudflare for AI-ready infrastructure."
      ],
    },
    {
      title: "Software Lead",
      company: "SPACE MENs Research Team 🚀",
      duration: "2024 – 2025",
      color: "blue",
      details: [
        "Developed embedded C software for ESP32 microcontrollers to automate fluid experiments for aerospace research.",
        "Implemented Python computer vision algorithms with OpenCV to track and analyze fluid dynamics in microgravity.",
        "Collaborated on dataset generation and AI-based analysis models for experimental fluid studies."
      ],
    },
    {
      title: "Research Assistant & Software Developer",
      company: "UBC (Google-Funded Project) 🧠",
      duration: "2023 – 2024",
      color: "yellow",
      details: [
        "Created a telemetry research tool in Node.js and Flask to analyze developer interactions with AI programming assistants.",
        "Built data pipelines in Python to process and visualize behavioral data for ML-driven insights.",
        "Co-authored two IEEE publications presented at VL/HCC and ICSME 2025."
      ],
    },
    {
      title: "Supplemental Learning Leader",
      company: "Student Learning Hub, UBC 📚",
      duration: "May 2022 – August 2023",
      color: "purple",
      details: [
        "Led interactive workshops on data structures, calculus, and OOP concepts to enhance student engagement.",
        "Created adaptive lesson plans to match individual learning needs and styles.",
        "Encouraged collaborative learning and confidence-building through peer-led sessions."
      ],
    },
    {
      title: "Undergraduate Teaching Assistant",
      company: "Computer Science Department, UBC 🍀",
      duration: "May 2022 – April 2023",
      color: "green",
      details: [
        "Guided students through debugging, troubleshooting, and Java code reviews to strengthen problem-solving skills.",
        "Led review sessions focusing on practical coding techniques and conceptual mastery.",
        "Graded assignments with detailed, actionable feedback to support long-term academic growth."
      ],
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-pink-50 via-white to-pink-50 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-16 text-center">
          ✨ Adventures in Tech ✨
        </h2>

        <div className="relative  max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`mb-16 flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center md:items-start`}
            >
              {/* Left side (Title + Company + Duration) */}
              <div
                className={`md:w-1/2 px-6 py-10 ${
                  index % 2 === 0 ? "text-right md:pr-12" : "text-left md:pl-12"
                }`}
              >
                <h3
                  className={`text-2xl font-semibold text-${exp.color}-600 mb-1`}
                >
                  {exp.title}
                </h3>
                <p className="font-medium text-gray-700 mb-1">{exp.company}</p>
                <p className="italic text-gray-500">{exp.duration}</p>
              </div>

              {/* Center dot */}
              <div className="hidden md:block w-4 h-4 m-5 mt-10 bg-pink-300 rounded-full shadow-md" />

              {/* Right side (Details) */}
              <div
                className={`md:w-1/2 bg-white rounded-2xl shadow-md border border-${exp.color}-100 hover:shadow-${exp.color}-200 p-6 mt-6 md:mt-0 transition-all duration-300`}
              >
                <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed">
                  {exp.details.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
