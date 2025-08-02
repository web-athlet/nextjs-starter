
import React from 'react';
import type { Service } from '../types';
import { ArrowRightIcon } from './icons';
import Link from 'next/link';

const servicesData: {id: string, name: string, path: string}[] = [
  { id: '01', name: 'FTTH Beratung', path: '/ftth-projekte' },
  { id: '02', name: 'Marketing & KI', path: '/marketing-und-ki' },
  { id: '03', name: 'B2B-Lösungen', path: '/leistungen-unternehmen' },
  { id: '04', name: 'Karriere & Partner', path: '/karriere' },
];

const ServiceItem: React.FC<{ service: {id: string, name: string, path: string} }> = ({ service }) => {
    return (
        <Link href={service.path} className="w-full flex items-center justify-between border-b border-gray-700 py-6 group text-left">
            <div className="flex items-center space-x-6">
            <span className="text-gray-500 font-medium">{service.id}</span>
            <h3 className="text-xl md:text-2xl font-bold group-hover:text-[#A3FF12] transition-colors">{service.name}</h3>
            </div>
            <div className="bg-gray-800 rounded-full p-2 group-hover:bg-[#A3FF12] transition-colors shrink-0">
            <ArrowRightIcon className="w-6 h-6 text-white group-hover:text-black transition-colors" />
            </div>
        </Link>
    )
};

const Services: React.FC = () => {
  return (
    <section className="py-12 md:py-24">
      <div className="bg-[#111111] rounded-3xl p-4 sm:p-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 h-full w-2 bg-[#A3FF12] hidden sm:block"></div>
        <div className="absolute top-4 left-4 h-2 w-16 bg-[#A3FF12] sm:hidden"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:pl-10">
          <div>
            <h2 className="text-4xl font-bold inline-block relative">
              <span className="bg-[#A3FF12] text-black px-2 py-1 rounded-md">Unsere</span> Kernkompetenzen
            </h2>
            <p className="text-gray-400 mt-4">Wir bieten spezialisierte Dienstleistungen, um den digitalen Wandel in Ihrem Unternehmen voranzutreiben.</p>
            <div className="mt-8">
              {servicesData.map((service) => (
                <ServiceItem key={service.id} service={service} />
              ))}
            </div>
          </div>
          <div className="relative flex items-center justify-center min-h-[450px]">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=870&auto=format&fit=crop" 
              alt="Team at work"
              className="rounded-2xl object-cover w-full h-full absolute"
            />
            <div className="absolute bottom-6 right-6 lg:-right-8 flex flex-col space-y-4">
              <Link href="/ueber-uns" className="bg-[#A3FF12]/90 backdrop-blur-sm text-black p-6 rounded-xl w-52 hover:bg-[#A3FF12] transition-all transform hover:scale-105 text-left">
                <p className="font-bold">So arbeiten wir</p>
                <p className="text-sm font-medium">Unsere Werte & Prozesse</p>
                <ArrowRightIcon className="w-6 h-6 mt-2" />
              </Link>
              {/* Assuming /team should go to /ueber-uns where the team is shown */}
              <Link href="/ueber-uns" className="bg-[#A3FF12]/90 backdrop-blur-sm text-black p-6 rounded-xl w-52 hover:bg-[#A3FF12] transition-all transform hover:scale-105 text-left">
                <p className="font-bold">Unsere Experten</p>
                <p className="text-sm font-medium">Lernen Sie das Team kennen</p>
                <ArrowRightIcon className="w-6 h-6 mt-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
