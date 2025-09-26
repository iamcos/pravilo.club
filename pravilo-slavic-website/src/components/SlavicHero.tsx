export default function DarkHero() {
  return (
    <section id="home" className="dark-hero">
      <div className="dark-hero-content">
        <div className="dark-fade-in">
          <h1 className="dark-heading text-6xl md:text-8xl mb-8">
            <span className="bg-gradient-to-r from-accent-gold via-accent-red to-accent-gold bg-clip-text text-transparent">
          Древняя Сила
            </span>
        </h1>
        </div>
        
        <div className="dark-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="dark-subheading text-3xl md:text-4xl mb-8">
          Традиционное Русское Здоровье
        </h2>
        </div>
        
        <div className="dark-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="dark-text text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
          Откройте потенциал своего тела с помощью древнего славянского метода 
            декомпрессии позвоночника в тропическом раю Ко Пангана
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center dark-fade-in" style={{ animationDelay: '0.6s' }}>
          <button className="dark-button">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Записаться на Сеанс
          </button>
          <button className="dark-button-outline">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Узнать Больше
          </button>
        </div>
      </div>
    </section>
  )
}