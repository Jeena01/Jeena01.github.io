import React from "react";

export default function PublicationsSection() {
  const publications = [
    {
      title: "Cracking CodeWhisperer",
      description:
        "Analyzing Developers’ Interactions and Patterns During Programming Tasks",
      venue: "IEEE VL/HCC 2025 — First Author 🌟",
      emoji: "💬",
    },
    {
      title: "CodeWatcher",
      description:
        "IDE Telemetry Data Extraction Tool for Understanding Coding Interactions with LLMs",
      venue: "IEEE ICSME 2025 — Third Author 🧑‍💻",
      emoji: "👀",
    },
  ];

  return (
    <section className="w-full bg-yellow-50 py-20 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">
        📖 Publications
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto px-6">
        {publications.map((pub, index) => (
          <div
            key={index}
            className="bg-white border border-yellow-100 rounded-3xl shadow-md hover:shadow-lg hover:shadow-yellow-100 transition-all duration-300 transform hover:-translate-y-1 p-8 flex flex-col items-center text-center"
          >
            <h3 className="text-2xl font-semibold text-yellow-600 mb-2">
              {pub.title}
            </h3>
            <p className="text-gray-700 italic mb-3">{pub.description}</p>
            <p className="text-gray-500 font-medium">{pub.venue}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
