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
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="text-center space-y-12 px-6 max-w-4xl">
        {/* Main Title */}
        <div className="space-y-6">
          <div 
            className="glitch-text text-5xl md:text-7xl font-bold text-[var(--neon-green)] neon-glow animate-glow"
            data-text="WELCOME TO MY PORTFOLIO"
          >
            WELCOME TO MY PORTFOLIO
          </div>
          
          {/* Subtitle - Made much larger and more prominent */}
          <div className="text-2xl md:text-4xl font-bold leading-tight">
            <div className="text-[var(--neon-green)] animate-flicker">
              Feel free to dive in with
            </div>
            <div className="text-4xl md:text-6xl lg:text-7xl mt-6 text-[var(--neon-green)] font-extrabold tracking-wider animate-glow neon-glow">
              IMANE BAMOUH
            </div>
          </div>
        </div>
        
        {/* Input Section */}
        <div className="mt-16 space-y-6">
          <div className="bg-[var(--terminal-secondary)] backdrop-blur-lg rounded-2xl p-8 border border-[var(--neon-green)]/30 shadow-2xl shadow-[var(--neon-green)]/20">
            <div className="text-[var(--neon-green)] mb-6 text-lg">Type 'terminal' and press Enter to begin</div>
            <div className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                className={`w-full bg-black border-2 ${
                  error ? 'border-[var(--error-red)]' : 'border-[var(--neon-green)]'
                } rounded-xl px-6 py-4 text-[var(--neon-green)] text-center font-mono text-xl focus:outline-none focus:border-[var(--neon-green)] focus:shadow-lg focus:shadow-[var(--neon-green)]/30 transition-all duration-300 placeholder-gray-600`}
                placeholder="terminal"
                autoComplete="off"
                autoFocus
              />
              {error && (
                <div className="text-[var(--error-red)] text-sm mt-2">Please type 'terminal' to continue</div>
              )}
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="flex justify-center space-x-4 mt-8">
          <div className="w-2 h-2 bg-[var(--neon-green)] rounded-full animate-ping"></div>
          <div className="w-2 h-2 bg-[var(--neon-green)] rounded-full animate-ping" style={{animationDelay: '0.2s'}}></div>
          <div className="w-2 h-2 bg-[var(--neon-green)] rounded-full animate-ping" style={{animationDelay: '0.4s'}}></div>
        </div>
      </div>
    </div>
  );
}
