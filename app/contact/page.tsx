'use client'

import { Mail, Phone, MapPin, Instagram, Linkedin, Github } from 'lucide-react'
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
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Contact Information</CardTitle>
                <CardDescription>
                  Feel free to reach out through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-red-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">kareledgar17@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-red-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+62895618356242</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-red-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Location</h3>
                    <p className="text-gray-600">President University, Indonesia</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Connect With Me</CardTitle>
                <CardDescription>
                  Follow me on social media for updates and insights
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.instagram.com/edgarcarel/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-6 py-3 text-sm font-medium border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400 transition-colors"
                  >
                    <Instagram className="w-5 h-5 mr-2" />
                    Instagram
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/careledgar/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-6 py-3 text-sm font-medium border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </a>
                  <a 
                    href="https://github.com/Secrell" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-6 py-3 text-sm font-medium border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400 transition-colors"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Information */}
          <div className="mt-16 bg-white/50 p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Let's Work Together</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Whether you have a project in mind, want to collaborate, or just want to say hello, 
              I'd love to hear from you. I'm always excited to work on new challenges and 
              contribute to innovative solutions.
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="/cv/CV_CAREL EDGAR NAPITUPULU.pdf" 
                download="CV_CAREL_EDGAR_NAPITUPULU.pdf"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400 transition-colors"
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
