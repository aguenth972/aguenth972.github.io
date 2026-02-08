const About = () => {
    return (
        <section id="about" className="py-20 bg-slate-50">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">About Me</h2>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        I am a Computer Science major at <span className="font-semibold text-blue-600">Whitman College</span>, with a 3.96 GPA and minors in Finance and Economics. I am also a student athlete, competing on the Whitman Men's Soccer team. I am on track to graduate in the Spring of 2027.
                    </p>

                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        My passion lies at the intersection of technology and finance. I enjoy building software solutions that solve real-world problems, from computer vision models for construction analytics to financial modeling tools.
                    </p>

                    <p className="text-lg text-slate-700 leading-relaxed">
                        With experience in software engineering internships and venture capital analysis, I bring a unique perspective that combines technical depth with business acumen. I am constantly learning new technologies and looking for opportunities to apply my skills in challenging environments.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
