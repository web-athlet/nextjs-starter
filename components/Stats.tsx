
import React from 'react';

const statsData = [
  { value: "500+", label: "Erfolgreiche Projekte" },
  { value: "100+", label: "Strategische Partner" },
  { value: "98%", label: "Kundenzufriedenheit" },
  { value: "10+", label: "Jahre Erfahrung" },
];

const Stats: React.FC = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="bg-black rounded-3xl p-8 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl md:text-5xl font-black text-white">{stat.value}</p>
              <p className="mt-2 text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;