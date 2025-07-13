import React from 'react'
import { Link } from 'react-router-dom'

const aboutSections = [
  {
    title: 'SAILOR',
    description: `Sailing is my way to feel free and adventurous. I love the ocean, the wind, and the challenge of navigating. Being a sailor has taught me teamwork, patience, and the beauty of nature.`,
    images: [
      'image_sailing1.jpg',
      'image_sailing2.jpg',
      'image_sailing3.jpg',
    ],
  },
  {
    title: 'GUITARIST',
    description: `I love expressing myself through cosplay. I enjoy creating costumes, attending events, and connecting with people who share the same passion for anime, games, and creativity. Cosplay allows me to become my favorite characters and make new friends from all over the world!`,
    images: [
      'image_guitar1.jpg',
      'image_guitar2.jpg',
      'image_bass1.jpg',
    ],
  },
  {
    title: 'COSPLAYER',
    description: `I love expressing myself through cosplay. I enjoy creating costumes, attending events, and connecting with people who share the same passion for anime, games, and creativity. Cosplay allows me to become my favorite characters and make new friends from all over the world!`,
    images: [
      'image_cosplay1.jpg',
      'image_cosplay2.jpg',
      'image_cosplay3.jpg',
      'image_cosplay4.png',
    ],
  },
  {
    title: 'CREATOR',
    description: `I love expressing myself through cosplay. I enjoy creating costumes, attending events, and connecting with people who share the same passion for anime, games, and creativity. Cosplay allows me to become my favorite characters and make new friends from all over the world!`,
    images: [
      'image_creator1.jpg',
      'image_creator2.jpg',
      'image_creator3.png',
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
        
        
        <p className="text-center text-emerald-500 text-lg mb-16 mt-6">Hi there👋 I'm glad you're here!
          <br/>This page is all about the fun side of me — the things I enjoy, the passions that keep me going, and what makes me <b>'me'</b>.
          <br/>So if you’re wondering what kind of person I am outside of coding, you’re in the right place! 💫
          <br/>Let’s jump in and explore together!
          </p>
        
        <div className="mb-8">
          <h3 className="text-4xl font-bold text-orange-400 mb-2 flex items-center gap-2">I am a... <span role="img" aria-label="star"></span></h3>
          <hr className="my-4 border-blue-200" />
          {aboutSections.map((section, idx) => (
            <div key={section.title} className="mb-16">
              <h4 className="text-2xl font-bold text-blue-600 mb-2 flex items-center gap-2">• {section.title} <span role="img" aria-label="icon">{section.title === 'COSPLAYER' ? '🕺' : '⛵'}</span></h4>
              <p className="text-secondary-700 mb-6">{section.description}</p>
              <div className="flex flex-wrap gap-6 justify-center">
                {section.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${section.title} ${i + 1}`}
                    className="rounded-2xl border-4 border-emerald-200 object-cover max-h-[300px] transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                    style={{ height: '280px', width: 'auto' }}
                  />
                ))}
              </div>
              {idx < aboutSections.length - 1 && <hr className="my-10 border-dashed border-blue-200" />}
            </div>
          ))}
        </div>

        <p className="text-center text-blue-500 text-lg font-semibold mt-32 mb-8">
          Thank you for taking the time to get to know me!<br/>
          I hope we can connect and create something great together.
        </p>

        <div className="text-center mt-8">
          <Link to="/" className="btn-primary bg-blue-500 hover:bg-blue-600 text-white border-none">Back to Top</Link>
        </div>
      </div>
    </section>
  )
}

export default About
