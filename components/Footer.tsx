
import React from 'react';
import { LightBulbIcon, SocialIcons } from './icons';
import Link from 'next/link';

const FooterLink: React.FC<{ path: string, children: React.ReactNode }> = ({ path, children }) => {
    return (
        <li><Link href={path} className="hover:underline text-left text-black hover:text-gray-800 transition-colors">{children}</Link></li>
    );
};


const Footer: React.FC = () => {
  return (
    <footer className="bg-[#A3FF12] text-black mt-12 rounded-t-[40px]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-12">
                <div className="col-span-2 md:col-span-1">
                    <Link href="/" className="flex items-center space-x-2">
                      <LightBulbIcon className="text-black h-8 w-8" />
                      <span className="text-2xl font-bold">NexusConnect</span>
                    </Link>
                    <p className="mt-4 text-sm text-gray-900">
                        Digitale Lösungen, die verbinden und wachsen.
                    </p>
                </div>

                <div>
                    <h4 className="font-bold text-lg text-black">Leistungen</h4>
                    <ul className="mt-4 space-y-2 text-sm">
                        <FooterLink path="/leistungen-unternehmen">Für Unternehmen</FooterLink>
                        <FooterLink path="/ftth-projekte">FTTH-Beratung</FooterLink>
                        <FooterLink path="/marketing-und-ki">Marketing & KI</FooterLink>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-lg text-black">Unternehmen</h4>
                    <ul className="mt-4 space-y-2 text-sm">
                        <FooterLink path="/ueber-uns">Über Uns</FooterLink>
                        <FooterLink path="/karriere">Karriere</FooterLink>
                        <FooterLink path="/news">News</FooterLink>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-lg text-black">Rechtliches</h4>
                    <ul className="mt-4 space-y-2 text-sm">
                        <FooterLink path="/datenschutzimpressum">Impressum</FooterLink>
                        <FooterLink path="/datenschutzimpressum">Datenschutz</FooterLink>
                        <FooterLink path="/kontakt">Kontakt</FooterLink>
                    </ul>
                </div>
                 <div className="col-span-2 md:col-span-1">
                    <h4 className="font-bold text-lg text-black">Folgen Sie uns</h4>
                     <div className="mt-4">
                        <SocialIcons className="text-gray-800" />
                     </div>
                </div>
            </div>
            <div className="mt-12 pt-8 border-t border-black/20 flex flex-col sm:flex-row justify-between items-center">
                <p className="text-sm text-black/80 text-center sm:text-left mb-4 sm:mb-0">
                    &copy; {new Date().getFullYear()} NexusConnect. Alle Rechte vorbehalten.
                </p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
