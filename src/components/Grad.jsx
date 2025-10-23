import React from 'react';
import GradImage from '../assets/grad_goose.png'; // adjust path if needed

export default function Grad() {
  return (
    <section id="education" className="w-full py-20 bg-gray-100 flex items-center justify-center bg-gradient-to-b from-gray-100 to-pink-50">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img 
            src={GradImage} 
            alt="Graduation Goose" 
            className="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-lg object-cover max-w-sm"
          />
        </div>
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-10 lg:mr-10 md:mb-0">
          <h2 className="text-3xl md:text-5xl font-bold text-lime-950 mb-4 py-12">
            1° (Degree) Hotter 🎓
          </h2>
          <p className="text-gray-600 text-md md:text-lg mb-6">
             Recently graduated from the University of British Columbia with a Bachelor's in Computer Science and a perfect 4.33 GPA, I’m currently wrapping up the last of my research projects from university and polishing my coding skills.  
  <br/>I love channeling my creativity into software projects and opportunities that can make a positive impact in people's lives.  
  Right now, I’m actively looking for work in software development and research. 
          </p>
        </div>
      </div>
    </section>
  );
}
