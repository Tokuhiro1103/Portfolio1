import React from 'react'
import { Link } from 'react-router-dom'

const Projects = () => {
  // プロジェクトデータ - ここを編集してあなたのプロジェクトに変更してください
  const projects = [
    {
      id: 1,
      title: 'TPro application',
      description: 'This is a team project. We developed an iOS application with Swift and I implemented BLE connection functionality.',
      image: '/image_Tpro1.jpg',
      technologies: ['Swift', 'BLE', 'CoreBluetooth'],
      github: 'https://github.com/yourusername/project1',
      featured: true
    },
    {
      id: 2,
      title: 'API Development',
      description: 'Implemented a RESTful API and front-end for a web application and implemented a web application',
      image: '/image_API1.png',
      technologies: ['Javascript', 'React.js', 'ReactNative', 'Node.js', 'Express', 'MongoDB', 'Expo'],
      github: 'https://github.com/yourusername/project2',
      featured: true
    },
    {
      id: 3,
      title: 'Notakto',
      description: 'This is a board game app. I implemented the game logic: Save, Redo, Undo',
      image: '/image_notakuto2.png',
      technologies: ['C#'],
      github: 'https://github.com/yourusername/project3',
      featured: false
    },
    {
      id: 4,
      title: 'EC site',
      description: 'Developed an e-commerce website with Python, Flask and Bootstrap',
      image: '/image_ECsite1.png',
      technologies: ['Python', 'Flask', 'Bootstrap'],
      github: 'https://github.com/yourusername/project4',
      featured: false
    },
    {
      id: 5,
      title: 'Portfolio site',
      description: 'This site. Used React and Tailwind CSS',
      image: '/project5.jpg',
      technologies: ['React.js', 'Tailwind CSS', 'Vite'],
      github: 'https://github.com/yourusername/portfolio',
      featured: false
    },
  ]

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Projects
          </h2>
          {/* <p className="text-secondary-600 text-lg max-w-2xl mx-auto">
            私が開発したプロジェクトの一部をご紹介します
          </p> */}
        </div>

        {/* プロジェクトグリッド */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group">
              <div className="card h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* プロジェクト画像 */}
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  {/* オーバーレイ */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white text-gray-800 p-3 rounded-full hover:bg-gray-100 transition-all duration-200 transform hover:scale-110 shadow-lg"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>
                      )}
                      <Link
                        to={`/projects/${project.id}`}
                        className="bg-white text-gray-800 p-3 rounded-full hover:bg-gray-100 transition-all duration-200 transform hover:scale-110 shadow-lg"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* プロジェクト情報 */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-secondary-600 mb-4">
                    {project.description}
                  </p>
                  {/* 使用技術 */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {/* リンク */}
                  <div className="flex space-x-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center group/link"
                      >
                        GitHub 
                        <svg className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    )}
                    <Link
                      to={`/projects/${project.id}`}
                      className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center group/link"
                    >
                      See detail
                      <svg className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* その他のプロジェクトへのリンク
        <div className="text-center mt-12">
          <p className="text-secondary-600 mb-4">
            より多くのプロジェクトをご覧になりたい方は
          </p>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
          >
            GitHubで他のプロジェクトを見る
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div> */}
      </div>
    </section>
  )
}

export default Projects 