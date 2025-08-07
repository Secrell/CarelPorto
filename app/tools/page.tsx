'use client'

import { Code, Database, Cpu, Globe, Wrench, Monitor, Lamp, Brain } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card'
import { useTheme } from '../../lib/theme-context'

export default function ToolsPage() {
  const { isDarkMode } = useTheme()
  const toolCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Code Editors & IDEs",
      tools: [
        { name: "Visual Studio Code", description: "Primary code editor for web development" },
        { name: "Arduino IDE", description: "For IoT and microcontroller programming" }
      ]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      tools: [
        { name: "XAMPP", description: "Local development server environment" },
        { name: "Node.js", description: "JavaScript runtime for server-side development" },
        { name: "Git & GitHub", description: "Version control and collaboration" }
      ]
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "IoT & Hardware",
      tools: [
        { name: "MQTTX", description: "MQTT client for IoT communication testing" },
        { name: "Arduino", description: "Microcontroller programming and development" }
      ]
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Design & UI/UX",
      tools: [
        { name: "Figma", description: "UI/UX design and prototyping" },
        { name: "Canva", description: "Graphic design and visual content" },
        { name: "Adobe Photoshop", description: "Image editing and manipulation" }
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database & Backend",
      tools: [
        { name: "MySQL", description: "Relational database management" },
        { name: "phpMyAdmin", description: "Database administration interface" },
        { name: "Firebase", description: "Backend-as-a-Service platform" }
      ]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Tools",
      tools: [
        { name: "Claude", description: "AI-powered code suggestions and debugging" },
        { name: "Vercel", description: "Deployment and hosting platform" },
        { name: "Tailwind", description: "Utility-first CSS framework" },
        { name: "ChatGPT", description: "AI-powered code suggestions and debugging" }
      ]
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
            }`}>Development Tools</h1>
            <p className={`text-xl max-w-2xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              A comprehensive list of tools and technologies I use for development, design, and project management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toolCategories.map((category, index) => (
              <Card key={index} className={`border-0 shadow-lg backdrop-blur-sm ${
                isDarkMode ? 'bg-gray-800/80' : 'bg-white/80'
              }`}>
                <CardHeader>
                  <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-4 ${
                    isDarkMode 
                      ? 'bg-gradient-to-br from-blue-900 to-purple-900 text-blue-400' 
                      : 'bg-gradient-to-br from-blue-100 to-red-100 text-blue-600'
                  }`}>
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.tools.map((tool, toolIndex) => (
                      <div key={toolIndex} className="border-l-4 border-blue-200 pl-4">
                        <h4 className="font-semibold text-gray-900">{tool.name}</h4>
                        <p className="text-sm text-gray-600">{tool.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-white/50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Development Workflow</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Planning & Design</h4>
                <p className="text-gray-600">Using Figma and Canva for wireframing and prototyping</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">2</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Development</h4>
                <p className="text-gray-600">Coding with VS Code, testing with local servers and debugging tools</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Deployment</h4>
                <p className="text-gray-600">Version control with Git and deployment to production environments</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
