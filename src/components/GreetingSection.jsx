import React from 'react';
import { Link } from 'react-router-dom';

const GreetingSection = () => (
  <section className="py-16 bg-white/80">
    <div className="container-max mx-auto text-center rounded-2xl border-2 border-blue-100 shadow-md p-8">
      <p className="text-2xl font-semibold text-blue-700 mb-6">
        Thanks for checking out my portfolio! <br/>
        If you’d like to get to know me beyond the code — who I am, what I enjoy —<br/>
        I’ve got a fun little “About Me” page just for that!
      </p>
      <p className="text-lg text-blue-500 mb-8">
        <span className="inline-block mr-2">👉</span>Feel free to take a peek — I’d love to share more of my story with you!
      </p>
      <Link to="/about" className="btn-primary bg-blue-500 hover:bg-blue-600 text-white border-none text-lg px-8 py-4 rounded-xl shadow-lg transition-all duration-200">
        About Me Page
      </Link>
    </div>
  </section>
);

export default GreetingSection; 