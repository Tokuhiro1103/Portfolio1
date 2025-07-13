import React from 'react';
import { Link } from 'react-router-dom';

const ProjectTProDetail = () => (
  <section className="section-padding bg-white min-h-screen flex items-center justify-center">
    <div className="w-full max-w-5xl bg-white rounded-xl shadow-none p-8 mx-auto">
      <img src="/image_Tpro1.jpg" alt="TPro application" className="w-full h-64 object-cover rounded-lg mb-8" />
      <h2 className="text-3xl font-bold text-primary-700 mb-4">TPro application</h2>

      <h3 className="text-xl font-semibold text-secondary-900 mb-2">プロジェクト概要</h3>
      <p className="mb-6 text-secondary-700">
        ここにTPro applicationの概要を詳しく記載します。
      </p>

      <h3 className="text-xl font-semibold text-secondary-900 mb-2">開発背景</h3>
      <p className="mb-6 text-secondary-700">
        どんな課題を解決したかったか、なぜこのプロジェクトを始めたかなど。
      </p>

      <h3 className="text-xl font-semibold text-secondary-900 mb-2">担当した機能</h3>
      <ul className="list-disc pl-6 mb-6 text-secondary-700">
        <li>BLE通信機能の実装</li>
        <li>iOSアプリのUI設計</li>
        <li>テスト・デバッグ</li>
      </ul>

      <h3 className="text-xl font-semibold text-secondary-900 mb-2">技術的な工夫・成果</h3>
      <ul className="list-disc pl-6 mb-6 text-secondary-700">
        <li>SwiftのCoreBluetoothを活用した安定した接続</li>
        <li>UI/UXの改善</li>
      </ul>

      <div className="flex flex-wrap gap-2 mb-6">
        <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium">Swift</span>
        <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium">BLE</span>
        <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium">CoreBluetooth</span>
      </div>

      <div className="flex space-x-4 mt-6">
        <a href="https://github.com/yourusername/project1" target="_blank" rel="noopener noreferrer" className="btn-secondary">GitHub</a>
        <a href="https://project1-demo.com" target="_blank" rel="noopener noreferrer" className="btn-primary">Demo</a>
      </div>
      <div className="mt-8 text-center">
        <Link to="/projects" className="btn-primary">Back to Projects</Link>
      </div>
    </div>
  </section>
);

export default ProjectTProDetail; 