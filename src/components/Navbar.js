import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#F5E1C8] shadow-md py-2' : 'bg-[#F5E1C8] py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-[#800020]">
              Ресторан Сайкал
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/#about" className="nav-link px-3 py-2 rounded-md text-sm font-medium text-[#800020]">
              О Нас
            </Link>
            <Link href="/#menu" className="nav-link px-3 py-2 rounded-md text-sm font-medium text-[#800020]">
              Меню
            </Link>
            <Link href="/#contact" className="nav-link px-3 py-2 rounded-md text-sm font-medium text-[#800020]">
              Контакты
            </Link>
            <a href="tel:+998XXXXXXXX" className="ml-4 px-4 py-2 rounded-full text-sm font-medium border-2 border-[#800020] text-[#800020] hover:bg-[#d4b59e] transition-colors">
              Заказать Столик
            </a>
          </div>
          
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#800020] hover:bg-[#d4b59e]"
              aria-expanded="false"
            >
              <span className="sr-only">Открыть меню</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#F5E1C8] shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/#about" className="nav-link block px-3 py-2 rounded-md text-base font-medium text-[#800020] hover:bg-[#d4b59e]">
              О Нас
            </Link>
            <Link href="/#menu" className="nav-link block px-3 py-2 rounded-md text-base font-medium text-[#800020] hover:bg-[#d4b59e]">
              Меню
            </Link>
            <Link href="/#contact" className="nav-link block px-3 py-2 rounded-md text-base font-medium text-[#800020] hover:bg-[#d4b59e]">
              Контакты
            </Link>
            <a href="tel:+998XXXXXXXX" className="block mt-4 mx-3 px-4 py-2 rounded-full text-sm font-medium bg-[#800020] text-[#F5E1C8] text-center hover:bg-[#5c0017]">
              Заказать Столик
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 