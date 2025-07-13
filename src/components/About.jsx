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
    <section className="section-padding bg-gradient-to-br from-blue-50 via-emerald-50 to-orange-50 min-h-screen flex items-center justify-center">
      <div className="container-max w-full bg-white/95 rounded-2xl border-4 border-blue-200 py-16 px-4 md:px-16">
        <h2 className="text-4xl font-extrabold text-blue-500 mb-2 text-center flex items-center justify-center gap-2">
          <span role="img" aria-label="cool"></span> About Me <span role="img" aria-label="cool"></span>
        </h2>
        <p className="text-center text-emerald-500 text-lg mb-6 font-semibold">Thank you for seeing this page!</p>
        
        <div className="mb-8">
          <h3 className="text-4xl font-bold text-orange-400 mb-2 flex items-center gap-2">I am a... <span role="img" aria-label="star"></span></h3>
          <hr className="my-4 border-blue-200" />
          {aboutSections.map((section, idx) => (
            <div key={section.title} className="mb-16">
              <h4 className="text-2xl font-bold text-blue-600 mb-2 flex items-center gap-2">• {section.title} <span role="img" aria-label="icon">{section.title === 'COSPLAYER' ? '🕺' : '⛵'}</span></h4>
              <p className="text-secondary-700 mb-6">{section.description}</p>
              <div className="flex flex-wrap gap-8 mb-2 justify-center">
                {section.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${section.title} ${i + 1}`}
                    className="w-64 h-64 object-cover rounded-2xl border-4 border-emerald-200 bg-blue-50"
                  />
                ))}
              </div>
              {idx < aboutSections.length - 1 && <hr className="my-10 border-dashed border-blue-200" />}
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/" className="btn-primary bg-blue-500 hover:bg-blue-600 text-white border-none">Back to Top</Link>
        </div>
      </div>
    </section>
  )
}

export default About
