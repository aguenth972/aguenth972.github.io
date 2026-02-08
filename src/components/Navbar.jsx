import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { title: 'About', href: '#about' },
        { title: 'Experience', href: '#experience' },
        { title: 'Projects', href: '#projects' },
        { title: 'Skills', href: '#skills' },
        { title: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="#" className="text-2xl font-bold text-slate-900">AG</a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {menuItems.map((item) => (
                                <a
                                    key={item.title}
                                    href={item.href}
                                    className="text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    {item.title}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Social Icons for Desktop */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="https://github.com/aguenth972" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="https://linkedin.com/in/aiden-guenther" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="mailto:aidenrobertguenther@gmail.com" className="text-slate-500 hover:text-red-500 transition-colors">
                            <Mail size={20} />
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-600 hover:text-slate-900 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-slate-100">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {menuItems.map((item) => (
                            <a
                                key={item.title}
                                href={item.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.title}
                            </a>
                        ))}
                        <div className="flex space-x-6 px-3 py-4 border-t border-slate-100 mt-4">
                            <a href="https://github.com/aguenth972" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900">
                                <Github size={24} />
                            </a>
                            <a href="https://linkedin.com/in/aiden-guenther" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600">
                                <Linkedin size={24} />
                            </a>
                            <a href="mailto:aidenrobertguenther@gmail.com" className="text-slate-500 hover:text-red-500">
                                <Mail size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
