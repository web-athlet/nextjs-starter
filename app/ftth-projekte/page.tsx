import { ArrowRightIcon } from '@/components/icons';
import Link from 'next/link';

const ServiceStep: React.FC<{ number: string; title: string; children: React.ReactNode }> = ({ number, title, children }) => (
    <div className="flex">
        <div className="flex flex-col items-center mr-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#A3FF12] text-black flex items-center justify-center font-bold text-xl">{number}</div>
            <div className="w-px h-full bg-gray-600"></div>
        </div>
        <div className="pb-8">
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-300">{children}</p>
        </div>
    </div>
);


const FtthPage = () => {
  return (
    <div className="py-12 md:py-24 pt-32 animate-fade-in px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-white">
          FTTH Beratung & Vertrieb
        </h1>
        <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
          Wir sind Ihr Spezialist für den erfolgreichen Glasfaserausbau. Von der strategischen Planung bis zur Vermarktung bieten wir ganzheitliche Lösungen, die auf Effizienz und Erfolg ausgerichtet sind.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
            <h2 className="text-3xl font-bold text-white mb-4">Unser Prozess für Ihren Erfolg</h2>
            <div className="mt-8">
                <ServiceStep number="1" title="Strategische Analyse & Planung">
                    Wir analysieren Ihr Ausbaugebiet, identifizieren Potenziale und entwickeln eine passgenaue Vertriebsstrategie für eine maximale Vorvermarktungsquote.
                </ServiceStep>
                <ServiceStep number="2" title="Digitaler & persönlicher Vertrieb">
                    Durch einen Mix aus gezielten Online-Marketing-Kampagnen und dem Einsatz unserer geschulten Vertriebsteams vor Ort erreichen wir Ihre Zielgruppe effektiv und überzeugend.
                </ServiceStep>
                <ServiceStep number="3" title="Partner- & Community-Management">
                    Wir binden lokale Multiplikatoren und die Community aktiv ein, um Vertrauen zu schaffen und die Akzeptanz für Ihr FTTH-Projekt zu steigern.
                </ServiceStep>
                 <div className="flex">
                    <div className="flex flex-col items-center mr-6">
                         <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-800 border-2 border-[#A3FF12] text-[#A3FF12] flex items-center justify-center font-bold text-xl">&#10003;</div>
                    </div>
                    <div className="pt-2">
                        <h3 className="text-xl font-bold text-white">Projektabschluss & Reporting</h3>
                    </div>
                </div>
            </div>
        </div>
        <div className="relative h-[500px] hidden md:block">
            <img src="https://picsum.photos/seed/fiber-optic/600/800" alt="Glasfaser-Technologie" className="w-full h-full object-cover rounded-2xl"/>
             <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>
      </div>
      
       <div className="mt-24 text-center">
            <h2 className="text-3xl font-bold text-white">Starten Sie Ihr FTTH-Projekt mit uns</h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">Kontaktieren Sie uns für eine unverbindliche Erstberatung und erfahren Sie, wie wir Ihren Glasfaserausbau zum Erfolg führen.</p>
            <Link href="/kontakt" className="mt-8 bg-[#A3FF12] text-black font-bold rounded-full px-8 py-4 inline-flex items-center justify-center space-x-2 hover:brightness-110 transition">
                <span>Beratungsgespräch anfordern</span>
                <ArrowRightIcon className="w-5 h-5" />
            </Link>
        </div>

    </div>
  );
};

export default FtthPage;
