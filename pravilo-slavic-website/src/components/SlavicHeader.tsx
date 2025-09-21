'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function DarkHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="dark-nav fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="#home" className="dark-heading text-3xl hover:text-accent-gold transition-all duration-300">
            <span className="bg-gradient-to-r from-accent-gold to-accent-red bg-clip-text text-transparent">
              Pravilo.Club
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            <Link href="#home" className="dark-nav-item">Главная</Link>
            <Link href="#about" className="dark-nav-item">О Правиле</Link>
            <Link href="#services" className="dark-nav-item">Услуги</Link>
            <Link href="#misha" className="dark-nav-item">О Михаиле</Link>
            <Link href="#contact" className="dark-nav-item">Контакты</Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="dark-button-outline">
              Записаться
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 rounded-lg bg-dark-bg-hover hover:bg-dark-bg-tertiary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-dark-bg-card border-t border-dark-bg-tertiary shadow-xl">
            <div className="px-4 pt-4 pb-6 space-y-2">
              <Link href="#home" className="dark-nav-item block">Главная</Link>
              <Link href="#about" className="dark-nav-item block">О Правиле</Link>
              <Link href="#services" className="dark-nav-item block">Услуги</Link>
              <Link href="#misha" className="dark-nav-item block">О Михаиле</Link>
              <Link href="#contact" className="dark-nav-item block">Контакты</Link>
              <div className="pt-4">
                <button className="dark-button w-full">
                  Записаться на Сеанс
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}