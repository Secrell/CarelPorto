'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useTheme } from '../lib/theme-context'
import { useState } from 'react'

export function Navigation() {
  const pathname = usePathname()
  const { isDarkMode, toggleDarkMode } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/skills', label: 'Skills' },
    { href: '/tools', label: 'Tools' },
    { href: '/contact', label: 'Contact' }
  ]

  return (
    <nav className={`shadow-sm sticky top-0 z-50 transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900 border-b border-gray-700' : 'bg-white'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
              Portfolio
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      pathname === item.href
                        ? isDarkMode 
                          ? 'bg-blue-900 text-blue-300'
                          : 'bg-blue-100 text-blue-700'
                        : isDarkMode
                          ? 'text-gray-300 hover:bg-gray-800 hover:text-white'
                          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                isDarkMode 
                  ? 'bg-yellow-500 text-gray-900 hover:bg-yellow-400' 
                  : 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
              }`}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
                isDarkMode 
                  ? 'text-gray-300 hover:bg-gray-800 hover:text-white' 
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${
              isDarkMode ? 'bg-gray-900 border-t border-gray-700' : 'bg-white border-t border-gray-200'
            }`}>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    pathname === item.href
                      ? isDarkMode 
                        ? 'bg-blue-900 text-blue-300'
                        : 'bg-blue-100 text-blue-700'
                      : isDarkMode
                        ? 'text-gray-300 hover:bg-gray-800 hover:text-white'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
