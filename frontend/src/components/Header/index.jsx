import { useState } from 'react'
import { MdLightMode, MdDarkMode } from 'react-icons/md'
import { HiMenu, HiX } from 'react-icons/hi'

export default function Header({ theme, toggleTheme, searchTerm, setSearchTerm }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-teal-50 dark:bg-gray-800 border-b shadow-sm dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div to="/" className="flex items-center space-x-2 focus:outline-none rounded">
          <div className="w-8 h-8 rounded bg-gradient-to-r from-blue-500 to-purple-600" />
          <span className="font-semibold text-gray-900 dark:text-gray-100">Contacts Dashboard</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-sm">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {theme === 'light' ? <MdDarkMode size={20} /> : <MdLightMode size={20} />}
          </button>
        </nav>
        <button
          onClick={() => setOpen(o => !o)}
          className="md:hidden p-2 rounded text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Toggle navigation menu"
        >
          {open ? <HiX size={22} /> : <HiMenu size={22} />}
        </button>
      </div>
      {open && (
        <div onClick={() => { toggleTheme(); setOpen(false) }} className="md:hidden border-t dark:border-gray-700 px-4 pb-4 space-y-2 bg-white dark:bg-gray-800">
          <button
            
            className="flex items-center space-x-2 py-2 text-gray-600 dark:text-gray-300"
          >
            {theme === 'light' ? <MdDarkMode /> : <MdLightMode />}
            <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>

          </button>
        </div>
      )}
    </header>
  )
}