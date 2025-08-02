
import React from 'react';
import { PlusIcon } from './icons';

const SloganBanner: React.FC = () => {
  return (
    <section className="py-20 md:py-32 overflow-hidden">
      <div className="text-center">
        <div className="flex justify-center items-center space-x-4 md:space-x-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black whitespace-nowrap">
          <span>Innovate</span>
          <PlusIcon className="w-6 h-6 md:w-8 md:h-8 text-[#A3FF12] flex-shrink-0" />
          <span>Inspire</span>
          <PlusIcon className="w-6 h-6 md:w-8 md:h-8 text-[#A3FF12] flex-shrink-0" />
          <span>Create</span>
        </div>
      </div>
    </section>
  );
};

export default SloganBanner;