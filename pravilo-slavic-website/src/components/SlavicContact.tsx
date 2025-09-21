'use client'

import { useState } from 'react'

export default function DarkContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="dark-section">
      <div className="max-w-7xl mx-auto">
        <h2 className="dark-section-title dark-slide-in">
          Свяжитесь с Нами
        </h2>
        <div className="grid md:grid-cols-2 gap-16">
          <div className="dark-card p-10 dark-slide-in">
            <h3 className="dark-feature-title mb-8 text-2xl">
              Записаться на Сеанс
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block dark-text font-semibold mb-3">
                  Имя *
                </label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 bg-dark-bg-secondary border border-dark-bg-tertiary rounded-lg focus:border-accent-gold focus:outline-none text-text-primary"
                  placeholder="Ваше имя"
                  required
                />
              </div>
              <div>
                <label className="block dark-text font-semibold mb-3">
                  Email *
                </label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 bg-dark-bg-secondary border border-dark-bg-tertiary rounded-lg focus:border-accent-gold focus:outline-none text-text-primary"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="block dark-text font-semibold mb-3">
                  Услуга
                </label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full p-4 bg-dark-bg-secondary border border-dark-bg-tertiary rounded-lg focus:border-accent-gold focus:outline-none text-text-primary"
                >
                  <option value="">Выберите услугу</option>
                  <option value="decompression">Декомпрессия позвоночника</option>
                  <option value="nature">Природная терапия</option>
                  <option value="massage">Массаж и терапия</option>
                  <option value="spiritual">Духовные практики</option>
                  <option value="adventure">Приключения</option>
                  <option value="handcrafted">Ручная работа</option>
                </select>
              </div>
              <div>
                <label className="block dark-text font-semibold mb-3">
                  Сообщение
                </label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-4 bg-dark-bg-secondary border border-dark-bg-tertiary rounded-lg focus:border-accent-gold focus:outline-none text-text-primary"
                  placeholder="Расскажите о ваших целях и предпочтениях..."
                />
              </div>
              <button type="submit" className="dark-button w-full">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Отправить Заявку
              </button>
            </form>
          </div>
          <div className="dark-slide-in">
            <h3 className="dark-subheading text-3xl mb-8">
              Контактная Информация
            </h3>
            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="dark-feature-icon w-16 h-16">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="dark-feature-title text-xl">
                    Email
                  </h4>
                  <p className="dark-text">
                    info@pravilo.club
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="dark-feature-icon w-16 h-16">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h4 className="dark-feature-title text-xl">
                    Telegram
                  </h4>
                  <p className="dark-text">
                    @pravilo_club
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="dark-feature-icon w-16 h-16">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="dark-feature-title text-xl">
                    Местоположение
                  </h4>
                  <p className="dark-text">
                    Ко Панган, Таиланд
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="dark-feature-icon w-16 h-16">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="dark-feature-title text-xl">
                    Часы работы
                  </h4>
                  <p className="dark-text">
                    Пн-Вс: 8:00 - 20:00
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 p-8 bg-dark-bg-secondary border border-dark-bg-tertiary rounded-lg">
              <h4 className="dark-feature-title mb-6 text-xl">
                Почему выбирают нас?
              </h4>
              <ul className="space-y-4">
                <li className="dark-text flex items-center">
                  <svg className="w-5 h-5 text-accent-gold mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Аутентичные славянские методы
                </li>
                <li className="dark-text flex items-center">
                  <svg className="w-5 h-5 text-accent-gold mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Индивидуальный подход к каждому
                </li>
                <li className="dark-text flex items-center">
                  <svg className="w-5 h-5 text-accent-gold mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Тропическая среда для исцеления
                </li>
                <li className="dark-text flex items-center">
                  <svg className="w-5 h-5 text-accent-gold mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Опытный мастер с образованием
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}