import React from 'react';
import { Link } from 'react-router-dom';

const ProjectTProDetail = () => (
  <section className="section-padding bg-white min-h-screen flex items-center justify-center">
    <div className="w-full max-w-5xl bg-white rounded-xl shadow-none p-8 mx-auto">
      <img src="/image_Tpro1.jpg" alt="TPro application" className="w-full h-64 object-cover rounded-lg mb-8" />
      <h2 className="text-3xl font-bold text-primary-700 mb-4">TPro application</h2>

      
      <p className="mb-6 text-secondary-700">
      This project was a collaborative initiative with an industry partner, focused on developing an iOS application as part of a team-based software development project.
      </p>

      <h3 className="text-xl font-semibold text-secondary-900 mb-2">Project Background</h3>
      <p className="mb-6 text-secondary-700">
      Physiotherapists often face challenges in monitoring patient posture and exercise adherence outside clinical settings. Our industry partner, GravityFit’s TPro sensor captures pressure and stretch data that reflect spinal alignment and core engagement. However, prior to this project, there was no digital platform available for therapists to prescribe, monitor, and evaluate TPro-based exercises remotely.
      </p>

      <h3 className="text-xl font-semibold text-secondary-900 mb-2">Key Outcomes Delivered</h3>
      <ul className="list-disc pl-6 mb-6 text-secondary-700">
        <li>iOS Prototype: Developed a Swift-based mobile application capable of pairing with the TPro sensor (or a mock peripheral) to stream live sensor vectors in real time.</li>
        <li>Sensor Database: Designed a normalized database schema with a sample dataset to store historical posture metrics and session metadata.</li>
        <li>Scoring Algorithm: Implemented a rule-based algorithm to convert raw sensor data into intuitive compliance scores, providing immediate feedback to both users and therapists.</li>
        <li>Data Visualization: Integrated in-app visualizations including posture deviation, movement speed, and resistance to support clinical decision-making.</li>
      </ul>

      <h3 className="text-xl font-semibold text-secondary-900 mb-2">Personal Contribution</h3>
      <p className="mb-6 text-secondary-700">
      I was responsible for implementing the Bluetooth Low Energy (BLE) communication functionality, enabling the mobile app to connect and receive data from devices.
      </p>

      <h3 className="text-xl font-semibold text-secondary-900 mb-2">Technologies Used</h3>
      <div className="flex flex-wrap gap-2 mb-6">
        <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium">Swift</span>
        <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium">BLE</span>
        <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium">CoreBluetooth</span>
      </div>

      <div className="flex space-x-4 mt-6">
        <a href="https://github.com/yourusername/project1" target="_blank" rel="noopener noreferrer" className="btn-secondary">GitHub</a>
      </div>
      <div className="mt-32 text-center">
        <Link to="/" className="btn-primary">Back to Projects</Link>
      </div>
    </div>
  </section>
);

export default ProjectTProDetail; 