interface ArchitectureItem {
  name: string;
  description: string;
  bgColor: string;
}

interface Project {
  title: string;
  architectureTitle: string;
  architectureItems: ArchitectureItem[];
  overview: string;
  featuresTitle: string;
  features: string[];
  technologies: string[];
  results: string;
}

export const projects: Record<number, Project> = {
  1: {
    title: "🔍 Terrapin SSH Attack Analysis",
    architectureTitle: "Network Architecture",
    architectureItems: [
      { name: "Attacker", description: "Kali Linux", bgColor: "bg-red-900" },
      { name: "Network", description: "GNS3 Lab", bgColor: "bg-yellow-900" },
      { name: "Target", description: "SSH Server", bgColor: "bg-blue-900" }
    ],
    overview: "Comprehensive analysis of the Terrapin cryptographic attack against SSH connections. This vulnerability (CVE-2023-48795) affects the SSH transport layer protocol and can be exploited to downgrade connection security.",
    featuresTitle: "Technical Implementation",
    features: [
      "Created controlled lab environment using GNS3",
      "Implemented packet capture using Wireshark",
      "Developed custom scripts to analyze SSH handshake",
      "Documented vulnerability exploitation techniques",
      "Created detection signatures for SIEM systems"
    ],
    technologies: ["Wireshark", "GNS3", "SSH Protocol", "Cryptanalysis", "Python"],
    results: "Successfully demonstrated the attack vector and developed countermeasures including SSH configuration hardening and network monitoring rules."
  },
  
  2: {
    title: "📧 Secure Messaging & SOC Integration",
    architectureTitle: "Mail Security Architecture",
    architectureItems: [
      { name: "Postfix", description: "MTA", bgColor: "bg-blue-900" },
      { name: "Dovecot", description: "IMAP", bgColor: "bg-green-900" },
      { name: "SpamAssassin", description: "Filter", bgColor: "bg-red-900" },
      { name: "SOC", description: "Monitoring", bgColor: "bg-purple-900" }
    ],
    overview: "Implementation of a comprehensive secure messaging system with integrated Security Operations Center (SOC) monitoring. Features advanced threat detection, spam filtering, and automated response capabilities.",
    featuresTitle: "Security Features",
    features: [
      "SPF, DKIM, and DMARC email authentication",
      "ClamAV antivirus integration",
      "SpamAssassin spam detection with custom rules",
      "VirusTotal API integration for threat intelligence",
      "AI-powered phishing detection",
      "Real-time SOC alerting and incident response"
    ],
    technologies: ["Postfix", "Dovecot", "SpamAssassin", "ClamAV", "VirusTotal API", "Python ML"],
    results: "Developed custom SIEM rules and automated playbooks for threat response, reducing incident response time by 60% and improving overall security posture."
  },
  
  3: {
    title: "🔄 DevSecOps CI/CD Pipeline",
    architectureTitle: "CI/CD Security Pipeline",
    architectureItems: [
      { name: "Git", description: "Commit", bgColor: "bg-orange-900" },
      { name: "SAST", description: "Scan", bgColor: "bg-blue-900" },
      { name: "Build", description: "Docker", bgColor: "bg-green-900" },
      { name: "DAST", description: "Test", bgColor: "bg-red-900" },
      { name: "Deploy", description: "K8s", bgColor: "bg-purple-900" }
    ],
    overview: "Creation of a comprehensive DevSecOps pipeline integrating security testing at every stage of the development lifecycle. Automated SAST and DAST testing with container security scanning and Kubernetes deployment security.",
    featuresTitle: "Security Integration Points",
    features: [
      "Pre-commit hooks with security linting",
      "Static Application Security Testing (SAST)",
      "Container image vulnerability scanning",
      "Dynamic Application Security Testing (DAST)",
      "Infrastructure as Code security validation",
      "Runtime security monitoring"
    ],
    technologies: ["GitLab CI", "Docker", "Kubernetes", "OWASP ZAP", "SonarQube", "Terraform"],
    results: "Achieved 90% reduction in security vulnerabilities reaching production, with automated reporting and integrated security gates preventing vulnerable code deployment."
  },
  
  4: {
    title: "🏢 Enterprise Security Infrastructure",
    architectureTitle: "Enterprise Security Architecture",
    architectureItems: [
      { name: "Active", description: "Directory", bgColor: "bg-blue-900" },
      { name: "Splunk", description: "SIEM", bgColor: "bg-red-900" },
      { name: "pfSense", description: "Firewall", bgColor: "bg-green-900" },
      { name: "Pen Test", description: "Tools", bgColor: "bg-purple-900" }
    ],
    overview: "Design and implementation of a complete enterprise security infrastructure including SIEM integration, Active Directory hardening, advanced firewall configuration, and comprehensive penetration testing validation.",
    featuresTitle: "Infrastructure Components",
    features: [
      "Splunk SIEM with custom dashboards and alerts",
      "Active Directory with security policies and monitoring",
      "pfSense firewall with advanced rule sets",
      "Network segmentation and access controls",
      "Intrusion detection and prevention systems",
      "Comprehensive logging and audit trails"
    ],
    technologies: ["Splunk", "Active Directory", "pfSense", "Nessus", "Metasploit", "PowerShell"],
    results: "Conducted comprehensive penetration testing to validate security controls, identifying and remediating vulnerabilities while establishing continuous monitoring and incident response procedures."
  }
};
