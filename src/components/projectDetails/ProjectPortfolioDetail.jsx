import React from 'react';
import { Link } from 'react-router-dom';

const ProjectPortfolioDetail = () => (
  <section className="section-padding bg-white min-h-screen flex items-center justify-center">
    <div className="w-full max-w-5xl bg-white rounded-xl shadow-none p-8 mx-auto">
      <img src="/image_portfolio1.png" alt="Portfolio site" className="w-full h-64 object-cover rounded-lg mb-8" />
      <h2 className="text-3xl font-bold text-primary-700 mb-4">Portfolio Website</h2>

      <p className="mb-6 text-secondary-700">
        This is a personal portfolio website built with React and Tailwind CSS. The project showcases my skills, projects, and personal background. The goal was to create a modern, responsive portfolio that effectively communicates my professional identity and technical capabilities.
      </p>

      <h3 className="text-xl font-semibold text-secondary-900 mb-2">Features</h3>
      <ul className="list-disc pl-6 mb-6 text-secondary-700">
        <li>Interactive navigation with smooth scrolling animations</li>
        <li>Responsive design</li>
        <li>Contact form with EmailJS integration</li>
        <li>Detailed project showcase with individual pages</li>
        <li>Personal story section with background and interests</li>
        <li>Modern UI/UX with engaging hover effects</li>
      </ul>

      <h3 className="text-xl font-semibold text-secondary-900 mb-2">Technologies Used</h3>
      <div className="flex flex-wrap gap-2 mb-6">
        <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium">React.js</span>
        <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium">Tailwind CSS</span>
        <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium">EmailJS</span>
        <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium">JavaScript</span>
      </div>

      <div className="flex space-x-4 mt-6">
        <a href="https://github.com/yourusername/portfolio" target="_blank" rel="noopener noreferrer" className="btn-secondary">GitHub</a>
      </div>
      <div className="mt-8 text-center">
        <Link to="/" className="btn-primary">Back to Projects</Link>
      </div>
    </div>
  </section>
);

export default ProjectPortfolioDetail; 