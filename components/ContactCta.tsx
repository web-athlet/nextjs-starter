
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const ContactCta: React.FC = () => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/kontakt');
  };

  return (
    <section className="py-12 md:py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center bg-[#111111] rounded-3xl p-8 sm:p-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-black leading-tight">
            Get in Touch Today!
          </h2>
          <p className="mt-4 text-gray-400">
            Wir sind bereit, Ihre Vision in die Realität umzusetzen. Lassen Sie uns gemeinsam herausfinden, wie wir Ihr Unternehmen voranbringen können.
          </p>
          <form className="mt-8 flex flex-col sm:flex-row gap-4" onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full bg-black border border-gray-700 rounded-full px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#A3FF12]"
              aria-label="Enter your email"
            />
            <button type="submit" className="bg-[#A3FF12] text-black font-bold rounded-full px-8 py-4 flex-shrink-0 hover:brightness-110 transition">
              <span>Schedule a Call</span>
            </button>
          </form>
        </div>
        <div className="hidden lg:flex justify-center">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=388&auto=format&fit=crop" alt="Woman ready to connect" className="w-full max-w-sm h-auto object-cover rounded-2xl"/>
        </div>
      </div>
    </section>
  );
};

export default ContactCta;
