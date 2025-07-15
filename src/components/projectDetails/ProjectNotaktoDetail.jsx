import React from 'react';
import { Link } from 'react-router-dom';

const ProjectNotaktoDetail = () => (
  <section className="section-padding bg-white min-h-screen flex items-center justify-center">
    <div className="w-full max-w-5xl bg-white rounded-xl shadow-none p-8 mx-auto">
      <img src={`${import.meta.env.BASE_URL}image_notakuto2.png`} alt="Notakto" className="w-full h-64 object-cover rounded-lg mb-8" />
      <h2 className="text-3xl font-bold text-primary-700 mb-4">Notakto</h2>

      <p className="mb-6 text-secondary-700">
      This is a board game, notakto application, featuring two gameplay modes: Human vs. Human and Human vs. Computer. The game simulates a variant of tic-tac-toe, providing an interactive and strategic experience for both solo and competitive play.
      Tihis game is designed with Object-Oriented Programming.
      </p>

      <h3 className="text-xl font-semibold text-secondary-900 mb-2">Features</h3>
      <ul className="list-disc pl-6 mb-6 text-secondary-700">
        <li>Human vs. Human and Human vs. Computer gameplay</li>
        <li>Save/Load Functionality</li>
        <li>Move History with Undo/Redo</li>
      </ul>

      <h3 className="text-xl font-semibold text-secondary-900 mb-2">Technologies Used</h3>
      <div className="flex flex-wrap gap-2 mb-6">
        <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium">C#</span>
      </div>

      <div className="flex space-x-4 mt-6">
        <a href="https://github.com/Tokuhiro1103/Nokutakto" target="_blank" rel="noopener noreferrer" className="btn-secondary">GitHub</a>
      </div>
      <div className="mt-32 text-center">
        <Link to="/" className="btn-primary">Back to Projects</Link>
      </div>
    </div>
  </section>
);

export default ProjectNotaktoDetail; 