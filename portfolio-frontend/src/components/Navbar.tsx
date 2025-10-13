import { Link } from 'react-router-dom';

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            Your Name
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/"
              onClick={() => setTimeout(() => scrollToSection('home'), 100)}
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Home
            </Link>
            <Link 
              to="/"
              onClick={() => setTimeout(() => scrollToSection('about'), 100)}
              className="text-gray-600 hover:text-gray-900 transition"
            >
              About
            </Link>
            <Link 
              to="/"
              onClick={() => setTimeout(() => scrollToSection('projects'), 100)}
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Projects
            </Link>
            <Link 
              to="/"
              onClick={() => setTimeout(() => scrollToSection('contact'), 100)}
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-gray-600">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;