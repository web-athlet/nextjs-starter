import Stats from '@/components/Stats';
import Team from '@/components/Team';
import Masterpieces from '@/components/Masterpieces';
import SloganBanner from '@/components/SloganBanner';

const UeberUnsPage = () => {
  return (
    <div className="pt-32 animate-fade-in px-4 sm:px-6 lg:px-8">
      <div className="py-12 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-white">
            Wer wir sind
          </h1>
          <p className="mt-4 text-gray-400 max-w-3xl mx-auto">
            NexusConnect ist Ihr strategischer Partner für die digitale Transformation. Wir sind ein Team aus Vordenkern, Strategen und Machern, die sich der Aufgabe verschrieben haben, komplexe Herausforderungen in messbare Erfolge zu verwandeln.
          </p>
        </div>
        
        <Masterpieces 
            title={<>Unsere Mission & <span className="text-[#A3FF12]">Vision</span></>}
            description="Wir befähigen Unternehmen, die Chancen der Digitalisierung voll auszuschöpfen. Durch innovative Beratung und maßgeschneiderte Lösungen schaffen wir nachhaltiges Wachstum und Wettbewerbsvorteile für unsere Kunden. Unsere Vision ist es, der führende Anbieter für digitale Vertriebs- und Marketinglösungen zu sein."
            image1="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1032&auto=format&fit=crop"
            image2="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=774&auto=format&fit=crop"
          />

        <Stats />
        <Team />
        <SloganBanner />
      </div>
    </div>
  );
};

export default UeberUnsPage;
