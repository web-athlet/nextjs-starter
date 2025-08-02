import { ArrowRightIcon } from '@/components/icons';
import Link from 'next/link';

const FeatureCard: React.FC<{ title: string; children: React.ReactNode; icon: React.ReactNode }> = ({ title, children, icon }) => (
  <div className="bg-[#111111] p-6 rounded-lg">
    <div className="flex items-center space-x-4 mb-4">
      <div className="bg-[#A3FF12] p-3 rounded-full">{icon}</div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <p className="text-gray-300">{children}</p>
  </div>
);

const MarketingKiPage = () => {
  return (
    <div className="py-12 md:py-24 pt-32 animate-fade-in px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-white">
          Marketing- & KI-Services
        </h1>
        <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
          Nutzen Sie die Kraft von künstlicher Intelligenz und datengesteuertem Marketing, um Ihre Prozesse zu automatisieren, personalisierte Kundenerlebnisse zu schaffen und Ihren Umsatz zu maximieren.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard title="Intelligente Automatisierung" icon={<svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>}>
          Wir automatisieren Ihre Marketing- und Vertriebsprozesse, von der Lead-Generierung bis zur Kundenbindung, damit Sie sich auf das Wesentliche konzentrieren können.
        </FeatureCard>
        <FeatureCard title="Datengetriebene Strategien" icon={<svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5z"></path></svg>}>
          Auf Basis von Big-Data-Analysen und KI-Modellen entwickeln wir präzise Marketingstrategien, die Ihre Zielgruppe optimal ansprechen und die Conversion Rate erhöhen.
        </FeatureCard>
        <FeatureCard title="Personalisierte Erlebnisse" icon={<svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>}>
          Schaffen Sie einzigartige Kundenerlebnisse durch KI-gestützte Personalisierung. Wir helfen Ihnen, jeden Kunden individuell und zum richtigen Zeitpunkt anzusprechen.
        </FeatureCard>
      </div>
      
      <div className="mt-24 bg-[#111111] rounded-2xl p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <img src="https://picsum.photos/seed/ai-future/800/600" alt="Abstrakte Darstellung von künstlicher Intelligenz" className="rounded-2xl w-full h-full object-cover"/>
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Die Zukunft des Marketings ist jetzt</h2>
              <p className="text-gray-300 mb-6">
                  In einer Welt, in der Kunden mehr erwarten als nur Werbung, sind KI und Automatisierung der Schlüssel zum Erfolg. Sie ermöglichen es, effizienter zu arbeiten, bessere Entscheidungen zu treffen und echte Beziehungen zu Ihren Kunden aufzubauen. Lassen Sie uns gemeinsam Ihr Marketing auf das nächste Level heben.
              </p>
              <Link href="/kontakt" className="bg-[#A3FF12] text-black font-bold rounded-full px-8 py-4 inline-flex items-center justify-center space-x-2 hover:brightness-110 transition">
                  <span>Strategiegespräch vereinbaren</span>
                  <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
        </div>
      </div>

    </div>
  );
};

export default MarketingKiPage;
