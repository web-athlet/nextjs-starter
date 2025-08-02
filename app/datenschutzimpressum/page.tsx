import React from 'react';

const DatenschutzImpressumPage = () => {
    return (
        <div className="py-12 md:py-24 pt-32 animate-fade-in px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-white">
                        Datenschutz & Impressum
                    </h1>
                </div>

                <div className="bg-[#111111] rounded-2xl p-8 md:p-12 space-y-12">
                    <section id="impressum">
                        <h2 className="text-3xl font-bold text-white mb-4">Impressum</h2>
                        <div className="prose prose-invert text-gray-300 max-w-none">
                            <p>Angaben gemäß § 5 TMG:</p>
                            <p>
                                NexusConnect GmbH<br />
                                Musterstraße 1<br />
                                10115 Berlin
                            </p>
                            <p>
                                <strong>Vertreten durch:</strong><br />
                                Dr. Anna Schmidt (Geschäftsführerin)
                            </p>
                            <p>
                                <strong>Kontakt:</strong><br />
                                Telefon: +49 (0)30 123 456 78<br />
                                E-Mail: kontakt@nexusconnect.de
                            </p>
                            <p>
                                <strong>Registereintrag:</strong><br />
                                Eintragung im Handelsregister.<br />
                                Registergericht: Amtsgericht Charlottenburg<br />
                                Registernummer: HRB 123456 B
                            </p>
                            <p>
                                <strong>Umsatzsteuer-ID:</strong><br />
                                Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
                                DE123456789
                            </p>
                        </div>
                    </section>
                    
                    <div className="border-t border-gray-700"></div>

                    <section id="datenschutz">
                        <h2 className="text-3xl font-bold text-white mb-4">Datenschutzerklärung</h2>
                        <div className="prose prose-invert text-gray-300 max-w-none">
                            <p>
                                Wir legen größten Wert auf den Schutz Ihrer Daten und die Wahrung Ihrer Privatsphäre. Nachstehend informieren wir Sie deshalb über die Erhebung und Verwendung persönlicher Daten bei Nutzung unserer Webseite.
                            </p>
                            <h3 className="text-xl font-semibold text-white">Verantwortliche Stelle</h3>
                            <p>
                                Verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist die NexusConnect GmbH, Musterstraße 1, 10115 Berlin.
                            </p>
                            <h3 className="text-xl font-semibold text-white">Ihre Rechte</h3>
                             <p>
                                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.
                            </p>
                             <p>
                                Dies ist ein Platzhaltertext. Eine vollständige und rechtsgültige Datenschutzerklärung sollte von einem juristischen Fachmann erstellt werden.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default DatenschutzImpressumPage;
