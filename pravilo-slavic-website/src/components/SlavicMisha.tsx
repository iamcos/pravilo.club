export default function DarkMisha() {
  return (
    <section id="misha" className="dark-section">
      <div className="max-w-7xl mx-auto">
        <h2 className="dark-section-title dark-slide-in">
          О Михаиле
        </h2>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="dark-card p-10 dark-slide-in">
            <div className="dark-feature-icon mb-8">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="dark-feature-title mb-6 text-2xl">
              Мастер Здоровья
            </h3>
            <p className="dark-feature-text mb-6 leading-relaxed">
              Михаил — опытный практик с образованием в области спорта и 
              физической культуры из Москвы. Его путь начался с изучения 
              тела и здоровья, но самые важные уроки он получил через 
              путешествия и личные эксперименты.
            </p>
            <p className="dark-feature-text leading-relaxed">
              Много лет путешествуя по России и Азии, он изучил различные 
              традиционные методы исцеления и теперь делится этой мудростью 
              в тропическом раю.
            </p>
          </div>
          <div className="dark-slide-in">
            <h3 className="dark-subheading text-3xl mb-8">
              Путь Мастера
            </h3>
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="dark-feature-icon w-16 h-16">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <div>
                  <h4 className="dark-feature-title text-xl">
                    Образование
                  </h4>
                  <p className="dark-text">
                    Спортивный колледж и университет физической культуры в Москве
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="dark-feature-icon w-16 h-16">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="dark-feature-title text-xl">
                    Путешествия
                  </h4>
                  <p className="dark-text">
                    Россия, Таиланд, Малайзия, Индонезия, Камбоджа, Вьетнам, Индия, Южная Корея
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="dark-feature-icon w-16 h-16">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <div>
                  <h4 className="dark-feature-title text-xl">
                    Таланты
                  </h4>
                  <p className="dark-text">
                    Музыкант (варган, гармоника), мастер рукоделия, создатель украшений
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="dark-feature-icon w-16 h-16">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="dark-feature-title text-xl">
                    Практики
                  </h4>
                  <p className="dark-text">
                    Массаж, дыхательные техники, молитвы, внутренние практики благодарности
                  </p>
                </div>
              </div>
            </div>
            <button className="dark-button mt-8">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Записаться к Михаилу
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}