import React from 'react'
import Header from './components/Header'
import Hello from './components/Hello'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'


function App() {
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Header />
      <main className="pt-16">
        <Hello />
        <Experience />
        <Projects />
        {/* <About /> */}
        <Skills />
        
        
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  )
}

export default App
