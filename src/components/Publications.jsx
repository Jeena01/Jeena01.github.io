import React from "react";

export default function PublicationsSection() {
  const publications = [
    {
      title: "Cracking CodeWhisperer",
      description:
        "Analyzing Developers’ Interactions and Patterns During Programming Tasks",
      venue: "IEEE VL/HCC 2025 — First Author 🌟",
      emoji: "💬",
      href: "https://conf.researchr.org/details/vlhcc-2025/vlhcc-2025-research-papers/42/Cracking-CodeWhisperer-Analyzing-Developers-Interactions-and-Patterns-During-Program",
    },
    {
      title: "CodeWatcher",
      description:
        "IDE Telemetry Data Extraction Tool for Understanding Coding Interactions with LLMs",
      venue: "IEEE ICSME 2025 — Third Author 🧑‍💻",
      emoji: "👀",
      href: "https://conf.researchr.org/details/icsme-2025/icsme-2025-tool-demonstration/9/CodeWatcher-IDE-Telemetry-Data-Extraction-Tool-for-Understanding-Coding-Interactions"
    },
  ];

  return (
    <section  id = "publications" className="w-full bg-gradient-to-b from-yellow-50 to-yellow-50 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-amber-950 mb-12 pb-10">
        📖 Publications
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto px-6">
        {publications.map((pub, index) => (
          <a href={pub.href} target="_blank" rel="noopener noreferrer">
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
          </a>
        ))}
      </div>
      <p className="text-gray-500 text-sm mt-10">
          Only two. For now... Dun dun DUN
        </p>
    </section>
  );
}
