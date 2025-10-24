import React, { useState } from "react";
// Framework icons
import DjangoIcon from "../assets/tech_logos/django-icon.svg";
import FlaskIcon from "../assets/tech_logos/Flask.svg";
import JavaIcon from "../assets/tech_logos/Java.svg";
import MongoIcon from "../assets/tech_logos/MongoDB.svg";
import NodeIcon from "../assets/tech_logos/Node.js.svg";
import RaspberryPiIcon from "../assets/tech_logos/Raspberry Pi.svg";
import ReactIcon from "../assets/tech_logos/react.svg";
import TailwindIcon from "../assets/tech_logos/tailwindcss-icon.svg";
import TensorFlowIcon from "../assets/tech_logos/tensorflow.svg";
import TypeScriptIcon from "../assets/tech_logos/typescript-icon-round.svg";
import VueIcon from "../assets/tech_logos/vue.svg";
import CsharpIcon from "../assets/tech_logos/Csharp.svg"
import UnityIcon from "../assets/tech_logos/Unity.svg"
import PythonIcon from "../assets/tech_logos/Python.svg"
// Projects data
const projects = [
  {
    title: "Tarot Reading Mobile App",
    description:
      "Developed a recreational fortune-telling mobile app using React Native and Flask. Implemented TensorFlow-based card recognition and on-device image processing for real-time tarot predictions.",
    frameworks: ["React", "Flask", "TensorFlow", "Python", "Expo"],
    
  },
  {
    title: "Multiplayer Chess",
    description:
      "Developed a multiplayer chess game with WebSockets or TCP sockets for real-time communication, game state management and concurrency.",
    frameworks: ["Java","Spring Boot"],
    
  },
  {
    title: "ScanWich Smart Fridge Magnet",
    description:
      "Created an IoT-powered smart fridge magnet that recognizes food labels using Tesseract OCR and Raspberry Pi. Built the companion mobile app with React Native and Flask for text recognition and inventory tracking.",
    frameworks: ["React", "Flask", "Python", "Tesseract OCR", "Raspberry Pi", "Expo"],
  },
  {
    title: "MiracleTwelve Social Mobile App",
    description:
      "Designed and developed a mobile social app that encourages maintaining up to twelve meaningful friendships. Built with a Django + PostgreSQL backend and a responsive React Native frontend.",
    frameworks: ["React", "Django", "PostgreSQL", "TailwindCSS", "Python", "Expo"],
  },
  {
    title: "CodeWatcher",
    description:
      "Engineered an IDE telemetry tool for research on developer productivity and coding behavior. Integrated backend analytics with Flask and MongoDB. Presented findings at ICSME 2025.",
    frameworks: ["Node.js", "Flask", "Python", "MongoDB", "Express.js"],
  },
  {
    title: "Cultural Care Compass",
    description:
      "Developed an award-winning hybrid recommendation engine promoting cultural awareness and global collaboration. Built using Flask with personalized content recommendations powered by data-driven algorithms.",
    frameworks: ["Flask", "Python", "Pandas", "Scikit-learn"],
  },
  {
    title: "File Upload Service",
    description:
      "Implemented a secure Django-based file upload API featuring file type validation, size limits, and cloud storage integration. Built React frontend for seamless user interaction and management.",
    frameworks: ["Django", "React", "Python", "AWS S3", "PostgreSQL"],
  },
  {
    title: "Notes App",
    description:
      "Created a responsive CRUD web app using Flask and Vue.js for quick note-taking and management, styled with TailwindCSS for modern UI.",
    frameworks: ["Flask", "Vue.js", "TailwindCSS", "Python"],
  },
  {
    title: "Natural Language Processing Chatbot",
    description:
      "Built a chatbot using Java Swing and Stanford CoreNLP for natural language understanding, implementing POS tagging, dependency parsing, and sentiment analysis for conversational responses.",
    frameworks: ["Java", "Swing", "Stanford CoreNLP"],
  },
  {
    title: "Prism Capstone Project",
    description:
      "Led a computer vision capstone project focused on water pipeline inspection. Implemented defect detection models using TensorFlow and OpenCV, with a React dashboard and Django backend for visualization.",
    frameworks: ["React", "Django", "TensorFlow", "Python", "OpenCV", "MongoDB"],
  },
  {
    title: "Donkey Kong 3D Clone",
    description:
      "Recreated the classic Donkey Kong arcade game in 3D using Unity. Designed physics, AI behaviors, and interactive level elements in C#.",
    frameworks: ["Unity", "C#"],
  },
];




const frameworkIcons = {
  
  Python: PythonIcon,
  Java: JavaIcon,
  Django: DjangoIcon,
  Flask: FlaskIcon,
  MongoDB: MongoIcon,
  "Node.js": NodeIcon,
  "Raspberry Pi": RaspberryPiIcon,
  React: ReactIcon,
  TailwindCSS: TailwindIcon,
  TensorFlow: TensorFlowIcon,
  // TypeScript: TypeScriptIcon,
  "Vue.js": VueIcon,
  Unity:UnityIcon,
  "C#": CsharpIcon,
};

export default function FrameworksProjects() {
  const [selectedFramework, setSelectedFramework] = useState(null);
  const [showDetail,setShowDetail]=useState(false);

  const filteredProjects = selectedFramework
    ? projects.filter((p) => p.frameworks.includes(selectedFramework))
    : projects;

  return (
    <div className="bg-gradient-to-b from-yellow-50 to-green-50 via-white">
    <section id="projects" className="items-center container mx-auto px-6 py-12 bg-gradient-to-b from-yellow-50 to-green-50 via-white">
      <h2 className="text-4xl md:text-5xl text-center font-bold text-indigo-900 mb-12">
          Frameworks and Projects
        </h2>
      {/* Framework Icons in Circles */}
      <div className="flex flex-wrap gap-4 mb-12 justify-center max-w-3xl mx-auto">
        {Object.entries(frameworkIcons).map(([name, Icon]) => (
          <button
            key={name}
            onClick={() =>
              setSelectedFramework(selectedFramework === name ? null : name)
            }
            className={`w-16 h-16 p-3 rounded-full flex items-center justify-center border transition transform hover:scale-110 ${
              selectedFramework === name
                ? "border-pink-500"
                : "border-gray-300 bg-white"
            }`}
            title={name}
          >
            <img src={Icon} alt={name} className="w-full h-full object-contain" />
          </button>
        ))}
      </div>
<div className="flex items-center justify-center gap-2 mb-6">
  <label className="text-gray-700 font-medium">Show Details</label>
  <button
    onClick={() => setShowDetail(!showDetail)}
    className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300 ${
      showDetail ? "bg-yellow-400" : "bg-yellow-100"
    }`}
  >
    <div
      className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
        showDetail ? "translate-x-6" : ""
      }`}
    ></div>
  </button>
</div>



      {/* Projects */}
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {filteredProjects.map((project) => (
          <div
            key={project.title}
            className="p-6 border rounded-lg shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            {showDetail && (<p className="text-gray-700 mb-3">{project.description}</p>)}
            <div className="flex flex-wrap gap-2">
              {project.frameworks.map((fw) => (
                <span
                  key={fw}
                  className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-sm"
                >
                  {fw}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}
