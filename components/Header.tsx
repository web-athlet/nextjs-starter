
'use client';

import React, { useState, useEffect } from 'react';
import { LightBulbIcon, HamburgerIcon, XIcon } from './icons';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

const Header: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isHomePage = pathname === '/';

  const navLinksLeft = [
    { name: "Über Uns", path: "/ueber-uns" },
    { name: "Leistungen", path: "/leistungen-unternehmen" },
  ];
  
  const navLinksRight = [
    { name: "Karriere", path: "/karriere" },
    { name: "News", path: "/news" },
  ];
  
  const allNavLinks = [...navLinksLeft, ...navLinksRight];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleMobileLinkClick = (path: string) => {
    router.push(path);
    setIsMobileMenuOpen(false);
  };

  const headerBaseClasses = "fixed top-0 left-0 right-0 z-50 transition-all duration-300";
  let headerDynamicClasses = "";
  let navLinkColor = "";
  let logoColor = "";
  let mobileIconColor = "";

  if (isHomePage) {
    if (isScrolled) {
      headerDynamicClasses = "py-4 bg-black/80 backdrop-blur-lg";
      navLinkColor = "text-gray-300 hover:text-white";
      logoColor = "text-white";
      mobileIconColor = "text-white";
    } else {
      headerDynamicClasses = "py-6 bg-transparent";
      navLinkColor = "text-gray-600 hover:text-black";
      logoColor = "text-black";
      mobileIconColor = "text-black";
    }
  } else {
     headerDynamicClasses = "py-4 bg-black";
     navLinkColor = "text-gray-300 hover:text-white";
     logoColor = "text-white";
     mobileIconColor = "text-white";
  }

  return (
    <>
      <header className={`${headerBaseClasses} ${headerDynamicClasses}`} role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-full">
            
            <div className="flex-1 flex justify-start">
              <nav className="hidden md:flex items-center space-x-2" aria-label="Main navigation left">
                {navLinksLeft.map((link) => (
                  <Link key={link.name} href={link.path} className={`text-sm font-medium ${navLinkColor} transition-colors px-4 py-2 rounded-full`}>
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
            
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-2" aria-label="NexusConnect Home">
                <LightBulbIcon className="text-[#A3FF12] h-7 w-7" />
                <span className={`text-xl font-bold ${logoColor} transition-colors`}>NexusConnect</span>
              </Link>
            </div>
            
            <div className="flex-1 flex justify-end items-center">
              <nav className="hidden md:flex items-center space-x-2" aria-label="Main navigation right">
                {navLinksRight.map((link) => (
                  <Link key={link.name} href={link.path} className={`text-sm font-medium ${navLinkColor} transition-colors px-4 py-2 rounded-full`}>
                    {link.name}
                  </Link>
                ))}
                <Link href="/kontakt" className="bg-[#A3FF12] text-black rounded-full px-5 py-2 text-sm font-bold hover:brightness-110 transition-all ml-4">
                  Kontakt
                </Link>
              </nav>
              
              <div className="md:hidden">
                <button onClick={() => setIsMobileMenuOpen(true)} className={`${mobileIconColor} p-2`} aria-label="Open mobile menu">
                  <HamburgerIcon className="w-6 h-6" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#0D0D0D]/95 backdrop-blur-lg z-50 flex flex-col items-center justify-center animate-fade-in" role="dialog" aria-modal="true">
            <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-6 right-6 text-gray-400 hover:text-white p-2" aria-label="Close mobile menu">
                <XIcon className="w-8 h-8"/>
            </button>
            <nav className="flex flex-col items-center gap-6">
                {allNavLinks.map(link => (
                    <button key={link.path} onClick={() => handleMobileLinkClick(link.path)} className="text-3xl font-bold text-gray-300 hover:text-[#A3FF12] transition-colors">
                        {link.name}
                    </button>
                ))}
                 <button onClick={() => handleMobileLinkClick('/kontakt')} className="mt-6 bg-[#A3FF12] text-black rounded-full px-8 py-4 text-xl font-bold hover:brightness-110 transition-all">
                    Kontakt
                </button>
            </nav>
        </div>
      )}
    </>
  );
};

export default Header;
