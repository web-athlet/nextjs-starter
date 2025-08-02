export function FeaturesSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12">
      <Feature title="Modern" description="Next.js 14 App Router + Tailwind CSS" />
      <Feature title="Skalierbar" description="Saubere Code-Struktur und Wiederverwendbarkeit" />
      <Feature title="Effizient" description="Optimiert für Performance & SEO" />
    </section>
  );
}

function Feature({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6 bg-white rounded-2xl shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}