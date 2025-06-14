import { projects } from '../data/projects';

interface ProjectModalProps {
  projectId: number;
  onClose: () => void;
}

export default function ProjectModal({ projectId, onClose }: ProjectModalProps) {
  const project = projects[projectId];

  if (!project) {
    return null;
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 modal-backdrop bg-black bg-opacity-80 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="project-card rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-[var(--neon-green)]">{project.title}</h2>
            <button 
              onClick={onClose}
              className="text-[var(--error-red)] hover:text-red-300 text-2xl font-bold transition-colors"
            >
              &times;
            </button>
          </div>
          
          <div className="space-y-6">
            {/* Architecture Diagram */}
            <div className="bg-[var(--terminal-secondary)] p-4 rounded-lg border border-[var(--electric-purple)]">
              <div className="text-center text-[var(--neon-green)] font-bold mb-2">
                {project.architectureTitle}
              </div>
              <div className="grid gap-4 text-xs" style={{ gridTemplateColumns: `repeat(${project.architectureItems.length}, 1fr)` }}>
                {project.architectureItems.map((item, index) => (
                  <div key={index} className={`${item.bgColor} p-2 rounded text-center text-white`}>
                    {item.name}
                    <br />
                    {item.description}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-[var(--electric-purple)] font-bold">Project Overview</h3>
              <p className="text-gray-300">{project.overview}</p>
              
              <h3 className="text-[var(--electric-purple)] font-bold">{project.featuresTitle}</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              
              <h3 className="text-[var(--electric-purple)] font-bold">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="bg-[var(--neon-green)] text-black px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              
              <h3 className="text-[var(--electric-purple)] font-bold">Results</h3>
              <p className="text-gray-300">{project.results}</p>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center">
            <button 
              onClick={onClose}
              className="bg-[var(--electric-purple)] hover:bg-purple-600 text-white px-6 py-2 rounded-lg transition-colors font-mono"
            >
              Back to Terminal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
