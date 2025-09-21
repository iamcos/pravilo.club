'use client'

import { useState } from 'react'

export default function SlavicContact() {
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
    <section id="contact" className="slavic-section">
      <div className="max-w-7xl mx-auto">
        <h2 className="slavic-section-title slavic-slide-in">
          Свяжитесь с Нами
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="slavic-card p-8 slavic-slide-in">
            <h3 className="slavic-feature-title mb-6">
              Записаться на Сеанс
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block slavic-text font-semibold mb-2">
                  Имя *
                </label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border-2 border-gold-300 rounded-lg focus:border-red-500 focus:outline-none"
                  placeholder="Ваше имя"
                  required
                />
              </div>
              <div>
                <label className="block slavic-text font-semibold mb-2">
                  Email *
                </label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border-2 border-gold-300 rounded-lg focus:border-red-500 focus:outline-none"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="block slavic-text font-semibold mb-2">
                  Услуга
                </label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full p-3 border-2 border-gold-300 rounded-lg focus:border-red-500 focus:outline-none"
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
                <label className="block slavic-text font-semibold mb-2">
                  Сообщение
                </label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-3 border-2 border-gold-300 rounded-lg focus:border-red-500 focus:outline-none"
                  placeholder="Расскажите о ваших целях и предпочтениях..."
                />
              </div>
              <button type="submit" className="slavic-button w-full">
                Отправить Заявку
              </button>
            </form>
          </div>
          <div className="slavic-slide-in">
            <h3 className="slavic-subheading text-2xl mb-6">
              Контактная Информация
            </h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="slavic-feature-icon w-12 h-12 text-lg">
                  📧
                </div>
                <div>
                  <h4 className="slavic-feature-title text-lg">
                    Email
                  </h4>
                  <p className="slavic-text">
                    info@pravilo.club
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="slavic-feature-icon w-12 h-12 text-lg">
                  📱
                </div>
                <div>
                  <h4 className="slavic-feature-title text-lg">
                    Telegram
                  </h4>
                  <p className="slavic-text">
                    @pravilo_club
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="slavic-feature-icon w-12 h-12 text-lg">
                  🌴
                </div>
                <div>
                  <h4 className="slavic-feature-title text-lg">
                    Местоположение
                  </h4>
                  <p className="slavic-text">
                    Тропический рай для исцеления
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="slavic-feature-icon w-12 h-12 text-lg">
                  ⏰
                </div>
                <div>
                  <h4 className="slavic-feature-title text-lg">
                    Часы работы
                  </h4>
                  <p className="slavic-text">
                    Пн-Вс: 8:00 - 20:00
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gold-50 border-2 border-gold-200 rounded-lg">
              <h4 className="slavic-feature-title mb-4">
                Почему выбирают нас?
              </h4>
              <ul className="space-y-2">
                <li className="slavic-text flex items-center">
                  <span className="text-gold-500 mr-2">✓</span>
                  Аутентичные славянские методы
                </li>
                <li className="slavic-text flex items-center">
                  <span className="text-gold-500 mr-2">✓</span>
                  Индивидуальный подход к каждому
                </li>
                <li className="slavic-text flex items-center">
                  <span className="text-gold-500 mr-2">✓</span>
                  Тропическая среда для исцеления
                </li>
                <li className="slavic-text flex items-center">
                  <span className="text-gold-500 mr-2">✓</span>
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