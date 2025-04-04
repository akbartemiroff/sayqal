const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: "linear-gradient(rgba(128, 0, 32, 0.9), rgba(128, 0, 32, 0.9)), url('/images/hero-bg.svg')"
        }}
      >
        <div className="absolute inset-0 uzbek-pattern"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-[#F5E1C8] mb-6">
            <span className="text-[#F5E1C8]">Ресторан</span> Сайкал
          </h1>
          <p className="text-xl sm:text-2xl text-[#F5E1C8] mb-10 font-light">
            Аутентичная Узбекская Кухня <span className="mx-2 text-[#F5E1C8]">•</span> С 2015 года <span className="mx-2 text-[#F5E1C8]">•</span> Халяль Сертификат
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="#menu"
              className="btn-primary"
            >
              Посмотреть Меню
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 