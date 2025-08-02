'use client';

import React from 'react';
import { ArrowRightIcon, MailIcon, PhoneIcon, LocationMarkerIcon } from '@/components/icons';

const KontaktPage = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // A real form would submit data to a server here.
        alert('Vielen Dank für Ihre Nachricht! Wir werden uns in Kürze bei Ihnen melden.');
    };

    return (
        <div className="py-12 md:py-24 pt-32 animate-fade-in px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-white">Kontakt</h1>
                <p className="mt-4 text-gray-300 max-w-2xl mx-auto">Wir sind hier, um zu helfen und alle Fragen zu beantworten, die Sie haben könnten. Wir freuen uns, von Ihnen zu hören.</p>
            </div>
            <div className="bg-[#111111] rounded-3xl p-8 sm:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight text-white">
                            Senden Sie uns eine Nachricht
                        </h2>
                        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input type="text" placeholder="Ihr Name" aria-label="Ihr Name" required className="w-full bg-black border border-gray-700 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#A3FF12]" />
                                <input type="email" placeholder="Ihre E-Mail" aria-label="Ihre E-Mail" required className="w-full bg-black border border-gray-700 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#A3FF12]" />
                            </div>
                            <textarea placeholder="Ihre Nachricht" aria-label="Ihre Nachricht" rows={5} required className="w-full bg-black border border-gray-700 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#A3FF12]"></textarea>
                            <button type="submit" className="bg-[#A3FF12] text-black font-bold rounded-full px-8 py-4 flex-shrink-0 flex items-center justify-center space-x-2 hover:brightness-110 transition">
                                <span>Nachricht senden</span>
                                <ArrowRightIcon className="w-5 h-5" />
                            </button>
                        </form>
                    </div>
                    <div className="lg:pl-8">
                        <h3 className="text-2xl font-bold text-white">Kontaktinformationen</h3>
                        <ul className="mt-6 space-y-6 text-gray-300">
                            <li className="flex items-start">
                                <MailIcon className="w-6 h-6 text-[#A3FF12] mr-4 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-white">Email</h4>
                                    <a href="mailto:kontakt@nexusconnect.de" className="hover:text-[#A3FF12] break-all">kontakt@nexusconnect.de</a>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <PhoneIcon className="w-6 h-6 text-[#A3FF12] mr-4 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-white">Telefon</h4>
                                    <a href="tel:+493012345678" className="hover:text-[#A3FF12]">(030) 123 456 78</a>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <LocationMarkerIcon className="w-6 h-6 text-[#A3FF12] mr-4 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-white">Adresse</h4>
                                    <p>Musterstraße 1, 10115 Berlin</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KontaktPage;
