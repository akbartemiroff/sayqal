const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-[#800020]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading">О Ресторане Сайкал</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="rounded-lg overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 animate-slide-left">
            <img 
              src="/images/restaurant-interior.svg" 
              alt="Интерьер Ресторана" 
              className="w-full h-auto"
            />
          </div>
          
          <div className="animate-slide-right">
            <h3 className="text-3xl font-bold text-[#F5E1C8] mb-6">Наша История</h3>
            <p className="text-[#F5E1C8] mb-8 leading-relaxed">
              Основанный в 2015 году, ресторан Сайкал предлагает аутентичную узбекскую кухню гурманам. Наш ресторан сочетает традиционные рецепты с современными кулинарными техниками для создания уникальных гастрономических впечатлений.
            </p>
            <p className="text-[#F5E1C8] mb-8 leading-relaxed">
              Мы гордимся тем, что используем только самые свежие ингредиенты и готовим наши блюда с особой заботой. Наша приверженность качеству сделала нас излюбленным местом для тех, кто ищет настоящие узбекские вкусы.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center p-4 bg-[#F5E1C8] rounded-lg shadow-md hover:shadow-lg transition-all">
                <svg className="w-10 h-10 text-[#800020] mb-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-[#800020] font-medium">Халяль Сертификат</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-[#F5E1C8] rounded-lg shadow-md hover:shadow-lg transition-all">
                <svg className="w-10 h-10 text-[#800020] mb-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-[#800020] font-medium">Традиционные Рецепты</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-[#F5E1C8] rounded-lg shadow-md hover:shadow-lg transition-all">
                <svg className="w-10 h-10 text-[#800020] mb-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-[#800020] font-medium">Свежие Ингредиенты</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 