import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'Nuclear Market Volatility Research',
            description: 'Conducted quantitative analysis on nuclear equities using a multivariate VAR model in R to identify market anomalies and volatility drivers.',
            tech: ['R', 'VAR', 'ADF Testing', 'Quantitative Analysis'],
            link: '#'
        },
        {
            title: 'Wifi Sensing Fall Detection',
            description: 'Experimented with CSI and RSSI data using ESP-32 and custom firmware to apply ML models capable of detecting human falls.',
            tech: ['C++', 'Python', 'NumPy', 'Espressif', 'Machine Learning'],
            link: '#'
        },
        {
            title: 'StockTrack Bot',
            description: 'Developed automation scripts in Python using Playwright to test and execute trading strategies, simulating real-world infrastructure automation.',
            tech: ['Python', 'Playwright', 'Automation', 'Trading Strategies'],
            link: '#'
        }
    ];

    return (
        <section id="projects" className="py-20 bg-slate-50">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-slate-100 flex flex-col">
                            <div className="p-6 flex-grow">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                        {project.title}
                                    </h3>
                                    <a href={project.link} className="text-slate-400 hover:text-slate-900">
                                        <Github size={20} />
                                    </a>
                                </div>

                                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="mt-auto flex flex-wrap gap-2">
                                    {project.tech.map((tag) => (
                                        <span key={tag} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-md font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
