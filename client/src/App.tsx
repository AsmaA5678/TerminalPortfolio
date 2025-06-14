import { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import Terminal from './components/Terminal';
import ProjectModal from './components/ProjectModal';
import CVModal from './components/CVModal';

function App() {
  const [currentScreen, setCurrentScreen] = useState<'welcome' | 'terminal'>('welcome');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [showCVModal, setShowCVModal] = useState(false);

  const handleEnterTerminal = () => {
    setCurrentScreen('terminal');
  };

  const handleExitTerminal = () => {
    setCurrentScreen('welcome');
  };

  const handleShowProject = (projectId: number) => {
    setSelectedProject(projectId);
  };

  const handleShowCV = () => {
    setShowCVModal(true);
  };

  return (
    <div className="min-h-screen bg-[var(--terminal-bg)] text-gray-300 overflow-hidden">
      {/* Matrix Background */}
      <div className="matrix-bg" id="matrixBg">
        {Array.from({ length: 100 }, (_, i) => (
          <div
            key={i}
            className="matrix-char"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          >
            {['0', '1', 'A', 'B', 'C', 'D', 'E', 'F'][Math.floor(Math.random() * 8)]}
          </div>
        ))}
      </div>

      {/* Main Content */}
      {currentScreen === 'welcome' && (
        <WelcomeScreen onEnterTerminal={handleEnterTerminal} />
      )}

      {currentScreen === 'terminal' && (
        <Terminal
          onExit={handleExitTerminal}
          onShowProject={handleShowProject}
          onShowCV={handleShowCV}
        />
      )}

      {/* Modals */}
      {selectedProject && (
        <ProjectModal
          projectId={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {showCVModal && (
        <CVModal onClose={() => setShowCVModal(false)} />
      )}
    </div>
  );
}

export default App;
