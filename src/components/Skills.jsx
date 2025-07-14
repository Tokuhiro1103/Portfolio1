import React from 'react'
import { Link } from 'react-router-dom'
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaMobile, 
  FaBootstrap, 
  FaApple,
  FaPython,
  FaFlask,
  FaJava,
  FaMicrosoft,
  FaDatabase,
  FaGitAlt
} from 'react-icons/fa'
import { SiMongodb } from "react-icons/si";
import GreetingSection from './GreetingSection';

const skillCategories = [
  {
    name: 'Frontend',
    skills: [
      { name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
      { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500' },
      { name: 'JavaScript', icon: FaJs, color: 'text-yellow-500' },
      { name: 'React.js', icon: FaReact, color: 'text-blue-400' },
      { name: 'ReactNative', icon: FaMobile, color: 'text-blue-600' },
      { name: 'BootStrap', icon: FaBootstrap, color: 'text-purple-500' },
      { name: 'Swift', icon: FaApple, color: 'text-orange-400' }
    ]
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Python', icon: FaPython, color: 'text-blue-600' },
      { name: 'Flask', icon: FaFlask, color: 'text-gray-600' },
      { name: 'Java', icon: FaJava, color: 'text-red-500' },
      { name: 'C#', icon: FaMicrosoft, color: 'text-purple-600' }
    ]
  },
  {
    name: 'Database & Tools',
    skills: [
      { name: 'MySQL', icon: FaDatabase, color: 'text-blue-500' },
      { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
      { name: 'Git', icon: FaGitAlt, color: 'text-orange-600' }
    ]
  }
]

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-gradient-primary">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Skills
          </h2>
          <p className="text-secondary-600 text-lg max-w-2xl mx-auto">
            Here are the main technologies and tools I use.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {skillCategories.map((category) => (
            <div key={category.name} className="card hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-xl font-bold text-secondary-900 mb-6 text-center">
                {category.name}
              </h3>
              <ul className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill) => {
                  const IconComponent = skill.icon
                  return (
                    <li key={skill.name} className="px-4 py-3 bg-white text-primary-700 rounded-full font-medium shadow-md text-base flex items-center gap-2 hover:shadow-lg transition-all duration-200 hover:scale-105">
                      <IconComponent className={`text-xl ${skill.color}`} />
                      {skill.name}
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      <GreetingSection />
    </section>
  )
}

export default Skills 