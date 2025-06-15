import { useState } from 'react';
import { playSound } from '../utils/soundEffects';

interface WelcomeScreenProps {
  onEnterTerminal: () => void;
}

export default function WelcomeScreen({ onEnterTerminal }: WelcomeScreenProps) {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (input.toLowerCase().trim() === 'terminal') {
        playSound('success');
        onEnterTerminal();
      } else {
        setError(true);
        playSound('error');
        setTimeout(() => setError(false), 1000);
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[var(--terminal-bg)] z-50">
      <div className="text-center space-y-8 px-4">
        <div className="text-4xl md:text-6xl font-bold text-[var(--neon-green)] neon-glow">
          WELCOME TO MY PORTFOLIO
        </div>
        
        <div className="text-xl md:text-2xl text-[var(--electric-purple)] animate-flicker">
          Feel free to dive in with <span className="text-[var(--cyber-cyan)] font-bold">IMANE BAMOUH</span>
        </div>
        
        <div className="mt-8">
          <div className="text-gray-400 mb-4">Type 'terminal' and press Enter</div>
          <div className="relative inline-block">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              className={`bg-[var(--terminal-secondary)] border-2 ${
                error ? 'border-[var(--error-red)]' : 'border-[var(--electric-purple)]'
              } rounded-lg px-4 py-2 text-[var(--neon-green)] text-center font-mono text-lg focus:outline-none focus:border-[var(--neon-green)] focus:shadow-lg focus:shadow-[var(--electric-purple)]/50 transition-all duration-300`}
              placeholder="Type 'terminal' and press Enter"
              autoComplete="off"
              autoFocus
            />
          </div>
        </div>
      </div>
    </div>
  );
}
