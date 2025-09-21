export default function SlavicMisha() {
  return (
    <section id="misha" className="slavic-section">
      <div className="max-w-7xl mx-auto">
        <h2 className="slavic-section-title slavic-slide-in">
          О Михаиле
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="slavic-card p-8 slavic-slide-in">
            <div className="slavic-feature-icon mb-6">
              👨‍⚕️
            </div>
            <h3 className="slavic-feature-title mb-4">
              Мастер Здоровья
            </h3>
            <p className="slavic-feature-text mb-4">
              Михаил — опытный практик с образованием в области спорта и 
              физической культуры из Москвы. Его путь начался с изучения 
              тела и здоровья, но самые важные уроки он получил через 
              путешествия и личные эксперименты.
            </p>
            <p className="slavic-feature-text">
              Много лет путешествуя по России и Азии, он изучил различные 
              традиционные методы исцеления и теперь делится этой мудростью 
              в тропическом раю.
            </p>
          </div>
          <div className="slavic-slide-in">
            <h3 className="slavic-subheading text-2xl mb-6">
              Путь Мастера
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="slavic-feature-icon w-12 h-12 text-lg">
                  🎓
                </div>
                <div>
                  <h4 className="slavic-feature-title text-lg">
                    Образование
                  </h4>
                  <p className="slavic-text">
                    Спортивный колледж и университет физической культуры в Москве
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="slavic-feature-icon w-12 h-12 text-lg">
                  🌍
                </div>
                <div>
                  <h4 className="slavic-feature-title text-lg">
                    Путешествия
                  </h4>
                  <p className="slavic-text">
                    Россия, Таиланд, Малайзия, Индонезия, Камбоджа, Вьетнам, Индия, Южная Корея
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="slavic-feature-icon w-12 h-12 text-lg">
                  🎵
                </div>
                <div>
                  <h4 className="slavic-feature-title text-lg">
                    Таланты
                  </h4>
                  <p className="slavic-text">
                    Музыкант (варган, гармоника), мастер рукоделия, создатель украшений
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="slavic-feature-icon w-12 h-12 text-lg">
                  🧘
                </div>
                <div>
                  <h4 className="slavic-feature-title text-lg">
                    Практики
                  </h4>
                  <p className="slavic-text">
                    Массаж, дыхательные техники, молитвы, внутренние практики благодарности
                  </p>
                </div>
              </div>
            </div>
            <button className="slavic-button mt-6">
              Записаться к Михаилу
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}