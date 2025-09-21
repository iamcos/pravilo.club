export default function DarkAbout() {
  return (
    <section id="about" className="dark-section">
      <div className="max-w-7xl mx-auto">
        <h2 className="dark-section-title dark-slide-in">
          Что такое Правило?
        </h2>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="dark-slide-in">
            <h3 className="dark-subheading text-3xl mb-8">
              Древняя Славянская Мудрость
            </h3>
            <p className="dark-text text-lg mb-6 leading-relaxed">
              Правило — это уникальный древнеславянский тренажер, который позволяет 
              достичь глубокой декомпрессии позвоночника и суставов. Он работает 
              за счет естественной горизонтальной вытяжки, где под массой собственного 
              тела равномерно распределяется воздействие на весь опорно-двигательный аппарат.
            </p>
            <p className="dark-text text-lg mb-8 leading-relaxed">
              Это способствует снятию компрессии с межпозвоночных дисков, 
              освобождению защемленных нервов и улучшению кровообращения. 
              Одновременно происходит мягкое растяжение мышц, связок и сухожилий.
            </p>
            <div className="space-y-6">
              <div className="flex items-center space-x-6">
                <div className="dark-feature-icon w-16 h-16">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="dark-feature-title text-xl">
                    Быстрые Результаты
                  </h4>
                  <p className="dark-text">
                    Ощутите облегчение уже после первого сеанса
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="dark-feature-icon w-16 h-16">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="dark-feature-title text-xl">
                    Безопасность
                  </h4>
                  <p className="dark-text">
                    Проверенный временем метод без побочных эффектов
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="dark-feature-icon w-16 h-16">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="dark-feature-title text-xl">
                    Естественность
                  </h4>
                  <p className="dark-text">
                    Использует только силу тяжести и вес собственного тела
                  </p>
                </div>
              </div>
            </div>
            <button className="dark-button mt-8">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Подробнее о Методе
            </button>
          </div>
          <div className="dark-card p-10 dark-slide-in">
            <div className="dark-feature-icon mb-8">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h4 className="dark-feature-title mb-6 text-2xl">
              Традиционная Мудрость
            </h4>
            <p className="dark-feature-text mb-8 text-lg">
              Метод, проверенный веками славянскими воинами и мудрецами. 
              Древние знания, адаптированные для современного мира.
            </p>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-dark-bg-secondary rounded-lg">
                <span className="dark-text font-semibold">Эффективность:</span>
                <span className="text-accent-gold font-bold text-xl">95%</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-dark-bg-secondary rounded-lg">
                <span className="dark-text font-semibold">Безопасность:</span>
                <span className="text-accent-green font-bold text-xl">100%</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-dark-bg-secondary rounded-lg">
                <span className="dark-text font-semibold">Удовлетворенность:</span>
                <span className="text-accent-blue font-bold text-xl">98%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}