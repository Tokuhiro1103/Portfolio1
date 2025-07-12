import React from 'react'
import { Link } from 'react-router-dom'

const Experience = () => {
  // 経歴データ - ここを編集してあなたの経歴に変更してください
  const experiences = [
    {
      id: 1,
      company: 'DMM Boost',
      position: 'Customer Experience and Consultant',
      period: 'Mar 2023 - Nov 2023',
      description: 'LINE official account management and customer support',
      achievements: [
        'ユーザー数10万人規模のECサイトのリニューアルプロジェクトをリード',
        'パフォーマンス改善によりページ読み込み速度を50%向上',
        'チーム内でのコードレビュー制度を確立し、品質向上に貢献'
      ],
      technologies: ['React', 'TypeScript', 'Redux', 'Jest', 'Webpack']
    },
    {
      id: 2,
      company: 'Ishida Co',
      position: 'Sales Representative',
      period: '2020年4月 - 2022年3月',
      description: 'B to B sales and client relationship management',
      achievements: [
        'MVP開発から本格サービス立ち上げまで一貫して関与',
        'ユーザー認証システムの設計・実装',
        'AWSインフラの構築と運用'
      ],
      technologies: ['Vue.js', 'Node.js', 'Express', 'MongoDB', 'AWS']
    },
    
  ]

  // 学歴データ
  const education = [
    {
      id: 1,
      school: 'Osaka City University',
      degree: 'Bachelor of Arts, majoring Sociology',
      period: '2016年4月 - 2020年3月',
      description: 'Social research and data analysis',
      achievements: [
        '卒業研究で機械学習を用いた画像認識システムを開発',
        'プログラミングコンテストで優秀賞を受賞'
      ]
    },
    {
      id: 2,
      school: 'Queensland University of Technology (QUT)',
      degree: 'Master of Information Technology, majoring Computer Science',
      period: '2024年2月 - Present',
      description: 'Advanced software development and research',
      achievements: [
        '卒業研究で機械学習を用いた画像認識システムを開発',
        'プログラミングコンテストで優秀賞を受賞'
      ]
    },
    {
      id: 3,
      school: 'Java Programming Job Training',
      period: '2022年7月 - Oct 2022',
      description: 'Intensive Java development training program',
      achievements: [
        '卒業研究で機械学習を用いた画像認識システムを開発',
        'プログラミングコンテストで優秀賞を受賞'
      ]
    }
  ]

  // 資格データ
  const certifications = [
    {
      id: 1,
      name: 'AWS認定ソリューションアーキテクト',
      issuer: 'Amazon Web Services',
      date: '2023年6月',
      description: 'クラウドインフラの設計・運用に関する資格'
    },
    {
      id: 2,
      name: '応用情報技術者',
      issuer: 'IPA',
      date: '2021年10月',
      description: 'ITエンジニアとしての基礎知識を証明する国家資格'
    },
    {
      id: 3,
      name: 'TOEIC 850点',
      issuer: 'ETS',
      date: '2022年3月',
      description: 'ビジネス英語能力を証明する国際資格'
    }
  ]

  return (
    <section id="experience" className="section-padding bg-gradient-secondary">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            My Experience
          </h2>
          <p className="text-secondary-600 text-lg max-w-2xl mx-auto">
            Let me introduce my professional journey and educational background
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* 職歴 */}
          <div>
            <h3 className="text-2xl font-bold text-secondary-900 mb-8 flex items-center">
              <span className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">W</span>
              WORK EXPERIENCE
            </h3>
            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <div key={experience.id} className="relative">
                  {/* タイムライン */}
                  <div className="absolute left-0 top-0 w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  {index < experiences.length - 1 && (
                    <div className="absolute left-2 top-4 w-0.5 h-full bg-gradient-to-b from-primary-300 to-primary-100"></div>
                  )}
                  
                  <div className="ml-8">
                    <div className="card hover:shadow-2xl transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <h4 className="text-lg font-bold text-secondary-900">
                          {experience.position}
                        </h4>
                        <span className="text-sm text-primary-600 font-medium bg-primary-50 px-3 py-1 rounded-full">
                          {experience.period}
                        </span>
                      </div>
                      
                      <h5 className="text-primary-600 font-semibold mb-2">
                        {experience.company}
                      </h5>
                      
                      <p className="text-secondary-600 mb-4">
                        {experience.description}
                      </p>
                      
                      <div className="mb-4">
                        <h6 className="font-semibold text-secondary-900 mb-2">
                          主な成果：
                        </h6>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span className="text-sm text-secondary-700">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h6 className="font-semibold text-secondary-900 mb-2">
                          使用技術：
                        </h6>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 学歴・資格 */}
          <div className="space-y-12">
            {/* 学歴 */}
            <div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-8 flex items-center">
                <span className="w-8 h-8 bg-secondary-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">E</span>
                学歴
              </h3>
              <div className="space-y-6">
                {education.map((edu) => (
                  <div key={edu.id} className="card hover:shadow-2xl transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h4 className="text-lg font-bold text-secondary-900">
                        {edu.degree}
                      </h4>
                      <span className="text-sm text-secondary-600 font-medium bg-secondary-50 px-3 py-1 rounded-full">
                        {edu.period}
                      </span>
                    </div>
                    
                    <h5 className="text-secondary-600 font-semibold mb-2">
                      {edu.school}
                    </h5>
                    
                    <p className="text-secondary-600 mb-4">
                      {edu.description}
                    </p>
                    
                    <div>
                      <h6 className="font-semibold text-secondary-900 mb-2">
                        主な成果：
                      </h6>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <span className="w-2 h-2 bg-secondary-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-sm text-secondary-700">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 資格 */}
            <div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-8 flex items-center">
                <span className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">C</span>
                資格
              </h3>
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div key={cert.id} className="card hover:shadow-2xl transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="font-bold text-secondary-900">
                        {cert.name}
                      </h4>
                      <span className="text-sm text-green-600 font-medium bg-green-50 px-3 py-1 rounded-full">
                        {cert.date}
                      </span>
                    </div>
                    
                    <p className="text-green-600 font-semibold text-sm mb-1">
                      {cert.issuer}
                    </p>
                    
                    <p className="text-sm text-secondary-600">
                      {cert.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 自己紹介ページへのボタン */}
        <div className="text-center mt-12">
          <Link to="/about" className="btn-secondary inline-block">自己紹介を見る</Link>
        </div>
      </div>
    </section>
  )
}

export default Experience 