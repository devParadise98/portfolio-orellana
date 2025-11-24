import React from 'react';

const Education: React.FC = () => {
    return (
        <section id="education" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    My <span className="text-primary">Education</span>
                </h2>

                <div className="max-w-3xl mx-auto">
                    <div className="bg-light-gray rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center gap-6 hover:shadow-lg transition-shadow duration-300">
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-bold text-gray-900">Universidad Tecnológica del Perú</h3>
                            <p className="text-lg text-primary font-semibold mt-2">Ingeniería de Sistemas</p>
                            <p className="text-gray-600 mt-2">Titulada - Décimo Superior</p>
                        </div>
                        <div className="bg-white px-6 py-3 rounded-full shadow-sm">
                            <span className="font-bold text-gray-900">2015 - 2020</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
