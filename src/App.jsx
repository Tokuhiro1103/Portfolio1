import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hello from './components/Hello'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'
import About from './components/About'
import ProjectDetail from './components/ProjectDetail'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Header />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={
            <>
              <Hello />
              <Experience />
              <Projects />
              <Skills />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
