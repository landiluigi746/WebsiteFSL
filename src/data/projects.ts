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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum justo dui, eget malesuada augue luctus id. Aliquam eleifend faucibus ex ut tincidunt.",
    route: "/projects/cyberchallenge",
    imgPath: "/src/images/home/copertine/cyberchallenge.png",
  },
  {
    title: "OliCyber.IT",
    years: ["2024-2025", "2025-2026"],
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum justo dui, eget malesuada augue luctus id. Aliquam eleifend faucibus ex ut tincidunt.",
    route: "/projects/olicyber",
    imgPath: "/src/images/home/copertine/olicyber.png",
  },
  {
    title: "Phaser Game Jam",
    years: ["2023-2024", "2024-2025", "2025-2026"],
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum justo dui, eget malesuada augue luctus id. Aliquam eleifend faucibus ex ut tincidunt.",
    route: "/projects/phaser",
    imgPath: "/src/images/home/copertine/phaser.png",
  },
  {
    title: "Siviglia",
    years: ["2024-2025"],
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum justo dui, eget malesuada augue luctus id. Aliquam eleifend faucibus ex ut tincidunt.",
    route: "/projects/siviglia",
    imgPath: "/src/images/home/copertine/siviglia.png",
  },
  {
    title: "Eipass",
    years: ["2023-2024"],
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum justo dui, eget malesuada augue luctus id. Aliquam eleifend faucibus ex ut tincidunt.",
    route: "/projects/eipass",
    imgPath: "/src/images/home/copertine/eipass.png",
  },
];
