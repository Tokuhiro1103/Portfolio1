import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const navigate = useNavigate()
  const location = useLocation()

  // ページ変更時に一番上にスクロール
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const scrollToSection = (href, path) => {
    // 現在のページと異なるページに遷移する場合
    if (location.pathname !== path) {
      navigate(path)
      // メインページ内のセクションへのスクロールのみ処理
      setTimeout(() => {
        if (href.startsWith('#')) {
          const element = document.querySelector(href)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }
      }, 100)
    } else {
      // 同じページ内でのスクロール
      if (href.startsWith('#')) {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
  }

  return (
    <footer className="bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 text-white relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-400/20 to-transparent"></div>
      </div>
      
      <div className="container-max relative z-10">
        <div className="py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* プロフィール */}
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-4 text-gradient">
                Toku
              </h3>
              <p className="text-secondary-300 mb-4 leading-relaxed">
                A passionate IT student at QUT, dedicated to creating innovative web solutions and learning cutting-edge technologies.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-300 hover:text-white transition-all duration-200 hover:scale-110"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-300 hover:text-white transition-all duration-200 hover:scale-110"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-300 hover:text-white transition-all duration-200 hover:scale-110"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* クイックリンク */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection('#home', '/')}
                    className="text-secondary-300 hover:text-white transition-all duration-200 hover:translate-x-1 flex items-center group w-full text-left"
                  >
                    <span className="w-1 h-1 bg-primary-400 rounded-full mr-2 group-hover:bg-primary-300 transition-colors duration-200"></span>
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('#background', '/')}
                    className="text-secondary-300 hover:text-white transition-all duration-200 hover:translate-x-1 flex items-center group w-full text-left"
                  >
                    <span className="w-1 h-1 bg-primary-400 rounded-full mr-2 group-hover:bg-primary-300 transition-colors duration-200"></span>
                    Background
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('#projects', '/')}
                    className="text-secondary-300 hover:text-white transition-all duration-200 hover:translate-x-1 flex items-center group w-full text-left"
                  >
                    <span className="w-1 h-1 bg-primary-400 rounded-full mr-2 group-hover:bg-primary-300 transition-colors duration-200"></span>
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('#skills', '/')}
                    className="text-secondary-300 hover:text-white transition-all duration-200 hover:translate-x-1 flex items-center group w-full text-left"
                  >
                    <span className="w-1 h-1 bg-primary-400 rounded-full mr-2 group-hover:bg-primary-300 transition-colors duration-200"></span>
                    Skills
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('/about', '/about')}
                    className="text-secondary-300 hover:text-white transition-all duration-200 hover:translate-x-1 flex items-center group w-full text-left"
                  >
                    <span className="w-1 h-1 bg-primary-400 rounded-full mr-2 group-hover:bg-primary-300 transition-colors duration-200"></span>
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('/contact', '/contact')}
                    className="text-secondary-300 hover:text-white transition-all duration-200 hover:translate-x-1 flex items-center group w-full text-left"
                  >
                    <span className="w-1 h-1 bg-primary-400 rounded-full mr-2 group-hover:bg-primary-300 transition-colors duration-200"></span>
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* 連絡先 */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
              <ul className="space-y-3 text-secondary-300">
                <li className="flex items-center space-x-3 group">
                  <div className="w-8 h-8 bg-primary-600/20 rounded-full flex items-center justify-center group-hover:bg-primary-600/30 transition-colors duration-200">
                    <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <a
                    href="mailto:your.email@example.com"
                    className="hover:text-white transition-colors duration-200"
                  >
                    your.email@example.com
                  </a>
                </li>
                <li className="flex items-center space-x-3 group">
                  <div className="w-8 h-8 bg-primary-600/20 rounded-full flex items-center justify-center group-hover:bg-primary-600/30 transition-colors duration-200">
                    <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span>Brisbane, Queensland</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ボトムバー */}
        <div className="border-t border-secondary-700/50 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-300 text-sm">
              © {currentYear} Toku. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <button
                onClick={scrollToTop}
                className="text-secondary-300 hover:text-white transition-all duration-200 flex items-center space-x-2 hover:scale-105"
              >
                <span className="text-sm">Back to top</span>
                <div className="w-8 h-8 bg-primary-600/20 rounded-full flex items-center justify-center hover:bg-primary-600/30 transition-colors duration-200">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 