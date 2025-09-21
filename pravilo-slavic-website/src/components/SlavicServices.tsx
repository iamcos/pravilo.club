export default function SlavicServices() {
  const services = [
    {
      icon: "🧘",
      title: "Декомпрессия Позвоночника",
      description: "Глубокое расслабление и вытяжение позвоночника с помощью традиционного славянского метода",
      features: ["90-минутная сессия", "Персональная оценка", "Глубокое расслабление", "Индивидуальный подход"]
    },
    {
      icon: "🌿",
      title: "Природная Терапия",
      description: "Соединение с природой через лесные прогулки, водопады и тропические леса",
      features: ["Бамбуковые леса", "Водопады", "Закатные походы", "Пляжный кемпинг"]
    },
    {
      icon: "🎨",
      title: "Ручная Работа",
      description: "Уникальные украшения из проволоки и кристаллов, деревянные трубки ручной работы",
      features: ["Кристальные украшения", "Деревянные трубки", "Коралловые изделия", "Индивидуальный дизайн"]
    },
    {
      icon: "🔥",
      title: "Духовные Практики",
      description: "Священные огненные церемонии, ритуалы инициации и древние славянские практики",
      features: ["Огненные церемонии", "Природные ритуалы", "Предковая мудрость", "Элементальное равновесие"]
    },
    {
      icon: "💆",
      title: "Массаж и Терапия",
      description: "Профессиональный массаж, энергетическая работа и восстановительные сеансы",
      features: ["Глубокий массаж", "Выравнивание позвоночника", "Энергетический баланс", "Спортивное восстановление"]
    },
    {
      icon: "🏔️",
      title: "Приключения",
      description: "Походы к водопадам, восхождения на горы, кемпинг и скалолазание в тропиках",
      features: ["Горные походы", "Скалолазание", "Водопадные туры", "Прибрежные приключения"]
    }
  ]

  return (
    <section id="services" className="slavic-section">
      <div className="max-w-7xl mx-auto">
        <h2 className="slavic-section-title slavic-slide-in">
          Наши Услуги
        </h2>
        <div className="slavic-grid">
          {services.map((service, index) => (
            <div key={index} className="slavic-feature-card slavic-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="slavic-feature-icon">
                {service.icon}
              </div>
              <h3 className="slavic-feature-title">
                {service.title}
              </h3>
              <p className="slavic-feature-text mb-4">
                {service.description}
              </p>
              <ul className="text-left space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="slavic-text flex items-center">
                    <span className="text-gold-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="slavic-button w-full">
                Записаться
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}