const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Hi, I'm <span className="text-blue-600">Yousif Alomar</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Software Engineer | Full Stack Developer + DevOps
        </p>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          I build scalable web applications with modern technologies. 
          Passionate about clean code, user experience, and solving complex problems.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;