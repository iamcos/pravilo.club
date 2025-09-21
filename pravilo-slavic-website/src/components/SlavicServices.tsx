export default function DarkServices() {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Декомпрессия Позвоночника",
      description: "Глубокое расслабление и вытяжение позвоночника с помощью традиционного славянского метода",
      features: ["90-минутная сессия", "Персональная оценка", "Глубокое расслабление", "Индивидуальный подход"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: "Природная Терапия",
      description: "Соединение с природой через лесные прогулки, водопады и тропические леса",
      features: ["Бамбуковые леса", "Водопады", "Закатные походы", "Пляжный кемпинг"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      ),
      title: "Ручная Работа",
      description: "Уникальные украшения из проволоки и кристаллов, деревянные трубки ручной работы",
      features: ["Кристальные украшения", "Деревянные трубки", "Коралловые изделия", "Индивидуальный дизайн"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        </svg>
      ),
      title: "Духовные Практики",
      description: "Священные огненные церемонии, ритуалы инициации и древние славянские практики",
      features: ["Огненные церемонии", "Природные ритуалы", "Предковая мудрость", "Элементальное равновесие"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Массаж и Терапия",
      description: "Профессиональный массаж, энергетическая работа и восстановительные сеансы",
      features: ["Глубокий массаж", "Выравнивание позвоночника", "Энергетический баланс", "Спортивное восстановление"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: "Приключения",
      description: "Походы к водопадам, восхождения на горы, кемпинг и скалолазание в тропиках",
      features: ["Горные походы", "Скалолазание", "Водопадные туры", "Прибрежные приключения"]
    }
  ]

  return (
    <section id="services" className="dark-section">
      <div className="max-w-7xl mx-auto">
        <h2 className="dark-section-title dark-slide-in">
          Наши Услуги
        </h2>
        <div className="dark-grid">
          {services.map((service, index) => (
            <div key={index} className="dark-feature-card dark-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="dark-feature-icon">
                {service.icon}
              </div>
              <h3 className="dark-feature-title">
                {service.title}
              </h3>
              <p className="dark-feature-text mb-6">
                {service.description}
              </p>
              <ul className="text-left space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="dark-text flex items-center">
                    <svg className="w-5 h-5 text-accent-gold mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="dark-button w-full">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Записаться
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}