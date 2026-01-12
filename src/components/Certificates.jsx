import React from "react";

export default function CertificatesSection() {
  const certificates = [
    {
      title: "Full-Stack Developer",
      issuer: "Meta",
      year: "2025",
      emoji: "💻",
      description:
        "Frontend, backend, and deployment practices using React, Node.js, and databases.",
    },
    {
      title: "Machine Learning Specialization",
      issuer: "Stanford University & DeepLearning.AI",
      year: "2024",
      emoji: "🤖",
      description:
        "Neural networks, deep learning, and model optimization using TensorFlow and real-world data applications.",
    },
    {
        title: "IT Automation with Python",
      issuer: "Google",
      year: "2024",
      emoji: "🤖",
      description:
        "Python automation, systems administration, configuration management and Cloud, Git and GitHub.",
    
    },
    {
        title: "Java Programming Fundamentals",
      issuer: "IBM",
      year: "2024",
      emoji: "🤖",
      description:
        "OOP principles, inheritance, and Java Collections file I/O, exception handling, and date/time APIs."
    }
  ];

  return (
    <section id="certificates" className="w-full bg-gradient-to-b from-green-50 via-white to-blue-50 py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-12">
          🏅 Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl border border-blue-100 shadow-md hover:shadow-blue-200 transition-all duration-300 p-8 flex flex-col items-center text-center"
            >
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">
                {cert.title}
              </h3>
              <p className="text-gray-700 font-medium mb-1">{cert.issuer}</p>
              <p className="text-gray-600">{cert.description}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-500 text-sm mt-10">
          🧚 Always learning, always growing — because the journey never stops and I keep forgetting to cancel my Coursera subscription.
        </p>
      </div>
    </section>
  );
}
