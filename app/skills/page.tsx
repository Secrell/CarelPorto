'use client'

import { Code, Cpu, Globe, Palette } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card'
import { useTheme } from '../../lib/theme-context'

export default function SkillsPage() {
  const { isDarkMode } = useTheme()
  
  const skills = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Creating responsive and modern websites using HTML, CSS, and modern frameworks",
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Designing intuitive and user-friendly interfaces with modern design principles",
      technologies: ["Figma", "Canva"]
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "IoT Programming",
      description: "Developing IoT solutions using microcontrollers and sensor integration",
      technologies: ["Arduino", "ESP32", "MQTT", "Sensors"]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programming Languages",
      description: "Proficient in multiple programming languages for various applications",
      technologies: ["Python", "JavaScript", "Java", "PHP", "SQL"]
    }
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-blue-50 to-red-50'
    }`}>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Skills & Technologies</h1>
            <p className={`text-xl max-w-2xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              A comprehensive overview of my technical skills and the technologies I work with
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-100 rounded-lg text-blue-600 group-hover:bg-blue-200 transition-colors">
                      {skill.icon}
                    </div>
                    <CardTitle>{skill.title}</CardTitle>
                  </div>
                  <CardDescription>
                    {skill.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                          isDarkMode 
                            ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className={`text-2xl font-bold mb-8 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Professional Experience</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className={`p-6 rounded-lg shadow-lg ${
                isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
              }`}>
                <h3 className="text-lg font-semibold mb-2">Problem Solving</h3>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                  Analyzing complex problems and developing efficient solutions
                </p>
              </div>
              <div className={`p-6 rounded-lg shadow-lg ${
                isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
              }`}>
                <h3 className="text-lg font-semibold mb-2">Team Collaboration</h3>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                  Working effectively in team environments and project coordination
                </p>
              </div>
              <div className={`p-6 rounded-lg shadow-lg ${
                isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
              }`}>
                <h3 className="text-lg font-semibold mb-2">Continuous Learning</h3>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                  Staying updated with latest technologies and industry trends
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
