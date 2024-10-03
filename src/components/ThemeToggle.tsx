'use client'

import { useTheme } from '@/contexts/ThemeContext'
import { Moon, Sun } from 'lucide-react'

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-between w-full p-2 rounded-md bg-gray-100 dark:bg-gray-700 text-sm font-medium"
    >
      <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
      {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  )
}