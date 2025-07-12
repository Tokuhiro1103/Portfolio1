import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className="section-padding bg-gradient-primary min-h-screen flex items-center justify-center">
      <div className="container-max max-w-2xl bg-white/80 rounded-xl shadow-xl p-8">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6 text-center">自己紹介</h2>
        <p className="text-lg text-secondary-700 mb-4">
          こんにちは！私はTokuです。現在QUTでITを学びながら、Web開発やデザイン、AI技術に興味を持っています。
        </p>
        <p className="text-lg text-secondary-700 mb-4">
          <span className="font-bold">趣味：</span> サッカー観戦、カフェ巡り、プログラミング、旅行、写真撮影
        </p>
        <p className="text-lg text-secondary-700 mb-4">
          <span className="font-bold">好きな技術：</span> React, Node.js, Python, Tailwind CSS, AWS
        </p>
        <p className="text-lg text-secondary-700 mb-8">
          <span className="font-bold">ひとこと：</span>「常に新しいことに挑戦し、成長し続けること」を大切にしています！
        </p>
        <div className="text-center">
          <Link to="/" className="btn-primary">トップページに戻る</Link>
        </div>
      </div>
    </section>
  )
}

export default About
