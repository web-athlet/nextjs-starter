import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import ContactCta from '@/components/ContactCta';
import Masterpieces from '@/components/Masterpieces';
import Services from '@/components/Services';
import SloganBanner from '@/components/SloganBanner';

const HomePage = () => {
  return (
    <>
      <Hero />
      <div className="bg-[#0D0D0D] text-white">
        <div className="max-w-[1400px] mx-auto">
          <Stats />
          <div className="px-4 sm:px-6 lg:px-8">
            <Masterpieces 
              title={<>Ideen in <span className="text-[#A3FF12]">Meisterwerke</span> verwandeln</>}
              description="Wir sind vielleicht ein kompaktes Team, aber unsere Kreativität kennt keine Grenzen. Indem wir agil bleiben und Hand in Hand mit unseren Kunden arbeiten, verwandeln wir Ideen in innovative Designs, die einen bleibenden Eindruck hinterlassen."
              image1="https://images.unsplash.com/photo-1522071820081-009f0129c7da?q=80&w=870&auto=format&fit=crop"
              image2="https://images.unsplash.com/photo-1517502884422-41ea045b2363?q=80&w=387&auto=format&fit=crop"
              tagText="KREATIVE DESIGN AGENTUR"
            />
            <Services />
          </div>
          <SloganBanner />
          <div className="px-4 sm:px-6 lg:px-8">
            <Team />
            <Testimonials />
            <ContactCta />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
