interface CVModalProps {
  onClose: () => void;
}

export default function CVModal({ onClose }: CVModalProps) {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleDownloadCV = () => {
    // In a real application, this would trigger a CV download
    console.log('Downloading CV...');
    alert('CV download would be triggered here. Please contact Imane directly for her latest CV.');
  };

  return (
    <div 
      className="fixed inset-0 z-50 modal-backdrop bg-black bg-opacity-80 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="project-card rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-[var(--neon-green)]">Curriculum Vitae</h2>
            <button 
              onClick={onClose}
              className="text-[var(--error-red)] hover:text-red-300 text-2xl font-bold transition-colors"
            >
              &times;
            </button>
          </div>
          
          <div className="space-y-6">
            <div className="bg-[var(--terminal-secondary)] p-4 rounded-lg">
              <h3 className="text-[var(--electric-purple)] font-bold mb-2">Professional CV</h3>
              <p className="text-gray-400 mb-4">Download my complete curriculum vitae in PDF format</p>
              <button 
                onClick={handleDownloadCV}
                className="bg-[var(--neon-green)] text-black px-4 py-2 rounded hover:bg-green-400 transition-colors font-mono"
              >
                📄 Download CV (PDF)
              </button>
            </div>
            
            <div className="bg-[var(--terminal-secondary)] p-4 rounded-lg">
              <h3 className="text-[var(--electric-purple)] font-bold mb-2">Quick Summary</h3>
              <div className="text-gray-300 space-y-2">
                <p><strong>Name:</strong> Imane BAMOUH</p>
                <p><strong>Role:</strong> Cybersecurity Engineer</p>
                <p><strong>Specialization:</strong> Offensive Security, DevSecOps, Threat Detection</p>
                <p><strong>Experience:</strong> SOC Operations, Penetration Testing, Security Infrastructure</p>
                <p><strong>Education:</strong> Engineering in Cybersecurity</p>
                <p><strong>Certifications:</strong> Security+ (in progress), CEH (planned)</p>
              </div>
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
