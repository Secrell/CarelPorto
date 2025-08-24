'use client'

import { useState, useEffect } from 'react'
import { Code, Cpu, Globe, Palette, Mail, Linkedin, Github, Download, ExternalLink, Star, Coffee, Zap } from 'lucide-react'
import { useTheme } from '../lib/theme-context'

export default function HomePage() {
  const [typedText, setTypedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const { isDarkMode } = useTheme()
  const fullText = "IoT Programming"

  // Typing animation effect
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(prev => prev + fullText[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, fullText])

  const skills = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Creating responsive and modern websites with cutting-edge technologies",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "IoT Programming",
      description: "Developing smart solutions with microcontrollers and sensor integration",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Designing intuitive interfaces with modern design principles",
      color: "from-orange-500 to-red-500"
    }
  ]

  const stats = [
    { icon: <Code className="w-6 h-6" />, number: "30+", label: "Projects Completed" },
    { icon: <Coffee className="w-6 h-6" />, number: "999+", label: "Cups of Coffee" },
    { icon: <Star className="w-6 h-6" />, number: "3.33", label: "GPA Achievement" },
    { icon: <Zap className="w-6 h-6" />, number: "24/7", label: "Learning Mode" }
  ]

  const featuredProjects = [
    {
      title: "Smart Attendance System",
      description: "Arduino-based attendance automation with sensor monitoring and data logging on websites",
      tech: "Arduino, MQTT, MySQL, Microcontroller, Sensors, VsCode, HTML, CSS, JavaScript",
      status: "Completed"
    },
    {
      title: "Digital Twin for Final Assembly",
      description: "Arduino-based digital twin system for real-time monitoring and control the workers on the assembly line websites",
      tech: "Arduino, MQTT, MySQL, Microcontroller, Sensors, VsCode, HTML, CSS, JavaScript",
      status: "In Progress"
    },
    {
      title: "Smart Garden System",
      description: "Website for monitoring and controlling garden sensors on websites",
      tech: "ESP32, React, Arduino, JavaScript, HTML, CSS, Microcontroller, MQTTX",
      status: "Planning"
    }
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 relative overflow-hidden ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-blue-50 via-white to-red-50'
    }`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20 animate-pulse ${
          isDarkMode ? 'bg-blue-400' : 'bg-blue-200'
        }`}></div>
        <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-20 animate-pulse ${
          isDarkMode ? 'bg-purple-400' : 'bg-red-200'
        }`} style={{ animationDelay: '1s' }}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full opacity-10 animate-ping ${
          isDarkMode ? 'bg-cyan-400' : 'bg-purple-200'
        }`} style={{ animationDuration: '3s' }}></div>
      </div>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12">
            <div className="mb-4">
              <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 animate-bounce ${
                isDarkMode 
                  ? 'bg-blue-900 text-blue-300' 
                  : 'bg-blue-100 text-blue-800'
              }`}>
                👋 Welcome to my portfolio
              </span>
            </div>
            <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">Carel Edgar Napitupulu</span>
            </h1>
            <p className={`text-xl md:text-2xl mb-4 max-w-3xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              7th-semester Computer Science Student specializing in
            </p>
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent min-h-[1.2em]">
              {typedText}<span className="animate-pulse">|</span>
            </div>
            <p className={`text-lg mt-4 max-w-2xl mx-auto ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              at President University
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a 
                href="/cv/CV_CAREL EDGAR NAPITUPULU.pdf" 
                download="CV_CAREL_EDGAR_NAPITUPULU.pdf"
                className="group inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className={`text-2xl md:text-3xl font-bold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>{stat.number}</div>
                <div className={`text-sm ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>What I Do</h2>
            <p className={`text-lg max-w-2xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Passionate about creating innovative solutions through technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className={`group rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border ${
                isDarkMode 
                  ? 'bg-gray-800 border-gray-700 hover:bg-gray-750' 
                  : 'bg-white border-gray-100'
              }`}>
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${skill.color} text-white rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {skill.icon}
                </div>
                <h3 className={`text-xl font-bold mb-4 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>{skill.title}</h3>
                <p className={`leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Featured Projects</h2>
            <p className={`text-lg max-w-2xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              A showcase of my recent work and ongoing projects
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={index} className={`rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border group ${
                isDarkMode 
                  ? 'bg-gray-800 border-gray-700' 
                  : 'bg-white border-gray-100'
              }`}>
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                    project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                  <ExternalLink className={`w-4 h-4 transition-colors ${
                    isDarkMode 
                      ? 'text-gray-500 group-hover:text-blue-400' 
                      : 'text-gray-400 group-hover:text-blue-500'
                  }`} />
                </div>
                <h3 className={`text-lg font-bold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>{project.title}</h3>
                <p className={`text-sm mb-4 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>{project.description}</p>
                <div className="text-xs text-blue-600 font-medium">{project.tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
              <p className="text-xl mb-8 opacity-90">
                I am Ready to take on new challenges and collaborate on exciting projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a 
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm font-medium bg-white text-blue-600 hover:bg-gray-100 transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
