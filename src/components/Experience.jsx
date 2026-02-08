import { Briefcase } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            role: 'Software Engineer Intern',
            company: 'PrintedMana',
            location: 'Honolulu, HI',
            period: 'June 2025 - Present',
            description: 'Fine-tuned a Yolo v7 computer vision model with Pytorch for construction site analytics. Engineered a Python-based Generative AI solution to interpret zoning regulations, automating customer advisory workflows.'
        },
        {
            role: 'Venture Capital Analyst Intern',
            company: 'Blue Startups',
            location: 'Honolulu, HI',
            period: 'April 2025 - August 2025',
            description: 'Assisted with deployment of $175k in Pre-seed funding. Conducted market competition research and financial analysis to rank 500+ applicants. Analyzed fund performance data for LP reports.'
        },
        {
            role: 'Chief Financial Officer',
            company: 'Whitman Investment Company',
            location: 'Walla Walla, WA',
            period: 'August 2023 - December 2025',
            description: 'Managed $2M+ endowment portfolio using data-driven tools. Communicated financial strategies to stakeholders through 30+ presentations.'
        },
        {
            role: 'Software Engineer Intern',
            company: 'FC Hawaii',
            location: 'Honolulu, HI',
            period: 'May 2023 - August 2023',
            description: 'Spearheaded biomechanical analysis application using TensorFlow for object detection and pose estimation.'
        }
    ];

    return (
        <section id="experience" className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Experience</h2>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative pl-8 border-l-2 border-blue-100 last:border-0">
                            <div className="absolute top-0 left-[-9px] bg-blue-600 rounded-full p-1 text-white">
                                <Briefcase size={14} />
                            </div>

                            <div className="mb-1 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                                <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                                    {exp.period}
                                </span>
                            </div>

                            <div className="mb-2">
                                <span className="text-lg font-medium text-blue-600">{exp.company}</span>
                                <span className="text-slate-500 text-sm ml-2">• {exp.location}</span>
                            </div>

                            <p className="text-slate-600 leading-relaxed max-w-2xl">
                                {exp.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
