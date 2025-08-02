import type { NewsArticle } from '@/types';
import Link from 'next/link';

const newsData: NewsArticle[] = [
    { title: 'NexusConnect startet strategische Partnerschaft mit TechCorp', date: '15. Juli 2024', category: 'Partnerschaft', imageUrl: 'https://picsum.photos/seed/news1/600/400', link: '#' },
    { title: 'Der Stand des FTTH-Ausbaus in Deutschland 2024', date: '02. Juli 2024', category: 'Markt-Analyse', imageUrl: 'https://picsum.photos/seed/news2/600/400', link: '#' },
    { title: 'Wie KI den B2B-Vertrieb revolutioniert', date: '28. Juni 2024', category: 'KI & Marketing', imageUrl: 'https://picsum.photos/seed/news3/600/400', link: '#' },
    { title: 'NexusConnect expandiert und eröffnet neuen Standort in Hamburg', date: '10. Juni 2024', category: 'Unternehmen', imageUrl: 'https://picsum.photos/seed/news4/600/400', link: '#' },
    { title: 'Erfolgsstudie: 30% mehr Abschlüsse im FTTH-Projekt "Musterstadt"', date: '25. Mai 2024', category: 'Fallstudie', imageUrl: 'https://picsum.photos/seed/news5/600/400', link: '#' },
    { title: 'Unser Team wächst: Wir begrüßen neue Experten an Bord', date: '12. Mai 2024', category: 'Karriere', imageUrl: 'https://picsum.photos/seed/news6/600/400', link: '#' },
];

const NewsCard: React.FC<{ article: NewsArticle }> = ({ article }) => {
    return (
        <div className="bg-[#111111] rounded-2xl overflow-hidden group flex flex-col">
            <div className="overflow-hidden">
                 <img src={article.imageUrl} alt={article.title} className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm text-[#A3FF12] font-semibold">{article.category}</p>
                <h3 className="text-xl font-bold mt-2 text-white flex-grow">{article.title}</h3>
                <p className="text-xs text-gray-500 mt-4">{article.date}</p>
                 <Link href={article.link} className="mt-4 font-semibold text-gray-300 hover:text-white self-start">
                    Weiterlesen &rarr;
                </Link>
            </div>
        </div>
    );
};

const NewsPage = () => {
    return (
        <div className="py-12 md:py-24 pt-32 animate-fade-in px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-white">
                    Neuigkeiten & Presse
                </h1>
                <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                    Bleiben Sie auf dem Laufenden über die neuesten Entwicklungen bei NexusConnect, Einblicke in die Branche und wichtige Ankündigungen.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsData.map((article, index) => (
                    <NewsCard key={index} article={article} />
                ))}
            </div>
        </div>
    );
};

export default NewsPage;
