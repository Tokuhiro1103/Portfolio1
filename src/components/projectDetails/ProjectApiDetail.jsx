import React from 'react';
import { Link } from 'react-router-dom';

const ProjectApiDetail = () => (
  <section className="section-padding bg-white min-h-screen flex items-center justify-center">
    <div className="w-full max-w-5xl bg-white rounded-xl shadow-none p-8 mx-auto">
      <img src="/image_API1.png" alt="API Development" className="w-full h-64 object-cover rounded-lg mb-8" />
      <h2 className="text-3xl font-bold text-primary-700 mb-4">API Development</h2>

      <h3 className="text-xl font-semibold text-secondary-900 mb-2">プロジェクト概要</h3>
      <p className="mb-6 text-secondary-700">
        ここにAPI Developmentプロジェクトの概要を詳しく記載します。
      </p>

      <h3 className="text-xl font-semibold text-secondary-900 mb-2">開発背景</h3>
      <p className="mb-6 text-secondary-700">
        どんな課題を解決したかったか、なぜこのプロジェクトを始めたかなど。
      </p>

      <h3 className="text-xl font-semibold text-secondary-900 mb-2">担当した機能</h3>
      <ul className="list-disc pl-6 mb-6 text-secondary-700">
        <li>RESTful APIの設計・実装</li>
        <li>フロントエンドの開発</li>
        <li>データベース設計</li>
      </ul>

      <h3 className="text-xl font-semibold text-secondary-900 mb-2">技術的な工夫・成果</h3>
      <ul className="list-disc pl-6 mb-6 text-secondary-700">
        <li>Node.jsとExpressによる効率的なAPI設計</li>
        <li>React/ReactNativeによるUI開発</li>
      </ul>

      <div className="flex flex-wrap gap-2 mb-6">
        <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium">Javascript</span>
        <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium">React.js</span>
        <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium">ReactNative</span>
        <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium">Node.js</span>
        <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium">Express</span>
        <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium">MongoDB</span>
        <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium">Expo</span>
      </div>

      <div className="flex space-x-4 mt-6">
        <a href="https://github.com/yourusername/project2" target="_blank" rel="noopener noreferrer" className="btn-secondary">GitHub</a>
        <a href="https://project2-demo.com" target="_blank" rel="noopener noreferrer" className="btn-primary">Demo</a>
      </div>
      <div className="mt-8 text-center">
        <Link to="/" className="btn-primary">Back to Projects</Link>
      </div>
    </div>
  </section>
);

export default ProjectApiDetail; 