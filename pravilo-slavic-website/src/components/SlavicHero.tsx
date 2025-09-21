export default function SlavicHero() {
  return (
    <section id="home" className="slavic-hero">
      <div className="slavic-hero-content">
        <h1 className="slavic-heading text-5xl md:text-7xl mb-6 slavic-fade-in">
          Древняя Сила
        </h1>
        <h2 className="slavic-subheading text-2xl md:text-3xl mb-8 slavic-fade-in">
          Традиционное Русское Здоровье
        </h2>
        <p className="slavic-text text-lg md:text-xl mb-10 max-w-2xl mx-auto slavic-fade-in">
          Откройте потенциал своего тела с помощью древнего славянского метода 
          декомпрессии позвоночника в тропическом раю
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center slavic-fade-in">
          <button className="slavic-button">
            Записаться на Сеанс
          </button>
          <button className="slavic-button slavic-button-secondary">
            Узнать Больше
          </button>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gold-500 opacity-20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-red-500 opacity-20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-blue-500 opacity-20 rounded-full animate-pulse delay-2000"></div>
      </div>
    </section>
  )
}