'use client'

import { Mail, Phone, MapPin, MessageCircle, Linkedin, Github } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card'
import { useTheme } from '../../lib/theme-context'

export default function ContactPage() {
  const { isDarkMode } = useTheme()
  
  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 to-gray-800' 
        : 'bg-gradient-to-br from-blue-50 to-red-50'
    }`}>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Get In Touch</h1>
            <p className={`text-xl max-w-2xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I'm always open to discussing new opportunities, collaborations, and interesting projects. 
              Let's connect and create something amazing together!
            </p>
          </div>

          {/* Centered Contact Information */}
          <div className="max-w-2xl mx-auto space-y-8">
            {/* Contact Information */}
            <Card className={`border-0 shadow-lg backdrop-blur-sm ${
              isDarkMode ? 'bg-gray-800/80' : 'bg-white/80'
            }`}>
              <CardHeader className="text-center">
                <CardTitle className={`text-2xl ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Contact Information</CardTitle>
                <CardDescription className={
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }>
                  Feel free to reach out through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4 p-3 rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-gray-700">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className={`font-semibold ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Email</h3>
                    <p className={`text-sm break-all ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>kareledgar17@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-3 rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-gray-700">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-red-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className={`font-semibold ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Phone</h3>
                    <p className={`text-sm ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>+62895618356242</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-3 rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-gray-700">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className={`font-semibold ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>Location</h3>
                    <p className={`text-sm ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>President University, Indonesia</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className={`border-0 shadow-lg backdrop-blur-sm ${
              isDarkMode ? 'bg-gray-800/80' : 'bg-white/80'
            }`}>
              <CardHeader className="text-center">
                <CardTitle className={`text-2xl ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Connect With Me</CardTitle>
                <CardDescription className={
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }>
                  Follow me on social media for updates and insights
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a 
                    href="https://wa.me/6289561835624" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`flex-1 inline-flex items-center justify-center px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                      isDarkMode 
                        ? 'border border-gray-600 text-gray-300 bg-gray-700 hover:bg-gray-600 hover:border-gray-500'
                        : 'border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/careledgar/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`flex-1 inline-flex items-center justify-center px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                      isDarkMode 
                        ? 'border border-gray-600 text-gray-300 bg-gray-700 hover:bg-gray-600 hover:border-gray-500'
                        : 'border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400'
                    }`}
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                  <a 
                    href="https://github.com/Secrell" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`flex-1 inline-flex items-center justify-center px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                      isDarkMode 
                        ? 'border border-gray-600 text-gray-300 bg-gray-700 hover:bg-gray-600 hover:border-gray-500'
                        : 'border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400'
                    }`}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Information */}
          <div className={`mt-12 p-6 sm:p-8 rounded-2xl text-center ${
            isDarkMode ? 'bg-gray-800/50' : 'bg-white/50'
          }`}>
            <h3 className={`text-xl sm:text-2xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Let's Work Together</h3>
            <p className={`max-w-2xl mx-auto mb-6 text-sm sm:text-base ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Whether you have a project in mind, want to collaborate, or just want to say hello, 
              I'd love to hear from you. I'm always excited to work on new challenges and 
              contribute to innovative solutions.
            </p>
            <div className="flex justify-center">
              <a 
                href="/cv/CV_CAREL EDGAR NAPITUPULU.pdf" 
                download="CV_CAREL_EDGAR_NAPITUPULU.pdf"
                className={`inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-md transition-colors ${
                  isDarkMode 
                    ? 'border border-gray-600 text-gray-300 bg-gray-700 hover:bg-gray-600 hover:border-gray-500'
                    : 'border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400'
                }`}
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
