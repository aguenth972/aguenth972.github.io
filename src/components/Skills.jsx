const Skills = () => {
    const skillCategories = [
        {
            title: 'Languages',
            skills: ['Python', 'C++', 'C', 'R', 'JavaScript', 'HTML/CSS']
        },
        {
            title: 'Libraries & Tools',
            skills: ['Numpy', 'PyTorch', 'TensorFlow', 'Pandas', 'Scikit-Learn', 'React', 'Tailwind CSS']
        },
        {
            title: 'Concepts & Cloud',
            skills: ['API Development', 'Google Cloud Platform', 'OOP', 'Data Structures', 'Business Analytics', 'Machine Learning']
        }
    ];

    return (
        <section id="skills" className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Skills</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h3 className="text-lg font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">
                                {category.title}
                            </h3>
                            <ul className="space-y-2">
                                {category.skills.map((skill) => (
                                    <li key={skill} className="flex items-center text-slate-700">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
