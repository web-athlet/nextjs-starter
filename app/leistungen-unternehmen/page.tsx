import { ArrowRightIcon } from '@/components/icons';
import Link from 'next/link';

const LeistungenUnternehmenPage = () => {
  return (
    <div className="py-12 md:py-24 pt-32 animate-fade-in px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-white">
          Leistungen für Unternehmen
        </h1>
        <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
          Wir bieten maßgeschneiderte B2B-Lösungen, die darauf ausgelegt sind, Ihre Marketing- und Vertriebsziele zu übertreffen und nachhaltige Partnerschaften zu schaffen.
        </p>
      </div>

      <div className="space-y-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img src="https://picsum.photos/seed/b2b-marketing/800/600" alt="Professionelles Marketing" className="rounded-2xl w-full h-full object-cover order-last md:order-first"/>
          <div className="md:pl-8">
            <h2 className="text-3xl font-bold text-white mb-4">Strategisches B2B-Marketing</h2>
            <p className="text-gray-300 mb-4">
              Unser Ansatz für B2B-Marketing geht über traditionelle Methoden hinaus. Wir entwickeln datengestützte Kampagnen, die qualifizierte Leads generieren und Ihre Marke als Branchenführer positionieren. Von Content-Marketing bis hin zu Account-Based-Strategien – wir schaffen Relevanz und Resonanz bei Ihrer Zielgruppe.
            </p>
            <ul className="text-gray-300 space-y-2 list-disc list-inside">
              <li>Lead-Generierung und -Nurturing</li>
              <li>Content-Erstellung und -Distribution</li>
              <li>Digitale Werbekampagnen (LinkedIn, Google Ads)</li>
              <li>Aufbau von Marketing-Funnels</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Vertriebspartnerprogramme</h2>
            <p className="text-gray-300 mb-4">
              Skalieren Sie Ihren Vertrieb durch starke Partnerschaften. Wir konzipieren, implementieren und managen erfolgreiche Vertriebspartnerprogramme, die neue Märkte erschließen und Ihren Umsatz steigern. Wir kümmern uns um die Rekrutierung, das Onboarding und die kontinuierliche Betreuung Ihrer Partner.
            </p>
             <ul className="text-gray-300 space-y-2 list-disc list-inside">
              <li>Konzeption von Partner-Modellen</li>
              <li>Rekrutierung und Onboarding</li>
              <li>Bereitstellung von Vertriebsmaterialien</li>
              <li>Performance-Tracking und -Optimierung</li>
            </ul>
          </div>
          <img src="https://picsum.photos/seed/partnership/800/600" alt="Händedruck zwischen Geschäftspartnern" className="rounded-2xl w-full h-full object-cover"/>
        </div>
      </div>
       <div className="mt-24 text-center">
            <h2 className="text-3xl font-bold text-white">Sind Sie bereit für den nächsten Schritt?</h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">Lassen Sie uns besprechen, wie wir Ihr Unternehmen mit unseren maßgeschneiderten Lösungen unterstützen können.</p>
            <Link href="/kontakt" className="mt-8 bg-[#A3FF12] text-black font-bold rounded-full px-8 py-4 inline-flex items-center justify-center space-x-2 hover:brightness-110 transition">
                <span>Jetzt anfragen</span>
                <ArrowRightIcon className="w-5 h-5" />
            </Link>
        </div>
    </div>
  );
};

export default LeistungenUnternehmenPage;
