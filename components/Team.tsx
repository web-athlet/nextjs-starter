
import React from 'react';
import type { TeamMember } from '../types';
import { ArrowRightIcon, UserIcon } from './icons';
import Link from 'next/link';

const teamData: TeamMember[] = [
  { name: 'Dr. Anna Schmidt', role: 'Geschäftsführerin', imageUrl: 'https://picsum.photos/seed/team1/100/100' },
  { name: 'Markus Weber', role: 'Leiter FTTH-Projekte', imageUrl: 'https://picsum.photos/seed/team2/100/100' },
  { name: 'Julia Koch', role: 'Leiterin Marketing & KI', imageUrl: 'https://picsum.photos/seed/team3/100/100' },
  { name: 'Thomas Bauer', role: 'Senior Consultant', imageUrl: 'https://picsum.photos/seed/team4/100/100' },
  { name: 'Sandra Richter', role: 'Partner Management', imageUrl: 'https://picsum.photos/seed/team5/100/100' },
  { name: 'Klaus Wolf', role: 'Leiter Vertrieb', imageUrl: 'https://picsum.photos/seed/team6/100/100' },
];

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <div className="bg-white text-black rounded-2xl p-6 group transition-all duration-300 hover:shadow-2xl hover:shadow-[#A3FF12]/20 hover:-translate-y-2 relative">
    <div className="absolute top-4 right-4 bg-green-100 p-2 rounded-full">
        <UserIcon className="w-5 h-5 text-[#A3FF12]" />
    </div>
    <div className="flex items-center space-x-4">
      <img src={member.imageUrl} alt={member.name} className="w-16 h-16 rounded-full" />
      <div>
        <h3 className="font-bold text-lg">{member.name}</h3>
        <p className="text-sm text-gray-600">{member.role}</p>
      </div>
    </div>
  </div>
);

const Team: React.FC = () => {
  return (
    <section className="py-12 md:py-24">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Meet our <span className="text-black bg-[#A3FF12] px-2 py-1 rounded-md">Expertenteam</span>
        </h2>
        <Link 
            href="/ueber-uns"
            className="hidden sm:inline-flex items-center space-x-2 bg-gray-800 text-white font-semibold px-5 py-3 rounded-full hover:bg-gray-700 transition-colors"
        >
            <span>Alle ansehen</span>
            <ArrowRightIcon className="w-5 h-5"/>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamData.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </div>
       <div className="mt-8 text-center sm:hidden">
         <Link
            href="/ueber-uns"
            className="inline-flex items-center space-x-2 bg-gray-800 text-white font-semibold px-5 py-3 rounded-full hover:bg-gray-700 transition-colors"
        >
            <span>Alle ansehen</span>
            <ArrowRightIcon className="w-5 h-5"/>
        </Link>
      </div>
    </section>
  );
};

export default Team;
