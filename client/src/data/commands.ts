interface CommandContext {
  onShowCV: () => void;
  onExit: () => void;
}

interface Command {
  description: string;
  execute: (args: string[], context?: CommandContext) => string | null;
}

export const commands: Record<string, Command> = {
  help: {
    description: 'Display available commands',
    execute: (args) => {
      if (args.includes('-d')) {
        return `Available Commands (Detailed):
┌─────────────────┬────────────────────────────────────────┐
│ Command         │ Description                            │
├─────────────────┼────────────────────────────────────────┤
│ help            │ Show command list                      │
│ help -d         │ Show detailed command descriptions     │
│ help <cmd>      │ Show specific command help             │
│ whoami          │ Display user information               │
│ cv              │ Open CV/Resume                         │
│ skills          │ Display technical skills               │
│ experience      │ Show professional experience           │
│ projects        │ List cybersecurity projects            │
│ 1,2,3,4         │ View specific project details          │
│ contact         │ Display contact information            │
│ social -l       │ Show social media links                │
│ clear           │ Clear terminal screen                  │
│ reset           │ Reset terminal session                 │
│ exit            │ Return to welcome screen               │
│ ipconfig        │ Display network configuration          │
└─────────────────┴────────────────────────────────────────┘`;
      } else if (args.length > 0) {
        const cmd = args[0];
        if (commands[cmd]) {
          return `${cmd}: ${commands[cmd].description}`;
        } else {
          return `Command '${cmd}' not found. Type 'help' for available commands.`;
        }
      } else {
        return `Available Commands:
• help          - Show this help message
• whoami        - Display user information  
• cv            - Open CV/Resume
• skills        - Display technical skills
• experience    - Show professional experience
• projects      - List cybersecurity projects
• contact       - Display contact information
• social -l     - Show social media links
• clear         - Clear terminal screen
• reset         - Reset terminal session
• exit          - Return to welcome screen
• ipconfig      - Display network configuration

Type 'help -d' for detailed descriptions or 'help <command>' for specific help.`;
      }
    }
  },
  
  whoami: {
    description: 'Display user information',
    execute: () => {
      return `╭─────────────────────────────────────────────╮
│                 USER PROFILE                │
├─────────────────────────────────────────────┤
│ Name: Imane BAMOUH                          │
│ Role: Cybersecurity Engineer                │
│ Focus: Offensive Security & DevSecOps       │
│ Specializations:                            │
│   • Threat Detection & Analysis            │
│   • Security Operations Center (SOC)        │
│   • Penetration Testing                     │
│   • Secure Infrastructure Design           │
│                                             │
│ Passionate about cybersecurity, focusing   │
│ on offensive security, DevSecOps practices │
│ and advanced threat detection systems.     │
╰─────────────────────────────────────────────╯`;
    }
  },
  
  cv: {
    description: 'Open CV/Resume',
    execute: (_, context) => {
      context?.onShowCV();
      return 'Opening CV...';
    }
  },
  
  skills: {
    description: 'Display technical skills',
    execute: () => {
      return `╭─── TECHNICAL SKILLS ─────────────────────────╮
│                                             │
│ 🔒 CYBERSECURITY                           │
│   • Penetration Testing & Ethical Hacking  │
│   • SIEM Implementation (Splunk, ELK)      │
│   • Vulnerability Assessment               │
│   • Incident Response & Forensics          │
│   • Risk Assessment & Management           │
│                                             │
│ 🌐 NETWORKING & INFRASTRUCTURE              │
│   • pfSense, VPN Configuration             │
│   • Wireshark, Nmap, Metasploit           │
│   • Network Monitoring & Analysis          │
│   • Firewall Configuration                 │
│   • Active Directory Management            │
│                                             │
│ 💻 PROGRAMMING & DEVOPS                     │
│   • Python, Bash, PowerShell              │
│   • Docker, Kubernetes                     │
│   • CI/CD Pipelines (GitLab, Jenkins)     │
│   • Infrastructure as Code                 │
│   • Git Version Control                    │
│                                             │
│ 🛡️ SECURITY TOOLS                          │
│   • Burp Suite, OWASP ZAP                 │
│   • Kali Linux, Parrot OS                 │
│   • ClamAV, SpamAssassin                  │
│   • VirusTotal API Integration             │
│   • YARA Rules Development                 │
│                                             │
│ 📜 CERTIFICATIONS                          │
│   • Security+ (in progress)                │
│   • Certified Ethical Hacker (planned)     │
╰─────────────────────────────────────────────╯`;
    }
  },
  
  experience: {
    description: 'Show professional experience',
    execute: () => {
      return `╭─── PROFESSIONAL EXPERIENCE ─────────────────╮
│                                             │
│ 🏢 WORLDGRID/ALTEN                         │
│    Cybersecurity Intern                    │
│    Duration: 6 months                      │
│                                             │
│    Key Responsibilities:                   │
│    • SOC Operations & Incident Response    │
│    • Security Monitoring & Analysis        │
│    • Threat Intelligence Implementation    │
│    • Security Tools Configuration          │
│    • Risk Assessment & Reporting           │
│                                             │
│ 🏢 OGSBC (Office Général de Sécurité       │
│         des Bâtiments du Canada)           │
│    Security Analyst Intern                │
│    Duration: 4 months                      │
│                                             │
│    Key Responsibilities:                   │
│    • Infrastructure Security Assessment    │
│    • Policy Development & Implementation   │
│    • Security Awareness Training           │
│    • Compliance Auditing                   │
│    • Technical Documentation               │
│                                             │
│ 📚 ACADEMIC PROJECTS                       │
│    • Advanced Threat Detection Systems     │
│    • Secure Network Architecture Design    │
│    • Cryptographic Protocol Analysis       │
│    • DevSecOps Pipeline Implementation     │
╰─────────────────────────────────────────────╯`;
    }
  },
  
  projects: {
    description: 'List cybersecurity projects',
    execute: () => {
      return `╭─── CYBERSECURITY PROJECTS ──────────────────╮
│                                             │
│ 1. 🔍 Terrapin SSH Attack Analysis         │
│    Cryptographic vulnerability research    │
│    Tools: Wireshark, GNS3, SSH Analysis   │
│                                             │
│ 2. 📧 Secure Messaging & SOC Integration   │
│    Enterprise mail security implementation │
│    Stack: Postfix, Dovecot, SpamAssassin  │
│                                             │
│ 3. 🔄 DevSecOps CI/CD Pipeline             │
│    Automated security testing integration  │
│    Tools: Docker, GitLab CI, Kubernetes   │
│                                             │
│ 4. 🏢 Enterprise Security Infrastructure   │
│    Complete SIEM & monitoring solution     │
│    Platform: Splunk, Active Directory     │
│                                             │
│ Type a project number (1-4) to view        │
│ detailed information and architecture.      │
╰─────────────────────────────────────────────╯`;
    }
  },
  
  contact: {
    description: 'Display contact information',
    execute: () => {
      return `╭─── CONTACT INFORMATION ──────────────────────╮
│                                             │
│ 📧 Email: imane.bamouh@example.com          │
│ 📱 Phone: +1 (XXX) XXX-XXXX                │
│ 🌍 Location: Canada                        │
│                                             │
│ 💼 Professional Networks:                   │
│ • LinkedIn: linkedin.com/in/imane-bamouh   │
│ • GitHub: github.com/imane-bamouh          │
│ • Portfolio: imane-bamouh.dev              │
│                                             │
│ 🎯 Available for:                          │
│ • Cybersecurity Positions                  │
│ • Penetration Testing Projects             │
│ • Security Consulting                      │
│ • SOC Analyst Roles                        │
│                                             │
│ 📅 Preferred Contact: Email or LinkedIn    │
╰─────────────────────────────────────────────╯`;
    }
  },
  
  social: {
    description: 'Show social media links',
    execute: (args) => {
      if (args.includes('-l')) {
        return `╭─── SOCIAL MEDIA LINKS ───────────────────────╮
│                                             │
│ 🔗 Professional Links:                     │
│                                             │
│ LinkedIn:                                   │
│ → https://linkedin.com/in/imane-bamouh     │
│                                             │
│ GitHub:                                     │
│ → https://github.com/imane-bamouh          │
│                                             │
│ Personal Portfolio:                         │
│ → https://imane-bamouh.dev                 │
│                                             │
│ Cybersecurity Blog:                         │
│ → https://medium.com/@imane-bamouh         │
│                                             │
│ Twitter (Security Updates):                 │
│ → https://twitter.com/imane_cybersec       │
│                                             │
│ 🎯 Connect with me for cybersecurity       │
│    discussions and collaboration!          │
╰─────────────────────────────────────────────╯`;
      } else {
        return 'Use "social -l" to display social media links.';
      }
    }
  },
  
  clear: {
    description: 'Clear terminal screen',
    execute: () => {
      // This will be handled by the terminal component
      return null;
    }
  },
  
  reset: {
    description: 'Reset terminal session',
    execute: () => {
      // This will be handled by the terminal component
      return null;
    }
  },
  
  exit: {
    description: 'Return to welcome screen',
    execute: (_, context) => {
      context?.onExit();
      return null;
    }
  },
  
  ipconfig: {
    description: 'Display network configuration',
    execute: () => {
      return `╭─── NETWORK CONFIGURATION ───────────────────╮
│                                             │
│ Ethernet adapter Ethernet:                  │
│                                             │
│    Connection-specific DNS Suffix:         │
│    → cybersec.local                        │
│    IPv4 Address: 192.168.1.100             │
│    Subnet Mask: 255.255.255.0              │
│    Default Gateway: 192.168.1.1            │
│                                             │
│ Wireless LAN adapter Wi-Fi:                 │
│                                             │
│    Connection-specific DNS Suffix:         │
│    → secure.network                        │
│    IPv4 Address: 10.0.1.50                 │
│    Subnet Mask: 255.255.255.0              │
│    Default Gateway: 10.0.1.1               │
│                                             │
│ Security Status: ✅ SECURE                 │
│ Firewall: ✅ ACTIVE                        │
│ VPN: ✅ CONNECTED                          │
│ Threat Protection: ✅ ENABLED              │
╰─────────────────────────────────────────────╯`;
    }
  }
};
