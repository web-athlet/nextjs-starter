
import React from 'react';
import { StarIcon, SparkleIcon, SquiggleIcon } from './icons';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section className="bg-white rounded-b-[40px] text-black px-4 sm:px-6 lg:px-8 pt-32 pb-12 sm:pb-20">
      <div className="flex flex-col lg:flex-row items-center gap-8 max-w-6xl mx-auto">
        {/* Left Column */}
        <div className="lg:w-[55%] w-full text-center lg:text-left relative">
          <SparkleIcon className="w-16 h-16 text-[#A3FF12] absolute -top-12 -left-8 hidden lg:block" />
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-black">
            Empowering Brands
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-black mt-1 flex items-center gap-4 justify-center lg:justify-start">
            Through Creative Solutions
             <SparkleIcon className="w-8 h-8 text-[#A3FF12] hidden sm:inline-block" />
          </h1>
          
          <div className="mt-6 max-w-md mx-auto lg:mx-0 flex items-start gap-3">
             <SparkleIcon className="w-4 h-4 text-[#A3FF12] mt-1 flex-shrink-0" />
             <p className="text-gray-600">
               From web development to branding, we deliver innovative strategies that elevate your brand and drive growth. Let's create something exceptional together.
             </p>
          </div>

          <div className="mt-8 flex items-center gap-4 justify-center lg:justify-start">
            <Link href="/kontakt" className="bg-transparent border border-gray-300 text-black font-semibold rounded-full px-6 py-2 w-auto hover:bg-gray-100 transition-colors">
              Kontakt aufnehmen
            </Link>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:w-[45%] w-full flex justify-center items-center relative min-h-[400px]">
          <div className="absolute top-0 right-0 text-right">
            <div className="flex justify-end">
              {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-5 h-5 text-[#A3FF12]" />)}
            </div>
            <p className="font-bold text-lg mt-1">10 Years</p>
            <p className="text-gray-500 text-sm">Experience</p>
          </div>
          
          <div className="absolute w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] bg-gray-100 rounded-full flex items-center justify-center">
             <SquiggleIcon className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 text-gray-300 transform -scale-x-100" />
          </div>

          <div className="relative w-[280px] h-[380px] sm:w-[320px] sm:h-[420px] mt-8">
            <img 
              src="https://web-athlet.com/assets/img/vertriebsagentur-jobs-img2.png" 
              alt="Business woman celebrating success" 
              className="w-full h-full object-cover rounded-b-full"
              style={{ objectPosition: 'top' }}
            />
            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                <div className="bg-black/20 backdrop-blur-sm p-1.5 rounded-full flex gap-1.5">
                    <Link href="/leistungen-unternehmen" className="bg-[#A3FF12] text-black text-sm font-semibold px-4 py-2 rounded-full hover:brightness-110 transition-all">
                        Start Your Project
                    </Link>
                    <Link href="/ueber-uns" className="bg-black/50 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-black/70 transition-all">
                        Let's Collaborate
                    </Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;