import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/projectsData';

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Not Found</h2>
          <button
            onClick={() => navigate('/')}
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate('/')}
          className="text-blue-600 hover:text-blue-700 font-semibold mb-8 flex items-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Projects
        </button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-96 object-cover"
          />
          
          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {project.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-6">
              {project.fullDescription}
            </p>

            <div className="flex gap-4 mb-8">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View Code
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
              )}
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Features</h2>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {project.challenges && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Challenges</h2>
                <p className="text-gray-700 bg-gray-50 p-4 rounded-lg">{project.challenges}</p>
              </div>
            )}

            {project.solution && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Solution</h2>
                <p className="text-gray-700 bg-blue-50 p-4 rounded-lg">{project.solution}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;