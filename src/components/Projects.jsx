import React from 'react'

const Projects = () => {
  // プロジェクトデータ - ここを編集してあなたのプロジェクトに変更してください
  const projects = [
    {
      id: 1,
      title: 'ECサイト',
      description: 'ReactとNode.jsを使用したフルスタックECサイト。ユーザー認証、商品管理、決済機能を実装。',
      image: '/project1.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/yourusername/project1',
      demo: 'https://project1-demo.com',
      featured: true
    },
    {
      id: 2,
      title: 'タスク管理アプリ',
      description: 'Vue.jsとFirebaseを使用したリアルタイムタスク管理アプリケーション。あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ',
      image: '/project2.jpg',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      github: 'https://github.com/yourusername/project2',
      demo: 'https://project2-demo.com',
      featured: true
    },
    {
      id: 3,
      title: 'モバイルアプリ',
      description: 'React Nativeを使用したクロスプラットフォームモバイルアプリ。',
      image: '/project3.jpg',
      technologies: ['React Native', 'Expo', 'Redux'],
      github: 'https://github.com/yourusername/project3',
      demo: null,
      featured: false
    },
    {
      id: 4,
      title: 'データ分析ダッシュボード',
      description: 'PythonとDjangoを使用したデータ可視化ダッシュボード。',
      image: '/project4.jpg',
      technologies: ['Python', 'Django', 'Chart.js', 'PostgreSQL'],
      github: 'https://github.com/yourusername/project4',
      demo: 'https://project4-demo.com',
      featured: false
    },
    {
      id: 5,
      title: 'ポートフォリオサイト',
      description: 'このポートフォリオサイト自体です。ReactとTailwind CSSで作成。',
      image: '/project5.jpg',
      technologies: ['React', 'Tailwind CSS', 'Vite'],
      github: 'https://github.com/yourusername/portfolio',
      demo: 'https://your-portfolio.com',
      featured: false
    },
    {
      id: 6,
      title: 'API開発',
      description: 'RESTful APIの設計と実装。認証、レート制限、ドキュメント化を含む。',
      image: '/project6.jpg',
      technologies: ['Node.js', 'Express', 'JWT', 'Swagger'],
      github: 'https://github.com/yourusername/api-project',
      demo: 'https://api-docs.com',
      featured: false
    }
  ]

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            プロジェクト
          </h2>
          <p className="text-secondary-600 text-lg max-w-2xl mx-auto">
            私が開発したプロジェクトの一部をご紹介します
          </p>
        </div>

        {/* プロジェクトグリッド */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group">
              <div className="card h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* プロジェクト画像 */}
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                    {/* ここにプロジェクト画像を配置 */}
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-2 bg-primary-500 rounded-lg flex items-center justify-center text-white text-xl font-bold shadow-lg">
                        {project.title.charAt(0)}
                      </div>
                      <p className="text-primary-700 text-sm font-medium">
                        プロジェクト画像
                      </p>
                    </div>
                  </div>
                  
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
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white text-gray-800 p-3 rounded-full hover:bg-gray-100 transition-all duration-200 transform hover:scale-110 shadow-lg"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
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
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center group/link"
                      >
                        デモを見る
                        <svg className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* その他のプロジェクトへのリンク */}
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
        </div>
      </div>
    </section>
  )
}

export default Projects 