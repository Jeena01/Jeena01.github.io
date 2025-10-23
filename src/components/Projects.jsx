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
// Projects data
const projects = [
  {
    title: "Natural Language Processing Chatbot",
    description:
      "Developed a chatbot using Stanford CoreNLP for natural language understanding, including POS tagging and sentiment analysis using Java and Swing.",
    frameworks: ["Java", "Swing", "CoreNLP"],
  },
  {
    title: "Tarot Reading Mobile App",
    description:
      "Built a recreational fortune-telling application using React Native and Flask with TensorFlow-based card recognition.",
    frameworks: ["React", "Flask", "TensorFlow"],
  },
  {
    title: "ScanWich Smart Fridge Magnet",
    description:
      "Computer Vision and Backend Development Project • Text Recognition Tesseract OCR Mobile App development, React Native App development using Expo • RaspberryPi microcontrollers",
    frameworks: ["React", "Raspberry Pi"],
  },
  {
    title: "Cultural Care Compass AI4SG Hackathon Winner, 2024",
    description: "Recommendation engine using Flask • Postman for testing",
    frameworks: ["Flask"],
  },
  {
    title: "SecureFileUploadService-proof_of_skill",
    description:
      "Public Django file upload API with file type checks, size limits, and cloud storage integration.",
    frameworks: ["Django"],
  },
  {
    title: "NotesApp-proof-of-skill",
    description: "Public CRUD app with Flask + Vue",
    frameworks: ["Flask", "Vue"],
  },
];



const frameworkIcons = {
  Django: DjangoIcon,
  Flask: FlaskIcon,
  Java: JavaIcon,
  MongoDB: MongoIcon,
  "Node.js": NodeIcon,
  "Raspberry Pi": RaspberryPiIcon,
  React: ReactIcon,
  Tailwind: TailwindIcon,
  TensorFlow: TensorFlowIcon,
  TypeScript: TypeScriptIcon,
  Vue: VueIcon,
};

export default function FrameworksProjects() {
  const [selectedFramework, setSelectedFramework] = useState(null);

  const filteredProjects = selectedFramework
    ? projects.filter((p) => p.frameworks.includes(selectedFramework))
    : projects;

  return (
    <section id="projects" className="items-center container mx-auto px-6 py-12 bg-gradient-to-b from-yellow-50 to-green-50 via-white">
      <h2 className="text-4xl md:text-5xl text-center font-bold text-indigo-900 mb-12">
          Frameworks and Projects
        </h2>
      {/* Framework Icons in Circles */}
      <div className="flex flex-wrap gap-4 mb-12 justify-center">
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

      {/* Projects */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.title}
            className="p-6 border rounded-lg shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-3">{project.description}</p>
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
  );
}
