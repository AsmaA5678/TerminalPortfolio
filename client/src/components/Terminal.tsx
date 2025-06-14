import { useState, useEffect, useRef } from 'react';
import { commands } from '../data/commands';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { playSound } from '../utils/soundEffects';

interface TerminalProps {
  onExit: () => void;
  onShowProject: (projectId: number) => void;
  onShowCV: () => void;
}

interface OutputLine {
  text: string;
  className?: string;
  isTyping?: boolean;
}

export default function Terminal({ onExit, onShowProject, onShowCV }: TerminalProps) {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<OutputLine[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isInitialized, setIsInitialized] = useState(false);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  // Initialize terminal with boot sequence
  useEffect(() => {
    const bootSequence = [
      "Initializing secure terminal...",
      "Loading cybersecurity modules...",
      "Connecting to security operations center...",
      "Welcome to the Terminal",
      "You can now interact with the system",
      "Type 'help' for a list of available commands",
      ""
    ];

    let i = 0;
    const bootInterval = setInterval(() => {
      if (i < bootSequence.length) {
        setOutput(prev => [...prev, { 
          text: bootSequence[i], 
          className: 'text-[var(--neon-green)]',
          isTyping: true
        }]);
        i++;
      } else {
        clearInterval(bootInterval);
        setIsInitialized(true);
        inputRef.current?.focus();
      }
    }, 800);

    return () => clearInterval(bootInterval);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  const addOutput = (text: string, className = 'text-gray-300') => {
    setOutput(prev => [...prev, { text, className }]);
  };

  const processCommand = (input: string) => {
    const parts = input.trim().split(' ');
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);

    // Add to history
    setCommandHistory(prev => [...prev, input]);
    setHistoryIndex(-1);

    // Display command
    addOutput(`$B@mouh_Im@n£ sudo ~/guest ${input}`, 'text-[var(--electric-purple)]');

    // Check for project numbers
    if (/^[1-4]$/.test(command)) {
      const projectId = parseInt(command);
      onShowProject(projectId);
      return;
    }

    // Process commands
    if (commands[command]) {
      const result = commands[command].execute(args, { onShowCV, onExit });
      if (result) {
        addOutput(result, 'text-gray-300');
      }
    } else {
      addOutput(`${command}: command not found`, 'text-[var(--error-red)]');
      playSound('error');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (input.trim()) {
        processCommand(input);
        setInput('');
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex >= 0) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    }
  };

  return (
    <div className="fixed inset-0 flex flex-col bg-[var(--terminal-bg)]">
      {/* Terminal Header */}
      <div className="bg-[var(--terminal-secondary)] border-b border-[var(--electric-purple)] px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-[var(--error-red)] rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-[var(--neon-green)] rounded-full"></div>
        </div>
        <div className="text-[var(--electric-purple)] font-medium">root@imane-bamouh:~#</div>
        <div className="text-xs text-gray-500">Terminal v2.1.0</div>
      </div>
      
      {/* Terminal Body */}
      <div className="flex-1 flex flex-col p-4 overflow-hidden terminal-scan">
        {/* Output Area */}
        <div 
          ref={outputRef}
          className="flex-1 overflow-y-auto scrollbar-custom space-y-1 mb-4"
        >
          {output.map((line, index) => (
            <TerminalLine key={index} line={line} />
          ))}
        </div>
        
        {/* Input Line */}
        {isInitialized && (
          <div className="flex items-center space-x-2 flex-shrink-0">
            <span className="text-[var(--electric-purple)] font-bold">$B@mouh_Im@n£ sudo ~/guest</span>
            <input 
              ref={inputRef}
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none text-[var(--neon-green)] font-mono text-lg terminal-line"
              autoComplete="off"
              spellCheck="false"
            />
          </div>
        )}
      </div>
    </div>
  );
}

interface TerminalLineProps {
  line: OutputLine;
}

function TerminalLine({ line }: TerminalLineProps) {
  const typedText = useTypingEffect(line.text, line.isTyping ? 50 : 0);
  
  return (
    <div className={`whitespace-pre-wrap ${line.className || 'text-gray-300'}`}>
      {line.isTyping ? typedText : line.text}
    </div>
  );
}
