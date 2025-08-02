import Link from 'next/link';
import { ArrowRightIcon } from '@/components/icons';

const NotFoundPage = () => {
    return (
        <div className="py-20 md:py-40 text-center flex flex-col items-center justify-center animate-fade-in px-4 sm:px-6 lg:px-8">
            <h1 className="text-8xl md:text-9xl font-black text-[#A3FF12]">404</h1>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white">Seite nicht gefunden</h2>
            <p className="mt-4 text-gray-400 max-w-md">
                Entschuldigung, wir konnten die gesuchte Seite nicht finden. Sie wurde möglicherweise verschoben oder gelöscht.
            </p>
            <Link href="/" className="mt-8 bg-[#A3FF12] text-black font-bold rounded-full px-8 py-4 inline-flex items-center justify-center space-x-2 hover:brightness-110 transition">
                <span>Zurück zur Startseite</span>
                <ArrowRightIcon className="w-5 h-5" />
            </Link>
        </div>
    );
};

export default NotFoundPage;
