import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

const aboutSections = [
  {
    title: 'SAILOR',
    description: `Back in my university days in Japan, I was part of a sailing club. \nSailing is my way to feel free and adventurous. Being a sailor has taught me teamwork, patience, and the beauty of nature.\nBut I wasn’t just out there riding the waves — I also got involved in team management and worked hard to recruit new members.\nAlso, I got a license to operate small boats!`,
    images: [
      'image_sailing1.jpg',
      'image_sailing2.jpg',
      'image_sailing3.jpg',
    ],
  },
  {
    title: 'GUITARIST',
    description: `Music has always been a big part of my life — and so has the guitar! \nA few years ago, some friends and I started a band club from scratch.\nWe didn’t just jam for fun — we formed bands, held live shows, and shared the stage with each other. It was all about good vibes, creativity, and the thrill of performing!`,
    images: [
      'image_guitar1.jpg',
      'image_guitar2.jpg',
      'image_bass1.jpg',
    ],
  },
  {
    title: 'COSPLAYER',
    description: `I’m also a fan of cosplay! \nLast year, I joined the cosplay meetup at Oz Comic-Con in South Bank and dressed up as a character from one of my favorite games — Genshin Impact! It was such a blast to see so many creative costumes and meet fellow fans. \n
    And as for the last photo... that’s from a quirky Japanese event called “Jimi (Mundane) Halloween” — where people cosplay everyday, “relatable” situations. \nMy costume idea? “A person doing an online job interview wearing pajama pants! ” 😄`,
    images: [
      'image_cosplay1.jpg',
      'image_cosplay2.jpg',
      'image_cosplay3.jpg',
      'image_cosplay4.png',
    ],
  },
  {
    title: 'CREATOR',
    description: `Of course, I love programming! \nBut creativity isn’t something I limit to code — I enjoy bringing my creativity to life in other kinds of fun ways. \n
    Photo 1: This is an English learning book I wrote — and yes, it's actually available on Amazon Japan! Link \nPhoto 2: I used to work on promotional tools using LINE Official Accounts, a popular messaging app in Japan. The screenshot shows a demo account I created! \nPhoto 3: I even gave music production a try! Here's a peek at my screen while I was recreating songs using a digital audio workstation.`,
    images: [
      'image_creator1.jpg',
      'image_creator2.jpg',
      'image_creator3.png',
    ],
  },
  
]

// スクロールでフェードインするカスタムフック
function useScrollFadeIn() {
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('opacity-100', 'translate-y-0');
          node.classList.remove('opacity-0', 'translate-y-8');
        }
      },
      { threshold: 0.2 }
    );
    node.classList.add('opacity-0', 'translate-y-8');
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return ref;
}

const About = () => {
  const titleFade = useScrollFadeIn();
  const greetFade = useScrollFadeIn();
  const closingFade = useScrollFadeIn();
  const buttonFade = useScrollFadeIn();
  const h3Fade = useScrollFadeIn();
  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 via-emerald-50 to-orange-50 min-h-screen flex items-center justify-center">
      <div className="container-max w-full bg-white/95 rounded-2xl border-4 border-blue-200 py-16 px-4 md:px-16">
        <h2 ref={titleFade} className="text-4xl font-extrabold text-blue-500 mb-2 text-center flex items-center justify-center gap-2 transition-all duration-700 ease-out">
          <span role="img" aria-label="cool"></span> About Me <span role="img" aria-label="cool"></span>
        </h2>
        
        
        <p ref={greetFade} className="text-center text-emerald-500 text-lg mb-8 mt-8 transition-all duration-700 ease-out">
          Hi there👋 I'm glad you're here!
          <br/>This page is all about the fun side of me — the things I enjoy, the passions that keep me going, and what makes me <span className="font-bold">'me'</span>.
          <br/>So if you’re wondering what kind of person I am outside of coding, you’re in the right place! 💫
          <br/>Let’s jump in and explore together!
        </p>
        
        <div className="mb-8">
          <h3 ref={h3Fade} className="text-5xl font-bold text-orange-400 mb-2 flex items-center gap-2 transition-all duration-700 ease-out">I am a... <span role="img" aria-label="star"></span></h3>
          <hr className="my-4 border-blue-200" />
          {aboutSections.map((section, idx) => {
            const fadeRef = useScrollFadeIn();
            return (
              <div key={section.title} ref={fadeRef} className="mb-16 transition-all duration-700 ease-out">
                <h4 className="text-2xl font-bold text-blue-600 mb-2 flex items-center gap-2">
                  • {section.title} <span role="img" aria-label="icon">
                    {section.title === 'COSPLAYER' ? '🕺' : section.title === 'SAILOR' ? '⛵' : section.title === 'GUITARIST' ? '🎸' : section.title === 'CREATOR' ? '🛠️' : ''}
                  </span>
                </h4>
                <p className="text-secondary-700 mb-12">
                  {section.description.split('\n').map((line, idx) => {
                    const phrase = "A person doing an online job interview wearing pajama pants!";
                    const amazonUrl = "https://www.amazon.co.jp/%E8%8B%B1%E8%AA%9E%E3%83%AA%E3%82%B9%E3%83%8B%E3%83%B3%E3%82%B0%E4%B8%8A%E9%81%94%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AE%E5%8B%89%E5%BC%B7%E6%B3%95%E5%85%A5%E9%96%80-%E3%80%8C%E4%BD%95%E3%81%8B%E3%82%89%E5%A7%8B%E3%82%81%E3%82%8C%E3%81%B0%E3%81%84%E3%81%84%E3%81%AE%EF%BC%9F%E3%80%8D%E3%81%A8%E3%81%84%E3%81%86%E5%88%9D%E5%BF%83%E8%80%85%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AE%E5%9F%BA%E6%9C%AC-%E3%82%AD%E3%83%8E%E3%82%B3%E6%9B%B8%E6%88%BF-%E8%8C%84%E5%AD%90%E3%81%AE%E5%A4%A9%E7%84%B6%E6%B0%B4-ebook/dp/B0C6D6BZ1C";
                    if (line.includes(phrase)) {
                      const [before, after] = line.split(phrase);
                      return (
                        <React.Fragment key={idx}>
                          {before}
                          <span className="italic">{phrase}</span>
                          {after}
                          <br />
                        </React.Fragment>
                      );
                    } else if (line.includes('Link')) {
                      const [before, after] = line.split('Link');
                      return (
                        <React.Fragment key={idx}>
                          {before}
                          <a
                            href={amazonUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline hover:text-blue-800"
                          >
                            Link
                          </a>
                          {after}
                          <br />
                        </React.Fragment>
                      );
                    } else {
                      return (
                        <React.Fragment key={idx}>
                          {line}
                          <br />
                        </React.Fragment>
                      );
                    }
                  })}
                </p>
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
            );
          })}
        </div>

        <p ref={closingFade} className="text-center text-blue-500 text-lg font-semibold mt-32 mb-8 transition-all duration-700 ease-out">
          Thank you for taking the time to get to know me!<br/>
          I hope we can connect and create something great together.
        </p>

        <div ref={buttonFade} className="text-center mt-8 transition-all duration-700 ease-out">
          <Link to="/" className="btn-primary bg-blue-500 hover:bg-blue-600 text-white border-none">Back to Top</Link>
        </div>
      </div>
    </section>
  )
}

export default About
