import React from 'react'
import { Link } from 'react-router-dom'

const Skills = () => {
  // スキルデータ - ここを編集してあなたのスキルに変更してください
  const skillCategories = [
    {
      name: 'フロントエンド',
      icon: '🎨',
      skills: [
        { name: 'HTML/CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'React', level: 80 },
        { name: 'Vue.js', level: 75 },
        { name: 'TypeScript', level: 70 },
        { name: 'Tailwind CSS', level: 85 },
      ]
    },
    {
      name: 'バックエンド',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'Python', level: 70 },
        { name: 'PHP', level: 65 },
        { name: 'MySQL', level: 70 },
        { name: 'PostgreSQL', level: 60 },
        { name: 'MongoDB', level: 55 },
      ]
    },
    {
      name: 'ツール・その他',
      icon: '🛠️',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Docker', level: 60 },
        { name: 'AWS', level: 55 },
        { name: 'Figma', level: 70 },
        { name: 'Adobe XD', level: 65 },
        { name: 'Photoshop', level: 60 },
      ]
    }
  ]

  const getLevelColor = (level) => {
    if (level >= 80) return 'bg-gradient-to-r from-green-500 to-green-600'
    if (level >= 60) return 'bg-gradient-to-r from-blue-500 to-blue-600'
    if (level >= 40) return 'bg-gradient-to-r from-yellow-500 to-yellow-600'
    return 'bg-gradient-to-r from-red-500 to-red-600'
  }

  const getLevelText = (level) => {
    if (level >= 80) return '上級'
    if (level >= 60) return '中級'
    if (level >= 40) return '初級'
    return '学習中'
  }

  const getLevelTextColor = (level) => {
    if (level >= 80) return 'text-green-600'
    if (level >= 60) return 'text-blue-600'
    if (level >= 40) return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <section id="skills" className="section-padding bg-gradient-primary">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            スキル
          </h2>
          <p className="text-secondary-600 text-lg max-w-2xl mx-auto">
            私が習得している技術スキルとその習熟度をご紹介します
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.name} className="card hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-xl font-bold text-secondary-900">
                  {category.name}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-secondary-700 font-medium group-hover:text-secondary-900 transition-colors duration-200">
                        {skill.name}
                      </span>
                      <span className={`text-sm font-medium ${getLevelTextColor(skill.level)}`}>
                        {getLevelText(skill.level)}
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-3 rounded-full transition-all duration-1000 ease-out ${getLevelColor(skill.level)} relative overflow-hidden`}
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute inset-0 bg-white opacity-20 animate-pulse"></div>
                      </div>
                    </div>
                    
                    <div className="text-right mt-1">
                      <span className="text-xs text-secondary-500 font-medium">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 追加スキル */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
            その他のスキル・資格
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* ここにあなたの追加スキルや資格を入力 */}
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                AWS
              </div>
              <h4 className="font-semibold text-secondary-900 mb-2">AWS認定</h4>
              <p className="text-sm text-secondary-600">ソリューションアーキテクト</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                PM
              </div>
              <h4 className="font-semibold text-secondary-900 mb-2">プロジェクト管理</h4>
              <p className="text-sm text-secondary-600">アジャイル開発</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                UI
              </div>
              <h4 className="font-semibold text-secondary-900 mb-2">UI/UXデザイン</h4>
              <p className="text-sm text-secondary-600">ユーザビリティ</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                EN
              </div>
              <h4 className="font-semibold text-secondary-900 mb-2">英語</h4>
              <p className="text-sm text-secondary-600">ビジネスレベル</p>
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

export default Skills 