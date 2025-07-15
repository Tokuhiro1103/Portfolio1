import React from 'react';
import { Link } from 'react-router-dom';

const ProjectECsiteDetail = () => (
  <section className="section-padding bg-white min-h-screen flex items-center justify-center">
    <div className="w-full max-w-5xl bg-white rounded-xl shadow-none p-8 mx-auto">
      <img src="/image_ECsite2.png" alt="EC site" className="w-full h-64 object-cover rounded-lg mb-8" />
      <h2 className="text-3xl font-bold text-primary-700 mb-4">E-commerce site</h2>

      <p className="mb-6 text-secondary-700">
      This is a mock e-commerce application built with Python and Flask. The project simulates a music-themed online store where users can browse and interact with products.
      </p>

      <h3 className="text-xl font-semibold text-secondary-900 mb-2">Features</h3>
      <ul className="list-disc pl-6 mb-6 text-secondary-700">
        <li>Product listing and detail pages</li>
        <li>Admin interface for managing product data</li>
        <li>Form handling for user inputs</li>
        <li>SQLite-based persistent storage</li>
      </ul>

      <h3 className="text-xl font-semibold text-secondary-900 mb-2">Technologies Used</h3>
      <div className="flex flex-wrap gap-2 mb-6">
        <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium">Python</span>
        <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium">Flask</span>
        <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium">Bootstrap</span>
        <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium">SQLite</span>
      </div>

      <div className="flex space-x-4 mt-6">
        <a href="https://github.com/yourusername/project4" target="_blank" rel="noopener noreferrer" className="btn-secondary">GitHub</a>
      </div>
      <div className="mt-32 text-center">
        <Link to="/" className="btn-primary">Back to Projects</Link>
      </div>
    </div>
  </section>
);

export default ProjectECsiteDetail; 