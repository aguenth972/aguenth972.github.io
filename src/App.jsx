import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="bg-slate-900 text-white py-6 text-center mt-20">
        <p>© {new Date().getFullYear()} Aiden Guenther. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
