import { ArrowRightIcon } from '@/components/icons';
import Link from 'next/link';

const JobOpening: React.FC<{ title: string, location: string, type: string }> = ({ title, location, type }) => (
    <div className="bg-[#111111] p-6 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="text-gray-400 mt-1">{location} &middot; {type}</p>
        </div>
        <Link href="/kontakt" className="bg-[#A3FF12] text-black font-semibold rounded-full px-6 py-2 whitespace-nowrap hover:brightness-110 transition-colors flex-shrink-0">
            Bewerben
        </Link>
    </div>
);

const KarrierePage = () => {
  return (
    <div className="py-12 md:py-24 pt-32 animate-fade-in px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-white">
          Werden Sie Teil von NexusConnect
        </h1>
        <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
          Wir sind immer auf der Suche nach talentierten und motivierten Menschen, die mit uns die Zukunft der digitalen Beratung gestalten wollen. Entdecken Sie Ihre Möglichkeiten bei uns.
        </p>
      </div>

      <div className="bg-[#111111] rounded-2xl p-8 md:p-12 mb-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Aktuelle Stellenangebote</h2>
        <div className="space-y-6 max-w-4xl mx-auto">
            <JobOpening title="Senior Sales Manager (m/w/d)" location="Bundesweit" type="Vollzeit" />
            <JobOpening title="Junior Marketing Specialist (m/w/d)" location="Berlin / Remote" type="Vollzeit" />
            <JobOpening title="FTTH-Consultant (m/w/d)" location="Region Süd" type="Vollzeit" />
             <p className="text-center text-gray-400 pt-4">Nichts Passendes dabei? Wir freuen uns auch über Ihre Initiativbewerbung!</p>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
            <h2 className="text-3xl font-bold text-white mb-4">Karriere als Quereinsteiger oder Partner</h2>
            <p className="text-gray-300 mb-4">
                Sie haben Vertriebstalent und möchten in einer zukunftssicheren Branche durchstarten? Wir bieten ambitionierten Quereinsteigern und selbstständigen Vertriebspartnern eine einzigartige Chance. Profitieren Sie von unserem Know-how, erstklassigen Produkten und einem attraktiven Provisionsmodell.
            </p>
            <p className="text-gray-300">
                Gestalten Sie Ihre Zukunft selbst und werden Sie Teil unseres Erfolgsnetzwerks. Wir unterstützen Sie mit Schulungen und Materialien, damit Sie sofort durchstarten können.
            </p>
             <Link href="/kontakt" className="mt-8 bg-transparent border border-[#A3FF12] text-[#A3FF12] font-bold rounded-full px-8 py-4 inline-flex items-center justify-center space-x-2 hover:bg-[#A3FF12] hover:text-black transition">
                <span>Partner werden</span>
                <ArrowRightIcon className="w-5 h-5" />
            </Link>
        </div>
        <img src="https://picsum.photos/seed/career-path/800/600" alt="Ein Weg, der eine Karriere symbolisiert" className="rounded-2xl w-full h-full object-cover"/>
      </div>

    </div>
  );
};

export default KarrierePage;
