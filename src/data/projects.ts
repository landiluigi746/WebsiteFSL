export type ProjectMetadata = {
  title: string;
  years: Array<string>;
  shortDescription: string;
  route: string;
  imgPath: string;
};

export const projects: ProjectMetadata[] = [
  {
    title: "CyberChallenge.IT",
    years: ["2024-2025"],
    shortDescription:
      "Programma nazionale italiano dedicato alla formazione dei giovani talenti (studenti di scuole superiori e università dai 16 ai 24 anni) della cybersecurity. Esperienza molto positiva per i risultati raggiunti e per le competenze tecniche e sociali maturate.",
    route: "/WebsiteFSL/projects/cyberchallenge",
    imgPath: "/src/images/home/copertine/cyberchallenge.png",
  },
  {
    title: "OliCyber.IT",
    years: ["2024-2025", "2025-2026"],
    shortDescription:
      "Competizione individuale rivolta agli studenti delle scuole superiori che mira a formare giovani talenti nei principali ambiti della cybersicurezza. Esperienza molto positiva per i risultati raggiunti e per le competenze tecniche e sociali maturate.",
    route: "/WebsiteFSL/projects/olicyber",
    imgPath: "/src/images/home/copertine/olicyber.png",
  },
  {
    title: "Phaser Game Jam",
    years: ["2023-2024", "2024-2025", "2025-2026"],
    shortDescription:
      "Percorso formativo con gara finale a squadre per la realizzazione di videogiochi con il linguaggio di programmazione Typescript e la liberia Phaser. Simbolo di continua evoluzione e miglioramento.",
    route: "/WebsiteFSL/projects/phaser",
    imgPath: "/src/images/home/copertine/phaser.png",
  },
  {
    title: "Siviglia",
    years: ["2024-2025"],
    shortDescription:
      "Una breve esperienza all'estero che mi ha permesso di crescere davvero, mettendomi a contatto con nuove persone e nuove culture. Quello che mi ha lasciato lo porterò con me anche in futuro.",
    route: "/WebsiteFSL/projects/siviglia",
    imgPath: "/src/images/home/copertine/siviglia.png",
  },
];
