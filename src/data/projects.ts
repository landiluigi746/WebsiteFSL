export type ProjectCard = {
  title: string;
  years: Array<string>;
  shortDescription: string;
  route: string;
};

export const projects: ProjectCard[] = [
  {
    title: "CyberChallenge.IT",
    years: ["2024-2025"],
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum justo dui, eget malesuada augue luctus id. Aliquam eleifend faucibus ex ut tincidunt.",
    route: "/projects/cyberchallenge",
  },
  {
    title: "OliCyber.IT",
    years: ["2024-2025", "2025-2026"],
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum justo dui, eget malesuada augue luctus id. Aliquam eleifend faucibus ex ut tincidunt.",
    route: "/projects/olicyber",
  },
  {
    title: "Phaser Game Jam",
    years: ["2023-2024", "2024-2025", "2025-2026"],
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum justo dui, eget malesuada augue luctus id. Aliquam eleifend faucibus ex ut tincidunt.",
    route: "/projects/phaser",
  },
  {
    title: "Siviglia",
    years: ["2024-2025"],
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum justo dui, eget malesuada augue luctus id. Aliquam eleifend faucibus ex ut tincidunt.",
    route: "/projects/siviglia",
  },
  {
    title: "Eipass",
    years: ["2023-2024"],
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum justo dui, eget malesuada augue luctus id. Aliquam eleifend faucibus ex ut tincidunt.",
    route: "/projects/eipass",
  },
];
