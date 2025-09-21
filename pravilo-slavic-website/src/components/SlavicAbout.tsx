export default function SlavicAbout() {
  return (
    <section id="about" className="slavic-section">
      <div className="max-w-7xl mx-auto">
        <h2 className="slavic-section-title slavic-slide-in">
          Что такое Правило?
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="slavic-slide-in">
            <h3 className="slavic-subheading text-2xl mb-6">
              Древняя Славянская Мудрость
            </h3>
            <p className="slavic-text text-lg mb-6">
              Правило — это уникальный древнеславянский тренажер, который позволяет 
              достичь глубокой декомпрессии позвоночника и суставов. Он работает 
              за счет естественной горизонтальной вытяжки, где под массой собственного 
              тела равномерно распределяется воздействие на весь опорно-двигательный аппарат.
            </p>
            <p className="slavic-text text-lg mb-6">
              Это способствует снятию компрессии с межпозвоночных дисков, 
              освобождению защемленных нервов и улучшению кровообращения. 
              Одновременно происходит мягкое растяжение мышц, связок и сухожилий.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="slavic-feature-icon w-12 h-12 text-lg">
                  ⚡
                </div>
                <div>
                  <h4 className="slavic-feature-title text-lg">
                    Быстрые Результаты
                  </h4>
                  <p className="slavic-text">
                    Ощутите облегчение уже после первого сеанса
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="slavic-feature-icon w-12 h-12 text-lg">
                  🛡️
                </div>
                <div>
                  <h4 className="slavic-feature-title text-lg">
                    Безопасность
                  </h4>
                  <p className="slavic-text">
                    Проверенный временем метод без побочных эффектов
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="slavic-feature-icon w-12 h-12 text-lg">
                  🌿
                </div>
                <div>
                  <h4 className="slavic-feature-title text-lg">
                    Естественность
                  </h4>
                  <p className="slavic-text">
                    Использует только силу тяжести и вес собственного тела
                  </p>
                </div>
              </div>
            </div>
            <button className="slavic-button slavic-button-accent mt-6">
              Подробнее о Методе
            </button>
          </div>
          <div className="slavic-card p-8 slavic-slide-in">
            <div className="slavic-feature-icon mb-6">
              🏛️
            </div>
            <h4 className="slavic-feature-title mb-4">
              Традиционная Мудрость
            </h4>
            <p className="slavic-feature-text mb-6">
              Метод, проверенный веками славянскими воинами и мудрецами. 
              Древние знания, адаптированные для современного мира.
            </p>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="slavic-text font-semibold">Эффективность:</span>
                <span className="text-gold-500 font-bold">95%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="slavic-text font-semibold">Безопасность:</span>
                <span className="text-green-500 font-bold">100%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="slavic-text font-semibold">Удовлетворенность:</span>
                <span className="text-blue-500 font-bold">98%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}