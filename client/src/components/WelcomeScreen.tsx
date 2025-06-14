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
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-black z-50">
      <div className="text-center space-y-12 px-6 max-w-4xl">
        {/* Main Title */}
        <div className="space-y-6">
          <div 
            className="glitch-text text-5xl md:text-7xl font-bold text-transparent bg-gradient-to-r from-cyan-400 via-green-400 to-purple-400 bg-clip-text animate-glow"
            data-text="WELCOME TO MY PORTFOLIO"
          >
            WELCOME TO MY PORTFOLIO
          </div>
          
          {/* Subtitle - Made much larger and more prominent */}
          <div className="text-2xl md:text-4xl font-bold leading-tight">
            <div className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text animate-flicker bg-[length:200%_200%] animate-[gradient-shift_3s_ease-in-out_infinite]">
              Feel free to dive in with
            </div>
            <div className="text-4xl md:text-6xl lg:text-7xl mt-6 text-transparent bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text font-extrabold tracking-wider animate-glow bg-[length:200%_200%] animate-[gradient-shift_4s_ease-in-out_infinite]">
              IMANE BAMOUH
            </div>
          </div>
        </div>
        
        {/* Input Section */}
        <div className="mt-16 space-y-6">
          <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30 shadow-2xl shadow-purple-500/20">
            <div className="text-gray-300 mb-6 text-lg">Type 'terminal' and press Enter to begin</div>
            <div className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                className={`w-full bg-gray-900/80 border-2 ${
                  error ? 'border-red-400' : 'border-purple-400'
                } rounded-xl px-6 py-4 text-green-400 text-center font-mono text-xl focus:outline-none focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-400/30 transition-all duration-300 placeholder-gray-500`}
                placeholder="terminal"
                autoComplete="off"
                autoFocus
              />
              {error && (
                <div className="text-red-400 text-sm mt-2">Please type 'terminal' to continue</div>
              )}
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="flex justify-center space-x-4 mt-8">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '0.2s'}}></div>
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{animationDelay: '0.4s'}}></div>
        </div>
      </div>
    </div>
  );
}
