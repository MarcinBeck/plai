import React from 'react';

// Ten pojedynczy plik zawiera całą strukturę aplikacji React (Next.js),
// co pozwala na łatwe przetestowanie deploymentu w środowiskach takich jak AWS Amplify.
// Stylizacja jest oparta na Tailwind CSS.

// --- Komponenty Startowe ---

const Header = () => (
  <header className="fixed top-0 left-0 w-full z-20 bg-white/90 backdrop-blur-sm shadow-md">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
      <a href="/" className="text-2xl font-extrabold text-gray-900 tracking-tight">
        [Nazwa Strony]
      </a>
      <nav className="hidden md:flex space-x-6">
        <NavLink href="/">Artykuły</NavLink>
        <NavLink href="/info">Info (O nas)</NavLink>
        <NavLink href="/kontakt">Kontakt</NavLink>
      </nav>
      <button 
        className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
        aria-label="Menu"
      >
        {/* Ikona menu (lucide-react: Menu) */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
      </button>
    </div>
  </header>
);

const NavLink = ({ href, children }) => (
  <a 
    href={href} 
    className="text-gray-600 hover:text-indigo-600 font-medium transition-colors p-2 rounded-lg hover:bg-gray-50"
  >
    {children}
  </a>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white mt-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
      <p className="text-sm text-gray-400">
        &copy; {new Date().getFullYear()} [Nazwa Strony]. Wszelkie prawa zastrzeżone.
      </p>
      <div className="mt-2 space-x-4 text-sm">
        <a href="/info" className="hover:text-indigo-400 transition-colors">O Nas</a>
        <a href="/kontakt" className="hover:text-indigo-400 transition-colors">Kontakt</a>
      </div>
    </div>
  </footer>
);

const ArticleCardPlaceholder = ({ featured = false }) => (
  <div className={`p-5 bg-white shadow-xl rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] ${featured ? 'md:col-span-3 lg:col-span-4' : 'md:col-span-1'}`}>
    <div className="h-48 bg-gray-200 rounded-lg animate-pulse mb-4"></div>
    <div className="text-sm font-semibold text-indigo-600 mb-2">
      Kategoria
    </div>
    <h3 className={`font-bold text-gray-900 ${featured ? 'text-2xl mb-3' : 'text-xl mb-2'}`}>
      <div className="h-6 w-3/4 bg-gray-300 rounded animate-pulse"></div>
    </h3>
    <p className="text-gray-600 text-sm">
      <div className="h-4 bg-gray-200 rounded animate-pulse mb-1"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
    </p>
    <div className="mt-4 text-sm text-gray-500">
      Placeholder Daty
    </div>
    {/* Efekt animacji przy najechaniu (w przyszłości z Framer Motion) */}
  </div>
);

// --- Główny Komponent Aplikacji (Symulacja Strony Głównej) ---

const App = () => {
  // Symulacja prostej logiki routingu
  const [page, setPage] = React.useState('/');

  React.useEffect(() => {
    // Prosta obsługa routingu na podstawie hash/pathname
    const handlePopState = () => {
      setPage(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    
    // Ustawienie początkowej strony
    setPage(window.location.pathname);

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const renderContent = () => {
    switch(page) {
      case '/info':
        return (
          <div className="py-24 max-w-4xl mx-auto px-4">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-6">O Stronie / O Autorze</h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ta sekcja będzie zawierać informacje o misji strony, jej twórcy i wizji na przyszłe publikacje. 
              Ma być to miejsce, w którym czytelnicy mogą poczuć personalne połączenie z treścią.
            </p>
            <p className="mt-4 text-gray-600">
              Obecnie to jest tylko strona-placeholder. W następnym kroku dodamy pełną treść.
            </p>
          </div>
        );
      case '/kontakt':
        return (
          <div className="py-24 max-w-2xl mx-auto px-4">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Kontakt</h1>
            <p className="text-lg text-gray-700 mb-8">
              Skontaktuj się ze mną, jeśli masz pytania dotyczące artykułów, współpracy lub po prostu chcesz się przywitać!
            </p>
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
              <p className="font-semibold text-lg text-gray-800">Email:</p>
              <p className="text-indigo-600">kontakt@[TwojaDomena].pl</p>
            </div>
          </div>
        );
      case '/':
      default:
        return (
          <>
            {/* Sekcja Wyróżnionego Artykułu */}
            <section className="pt-24 pb-12 bg-gray-50/50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-8 tracking-tight">
                  Najnowszy i Wyróżniony
                </h2>
                {/* Wyróżniony Placeholder - duży, z efektem cienia i skali */}
                <ArticleCardPlaceholder featured={true} />
              </div>
            </section>

            {/* Lista Artykułów */}
            <section className="py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Wszystkie Artykuły
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <ArticleCardPlaceholder />
                  <ArticleCardPlaceholder />
                  <ArticleCardPlaceholder />
                  <ArticleCardPlaceholder />
                  <ArticleCardPlaceholder />
                  <ArticleCardPlaceholder />
                </div>
                
                {/* Placeholder dla Dynamicznego Ładowania Kontentu */}
                <div className="text-center mt-12">
                  <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105">
                    Załaduj Więcej Artykułów
                  </button>
                  <p className="mt-2 text-sm text-gray-500">
                    (W przyszłości to będzie automatyczne przewijanie)
                  </p>
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans antialiased bg-white text-gray-800">
      <style jsx global>{`
        /* Konfiguracja czcionki (Inter jest standardem w Tailwind) */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap');
        body {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
      <Header />
      <main className="flex-grow pt-16"> 
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
