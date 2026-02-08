import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
            <div className="text-center max-w-4xl mx-auto px-4">
                <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
                    Hi, I'm <span className="text-blue-600">Aiden Guenther</span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto">
                    Computer Science Major, Student Athlete at Whitman College. <br className="hidden md:block" />
                    Minoring in Finance & Economics.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="#projects"
                        className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors flex items-center gap-2 group"
                    >
                        View My Work
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 bg-white text-slate-700 border border-slate-300 rounded-full font-medium hover:bg-slate-50 transition-colors"
                    >
                        Contact Me
                    </a>
                </div>

                <div className="mt-16 animate-bounce text-slate-400">
                    <span className="text-sm">Scroll Down</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
