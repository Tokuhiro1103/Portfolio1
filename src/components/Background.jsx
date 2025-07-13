import React from 'react'

const Background = () => {
  // 経歴データ
  const backgrounds = [
    {
      id: 1,
      company: 'DMM Boost',
      position: 'Customer Experience and Consultant',
      period: 'Mar 2023 - Nov 2023',
      description: 'Worked as an implementation consultant for LINE Official Account extension tool as an common advertisement tool in Japan, and  a local SEO (MEO) support service',
    },
    {
      id: 2,
      company: 'Ishida Co',
      position: 'Sales Representative',
      period: 'Apr 2020 - Mar 2022',
      description: 'Worked as a sales representative at a weighing equipment manufacturer, responsible for end-to-end B2B sales activities, including proposal, installation, and post-sales support. \nAchieved ¥150 million (approx. AUD 1.5 million) in annual sales',
    },
  ]

  // 学歴データ
  const education = [
    {
      id: 1,
      school: 'Queensland University of Technology (QUT)',
      degree: 'Master of Information Technology, majoring Computer Science',
      period: 'Feb 2024 - Present',
      achievements: [
        'Programming Language: HTML, CSS, javaScript, Python, C#, Swift',
        'Flamework: React.js, ReactNative, Flask',
        'Engaged in a project to develop iOS application with Swift and implement BLE connection functionality',
        'Other knowledge: SQL, Algorithms, Network, DataMining, Linux '
      ]
    },
    {
      id: 2,
      school: 'Java Programming Job Training',
      period: 'Jul 2022- Oct 2022',
      description: 'Bootcamp for Java programming by a Japanese public institution',
      achievements: [
        'Developed a web application with Java, JSP, Servlet, and MySQL',
      ]
    },
    {
      id: 3,
      school: 'Osaka City University',
      degree: 'Bachelor of Arts, majoring Sociology',
      period: 'Apr 2016 - Mar 2020',
      achievements: [
        'Engaged in field work and in-person interview',
        'Data analysis with R',
        'Team management in a student sailing club'
      ]
    },
  ]

  return (
    <section id="background" className="section-padding bg-gradient-secondary">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            My Background
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
              {backgrounds.map((background, index) => (
                <div key={background.id} className="relative">
                  {/* タイムライン */}
                  <div className="absolute left-0 top-0 w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  {index < backgrounds.length - 1 && (
                    <div className="absolute left-2 top-4 w-0.5 h-full bg-gradient-to-b from-primary-300 to-primary-100"></div>
                  )}
                  <div className="ml-8">
                    <div className="card hover:shadow-2xl transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <h4 className="text-lg font-bold text-secondary-900">
                          {background.position}
                        </h4>
                        <span className="text-sm text-primary-600 font-medium bg-primary-50 px-3 py-1 rounded-full">
                          {background.period}
                        </span>
                      </div>
                      <h5 className="text-primary-600 font-semibold mb-2">
                        {background.company}
                      </h5>
                      <p className="text-secondary-600 mb-4">
                        {background.description.split('\n').map((line, idx) => (
                          <React.Fragment key={idx}>
                            {line}<br />
                          </React.Fragment>
                        ))}
                      </p>
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
                <span className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">E</span>
                EDUCATION
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={edu.id} className="relative">
                    {/* タイムライン */}
                    <div className="absolute left-0 top-0 w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                    {index < education.length - 1 && (
                      <div className="absolute left-2 top-4 w-0.5 h-full bg-gradient-to-b from-green-400 via-green-200 to-green-50"></div>
                    )}
                    <div className="ml-8 card hover:shadow-2xl transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <h4 className="text-lg font-bold text-secondary-900">
                          {edu.school}
                        </h4>
                        <span className="text-sm text-green-600 font-medium bg-green-50 px-3 py-1 rounded-full">
                          {edu.period}
                        </span>
                      </div>
                      <h5 className="text-green-600 font-semibold mb-2">
                        {edu.degree}
                      </h5>
                      <p className="text-secondary-600 mb-4">
                        {edu.description}
                      </p>
                      <div>
                        <h6 className="font-semibold text-secondary-900 mb-2">
                          What I learned：
                        </h6>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span className="text-sm text-secondary-700">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Background 