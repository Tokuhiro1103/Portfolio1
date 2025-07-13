import React from 'react';
import { Link } from 'react-router-dom';

const ProjectNotaktoDetail = () => (
  <section className="section-padding bg-white min-h-screen flex items-center justify-center">
    <div className="w-full max-w-5xl bg-white rounded-xl shadow-none p-8 mx-auto">
      <img src="/image_notakuto2.png" alt="Notakto" className="w-full h-64 object-cover rounded-lg mb-8" />
      <h2 className="text-3xl font-bold text-primary-700 mb-4">Notakto</h2>

      <h3 className="text-xl font-semibold text-secondary-900 mb-2">プロジェクト概要</h3>
      <p className="mb-6 text-secondary-700">
        ここにNotaktoプロジェクトの概要を詳しく記載します。
      </p>

      <h3 className="text-xl font-semibold text-secondary-900 mb-2">開発背景</h3>
      <p className="mb-6 text-secondary-700">
        どんな課題を解決したかったか、なぜこのプロジェクトを始めたかなど。
      </p>

      <h3 className="text-xl font-semibold text-secondary-900 mb-2">担当した機能</h3>
      <ul className="list-disc pl-6 mb-6 text-secondary-700">
        <li>ゲームロジックの実装</li>
        <li>セーブ・リドゥ・アンドゥ機能</li>
      </ul>

      <h3 className="text-xl font-semibold text-secondary-900 mb-2">技術的な工夫・成果</h3>
      <ul className="list-disc pl-6 mb-6 text-secondary-700">
        <li>効率的な状態管理</li>
        <li>UI/UXの工夫</li>
      </ul>

      <div className="flex flex-wrap gap-2 mb-6">
        <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium">C#</span>
      </div>

      <div className="flex space-x-4 mt-6">
        <a href="https://github.com/yourusername/project3" target="_blank" rel="noopener noreferrer" className="btn-secondary">GitHub</a>
      </div>
      <div className="mt-8 text-center">
        <Link to="/projects" className="btn-primary">Back to Projects</Link>
      </div>
    </div>
  </section>
);

export default ProjectNotaktoDetail; 