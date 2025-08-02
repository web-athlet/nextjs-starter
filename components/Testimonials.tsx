
'use client';

import React, { useState } from 'react';
import { ArrowRightIcon } from './icons';

const testimonialData = [
  {
    quote: "NexusConnect hat nicht nur eine Webseite erstellt; sie haben ein digitales Erlebnis geschaffen, das die Essenz unserer Marke perfekt einfängt. Die Hingabe und Kreativität des Teams sind unübertroffen.",
    author: "Daniel Steiner",
    company: "CEO, FutureTech GmbH",
    imageUrl: "https://picsum.photos/seed/client1/60/60"
  },
  {
    quote: "Die Zusammenarbeit war von Anfang an transparent und effizient. Ihre Expertise im FTTH-Vertrieb hat unsere Erwartungen übertroffen und zu einem messbaren Erfolg geführt.",
    author: "Laura Bergmann",
    company: "Projektleiterin, FiberNet AG",
    imageUrl: "https://picsum.photos/seed/client2/60/60"
  }
];

const clientTags = ["UX Design", "App Design", "Dashboard", "Wireframe", "User Research", "Prototyping"];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialData.length) % testimonialData.length);
  };
  
  const currentTestimonial = testimonialData[currentIndex];

  return (
    <section className="py-12 md:py-24">
      <div className="bg-[#111111] rounded-3xl p-8 sm:p-12 relative overflow-hidden">
        <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white">Was unsere Kunden sagen</h2>
            <div className="flex space-x-2">
                <button onClick={handlePrev} className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors" aria-label="Previous testimonial">
                    <ArrowRightIcon className="w-5 h-5 transform rotate-180"/>
                </button>
                 <button onClick={handleNext} className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors" aria-label="Next testimonial">
                    <ArrowRightIcon className="w-5 h-5"/>
                </button>
            </div>
        </div>

        <div className="relative">
             <blockquote className="text-xl md:text-2xl font-medium leading-relaxed text-gray-300 min-h-[150px]">
                "{currentTestimonial.quote}"
            </blockquote>
            <div className="mt-8 flex items-center space-x-4">
                <img src={currentTestimonial.imageUrl} alt={currentTestimonial.author} className="w-14 h-14 rounded-full" />
                <div>
                    <cite className="font-bold text-lg not-italic text-white">{currentTestimonial.author}</cite>
                    <p className="text-gray-400">{currentTestimonial.company}</p>
                </div>
            </div>
        </div>
      </div>
       <div className="mt-8 bg-black rounded-3xl p-6">
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
                {clientTags.map(tag => (
                    <span key={tag} className="text-gray-400 font-semibold">{tag}</span>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Testimonials;
