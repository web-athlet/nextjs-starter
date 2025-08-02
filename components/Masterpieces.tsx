
import React from 'react';
import { IdeaBulbIcon } from './icons';

interface MasterpiecesProps {
    title: React.ReactNode;
    description: string;
    image1: string;
    image2: string;
    tagText?: string;
}

const Masterpieces: React.FC<MasterpiecesProps> = ({ title, description, image1, image2, tagText}) => {
  return (
    <section className="py-12 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-black leading-tight">
            {title}
          </h2>
          <p className="mt-6 text-gray-400 max-w-lg mx-auto lg:mx-0">
            {description}
          </p>
        </div>
        <div className="relative h-96 w-full">
          <div className="absolute top-4 left-0 w-3/4 h-5/6">
            <img 
              src={image1}
              alt="Team collaborating in office" 
              className="w-full h-full object-cover rounded-3xl"
            />
            {tagText && (
              <div className="absolute bottom-4 left-4 bg-[#A3FF12] text-black text-xs font-bold px-4 py-2 rounded-lg">
                {tagText}
              </div>
            )}
          </div>
          <div className="absolute -bottom-8 right-0 w-2/3 h-2/3">
             <img 
              src={image2}
              alt="Creative woman thinking" 
              className="w-full h-full object-cover rounded-3xl filter grayscale"
            />
             <div className="absolute top-4 right-4 bg-white/30 backdrop-blur-sm p-2 rounded-full">
                <IdeaBulbIcon className="w-8 h-8 text-white" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Masterpieces;