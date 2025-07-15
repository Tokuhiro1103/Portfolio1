import React from 'react';
import { Link } from 'react-router-dom';

const ProjectApiDetail = () => (
  <section className="section-padding bg-white min-h-screen flex items-center justify-center">
    <div className="w-full max-w-5xl bg-white rounded-xl shadow-none p-8 mx-auto">
      <img src="/image_API7.png" alt="API Development" className="w-full h-64 object-cover rounded-lg mb-8" />
      <h2 className="text-3xl font-bold text-primary-700 mb-4">API Development</h2>

      
      <p className="mb-6 text-secondary-700">
      This is a full-stack project designed to simulate a Music Playlist management system. It includes both a REST API server-side application and a responsive web frontend, as well as a mobile version built with React Native. The goal of this project was to gain practical experience in building and integrating full-stack applications across platforms.
      </p>

      <h3 className="text-xl font-semibold text-secondary-900 mb-2">Features</h3>
      <ul className="list-disc pl-6 mb-6 text-secondary-700">
        <li>User authentication (login/logout)</li>
        <li>Playlist management (create, edit, delete)</li>
        <li>Artist and song listings</li>
        <li>Client-server communication through RESTful API</li>
      </ul>

      <h3 className="text-xl font-semibold text-secondary-900 mb-2">Features（Mobile）</h3>
      <ul className="list-disc pl-6 mb-6 text-secondary-700">
        <li>Shake to Create Playlist</li>
        <li>Notification</li>
        <li>Playlist Sharing</li>
      </ul>


      <h3 className="text-xl font-semibold text-secondary-900 mb-2">Technologies used</h3>
      <div className="flex flex-wrap gap-2 mb-6">
        <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium">Javascript</span>
        <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium">React.js</span>
        <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium">ReactNative</span>
        <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium">Node.js</span>
        <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium">Express</span>
        <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium">MongoDB</span>
        <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium">Expo</span>
      </div>

      <div className="flex space-x-4 mt-6">
        
        <a href="https://github.com/Tokuhiro1103/Playlist" target="_blank" rel="noopener noreferrer" className="btn-secondary">GitHub (Web version)</a>
        <a href="https://github.com/Tokuhiro1103/Assignment3_mobile" target="_blank" rel="noopener noreferrer" className="btn-secondary">GitHub (Mobile version)</a>
      </div>
      <div className="mt-32 text-center">
        <Link to="/" className="btn-primary">Back to Projects</Link>
      </div>
    </div>
  </section>
);

export default ProjectApiDetail; 