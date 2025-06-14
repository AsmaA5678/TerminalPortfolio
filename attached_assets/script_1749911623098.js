const input = document.getElementById("terminal-input");
const terminalOutput = document.getElementById("terminal-output");

const commands = {
  help: `Commandes disponibles :
- help : Affiche la liste des commandes
- about : À propos de moi
- skills : Mes compétences
- projects : Affiche la liste de mes projets
- contact : Me contacter`,
  about: `Je suis une étudiante en cybersécurité passionnée par la sécurité des systèmes, les réseaux et l'analyse des menaces.`,
  skills: `Compétences :
- Réseaux : pfSense, Wireshark, VPN, VLAN
- Systèmes : Linux, Windows Server, Active Directory
- Sécurité : SIEM, Splunk, détection d'intrusion, pentesting
- Programmation : Python, Bash, Java, HTML/CSS
- Outils : Git, Docker, Metasploit, Nmap`,
  projects: `Projets :
1. Conception d'une infrastructure sécurisée virtualisée (Oct 2023)
2. Analyse automatisée des attaques pour le SOC (Mar 2024 – Jun 2024)
3. Implémentation DevSecOps et CI/CD automatisée (Dec 2023 – Jan 2024)

Tapez "project 1", "project 2", ou "project 3" pour plus de détails.`,
  contact: `Email : imane@example.com
LinkedIn : linkedin.com/in/imane-cyber
GitHub : github.com/imane-cyber`
};

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const command = input.value.trim().toLowerCase();
    printOutput(`> ${command}`);
    input.value = "";

    if (commands[command]) {
      printOutput(commands[command]);
    } else if (command.startsWith("project ")) {
      const num = command.split(" ")[1];
      showProjectDetails(num);
    } else {
      printOutput("Commande inconnue. Tapez 'help' pour voir la liste.");
    }
  }
});

function printOutput(text) {
  terminalOutput.innerHTML += `<div>${text}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

function showProjectDetails(num) {
  const modal = document.createElement("div");
  modal.classList.add("modal");

  let title = "", content = "", image = "";

  switch (num) {
    case "1":
      title = "Projet 1 : Infrastructure Sécurisée Virtualisée";
      content = "Ce projet consiste à concevoir une infrastructure sécurisée incluant pfSense, Active Directory, des clients Windows et une machine d’analyse de sécurité avec Splunk.";
      image = "infra-secure.png";
      break;
    case "2":
      title = "Projet 2 : Analyse automatisée des attaques pour le SOC";
      content = "Mise en place de scripts pour analyser automatiquement les journaux système et détecter des attaques (brute force, reconnaissance, mouvements latéraux).";
      image = "soc-attack.png";
      break;
    case "3":
      title = "Projet 3 : DevSecOps avec CI/CD automatisé";
      content = "Création d’un pipeline CI/CD sécurisé avec GitLab, Docker, intégration d'analyses de sécurité automatique (SAST, DAST).";
      image = "devsecops.png";
      break;
    default:
      printOutput("Numéro de projet invalide.");
      return;
  }

  modal.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span>
      <h2>${title}</h2>
      <img src="${image}" alt="${title}" style="max-width:100%; border-radius:10px; margin: 20px 0;"/>
      <p>${content}</p>
    </div>
  `;

  document.body.appendChild(modal);

  document.querySelector(".close").addEventListener("click", () => {
    modal.remove();
  });
}