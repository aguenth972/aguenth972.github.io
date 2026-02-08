import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-slate-900 text-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
                <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
                </p>

                <a
                    href="mailto:aidenrobertguenther@gmail.com"
                    className="inline-flex items-center gap-2 bg-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors mb-12"
                >
                    <Mail size={20} />
                    Say Hello
                </a>

                <div className="border-t border-slate-800 pt-12">
                    <div className="flex justify-center space-x-8">
                        <a href="https://github.com/aguenth972" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors flex flex-col items-center gap-2">
                            <div className="p-3 bg-slate-800 rounded-full">
                                <Github size={24} />
                            </div>
                            <span className="text-sm">GitHub</span>
                        </a>
                        <a href="https://linkedin.com/in/aiden-guenther" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors flex flex-col items-center gap-2">
                            <div className="p-3 bg-slate-800 rounded-full">
                                <Linkedin size={24} />
                            </div>
                            <span className="text-sm">LinkedIn</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
