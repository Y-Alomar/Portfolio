const About = () => {
  const skills = [
    'React', 'TypeScript', 'Node.js', 'Python',
    'Docker', 'Jenkins', 'PostgreSQL', 'MongoDB',
    'REST APIs', 'Git', 'AWS', 'Tailwind CSS'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-full h-96 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-lg shadow-xl flex items-center justify-center">
              <span className="text-white text-6xl font-bold">YN</span>
            </div>
          </div>
          
          <div>
            <p className="text-lg text-gray-600 mb-6">
              I'm a passionate software engineer with expertise in building modern web applications. 
              I love turning complex problems into simple, beautiful, and intuitive solutions.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              With experience in both frontend and backend development, I create full-stack applications 
              that are scalable, maintainable, and user-friendly.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;