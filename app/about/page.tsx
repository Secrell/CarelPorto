'use client'

import { GraduationCap, Cpu } from 'lucide-react'
import { useTheme } from '../../lib/theme-context'

export default function AboutPage() {
  const { isDarkMode } = useTheme()
  
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
            }`}>About Me</h1>
            <p className={`text-xl max-w-2xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Passionate about technology and innovation, I'm currently pursuing my Computer Science degree 
              with a focus on Internet of Things programming.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <GraduationCap className="w-8 h-8 text-blue-600" />
                  <div>
                    <h3 className={`text-xl font-semibold ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Education</h3>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>7th-semester Computer Science Student</p>
                    <p className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>President University</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Cpu className="w-8 h-8 text-red-600" />
                  <div>
                    <h3 className={`text-xl font-semibold ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Specialization</h3>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>IoT Programming</p>
                    <p className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>Microcontroller Development</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-100 to-red-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What I Do</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Develop responsive websites and web applications</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span>Create intuitive UI/UX designs</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Build IoT projects with microcontrollers</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span>Integrate sensors and communication protocols</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Additional About Content */}
          <div className="mt-16 bg-white/50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">My Journey</h3>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                As a 7th-semester Computer Science student at President University, I've developed a passion for 
                creating innovative solutions that bridge the digital and physical worlds. My specialization in 
                IoT Programming has allowed me to explore the fascinating intersection of hardware and software.
              </p>
              <p className="mb-4">
                Throughout my academic journey, I've gained hands-on experience in web development, creating 
                responsive and user-friendly websites. My interest in UI/UX design stems from my belief that 
                technology should be accessible and intuitive for everyone.
              </p>
              <p>
                When I'm not coding, you'll find me experimenting with microcontrollers, building IoT projects 
                that solve real-world problems. I'm always eager to learn new technologies and take on 
                challenging projects that push the boundaries of what's possible.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
