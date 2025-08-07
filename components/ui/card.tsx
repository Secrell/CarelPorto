'use client'

import * as React from "react"
import { useTheme } from "../../lib/theme-context"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}
interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}
interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}
interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}
interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}
interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className = '', children, ...props }: CardProps) {
  const { isDarkMode } = useTheme()
  const classes = `rounded-lg border shadow-sm transition-colors duration-300 ${
    isDarkMode 
      ? 'bg-gray-800 border-gray-700 text-white' 
      : 'bg-white border-gray-200 text-gray-900'
  } ${className}`.trim()
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export function CardHeader({ className = '', children, ...props }: CardHeaderProps) {
  const classes = `flex flex-col space-y-1.5 p-6 ${className}`.trim()
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export function CardTitle({ className = '', children, ...props }: CardTitleProps) {
  const { isDarkMode } = useTheme()
  const classes = `text-2xl font-semibold leading-none tracking-tight ${
    isDarkMode ? 'text-white' : 'text-gray-900'
  } ${className}`.trim()
  return (
    <h3 className={classes} {...props}>
      {children}
    </h3>
  )
}

export function CardDescription({ className = '', children, ...props }: CardDescriptionProps) {
  const { isDarkMode } = useTheme()
  const classes = `text-sm ${
    isDarkMode ? 'text-gray-400' : 'text-gray-500'
  } ${className}`.trim()
  return (
    <p className={classes} {...props}>
      {children}
    </p>
  )
}

export function CardContent({ className = '', children, ...props }: CardContentProps) {
  const classes = `p-6 pt-0 ${className}`.trim()
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export function CardFooter({ className = '', children, ...props }: CardFooterProps) {
  const classes = `flex items-center p-6 pt-0 ${className}`.trim()
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}
