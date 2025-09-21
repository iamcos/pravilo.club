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
        
        {/* Floating Icons */}
        <div className="absolute top-20 left-10 w-16 h-16 opacity-20 animate-pulse">
          <svg className="w-full h-full text-accent-gold" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
        <div className="absolute top-40 right-20 w-12 h-12 opacity-20 animate-pulse" style={{ animationDelay: '1s' }}>
          <svg className="w-full h-full text-accent-red" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
        <div className="absolute bottom-20 left-20 w-10 h-10 opacity-20 animate-pulse" style={{ animationDelay: '2s' }}>
          <svg className="w-full h-full text-accent-blue" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
      </div>
    </section>
  )
}