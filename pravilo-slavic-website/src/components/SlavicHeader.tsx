'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function SlavicHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="slavic-nav fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="#home" className="slavic-heading text-2xl hover:text-gold-500 transition-colors">
            Pravilo.Club
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="#home" className="slavic-nav-item">Главная</Link>
            <Link href="#about" className="slavic-nav-item">О Правиле</Link>
            <Link href="#services" className="slavic-nav-item">Услуги</Link>
            <Link href="#misha" className="slavic-nav-item">О Михаиле</Link>
            <Link href="#contact" className="slavic-nav-item">Контакты</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden slavic-button p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t-2 border-gold-300 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="#home" className="slavic-nav-item block">Главная</Link>
              <Link href="#about" className="slavic-nav-item block">О Правиле</Link>
              <Link href="#services" className="slavic-nav-item block">Услуги</Link>
              <Link href="#misha" className="slavic-nav-item block">О Михаиле</Link>
              <Link href="#contact" className="slavic-nav-item block">Контакты</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}