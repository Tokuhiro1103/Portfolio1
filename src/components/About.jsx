import React from 'react'
import { Link } from 'react-router-dom'

const aboutSections = [
  {
    title: 'COSPLAYER',
    description: `I love expressing myself through cosplay. I enjoy creating costumes, attending events, and connecting with people who share the same passion for anime, games, and creativity. Cosplay allows me to become my favorite characters and make new friends from all over the world!`,
    images: [
      'https://placehold.co/400x400?text=Cosplay+1',
      'https://placehold.co/400x400?text=Cosplay+2',
    ],
  },
  {
    title: 'SAILOR',
    description: `Sailing is my way to feel free and adventurous. I love the ocean, the wind, and the challenge of navigating. Being a sailor has taught me teamwork, patience, and the beauty of nature.`,
    images: [
      'https://placehold.co/400x400?text=Sailing+1',
      'https://placehold.co/400x400?text=Sailing+2',
    ],
  },
]

const About = () => {
  return (
    <section className="section-padding bg-gradient-primary min-h-screen flex items-center justify-center">
      <div className="container-max w-full bg-white/90 rounded-xl shadow-xl py-16 px-4 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-2 text-center">About Me</h2>
        <p className="text-center text-primary-600 text-lg mb-6 font-semibold">Thank you for seeing this page!</p>
        <hr className="my-4 border-primary-200" />
        <div className="mb-8">
          <h3 className="text-xl font-bold text-secondary-800 mb-2">I am a:</h3>
          {aboutSections.map((section, idx) => (
            <div key={section.title} className="mb-16">
              <h4 className="text-lg font-bold text-primary-700 mb-2">• {section.title}</h4>
              <p className="text-secondary-700 mb-6">{section.description}</p>
              <div className="flex flex-wrap gap-8 mb-2 justify-center">
                {section.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${section.title} ${i + 1}`}
                    className="w-64 h-64 object-cover rounded-xl shadow-lg border border-primary-100 bg-gray-100"
                  />
                ))}
              </div>
              {idx < aboutSections.length - 1 && <hr className="my-10 border-dashed border-secondary-300" />}
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/" className="btn-primary">Back to Top</Link>
        </div>
      </div>
    </section>
  )
}

export default About
