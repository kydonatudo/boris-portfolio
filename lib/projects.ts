export type Project = {
  id: string;
  title: string;
  category: string;
  tags: string[];
  cover: string;
  images: string[];
  description: string;
};

export const projects: Project[] = [
  {
    id: "villa",
    title: "Private Villa Environment",
    category: "Environment / Architectural 3D",
    tags: ["Environments", "Cinematics"],
    cover: "/assets/b3.jpg",
    images: ["/assets/b1.jpg", "/assets/b3.jpg", "/assets/b4.jpg", "/assets/b2.jpg"],
    description:
      "Экстерьерная сцена с фасадом, двором, воротами, ограждениями, светильниками, фактурой стен и несколькими презентационными ракурсами."
  },
  {
    id: "building",
    title: "Residential Building",
    category: "Architecture / Production Asset",
    tags: ["Environments", "Cinematics"],
    cover: "/assets/b7.jpg",
    images: ["/assets/b5.jpg", "/assets/b7.jpg", "/assets/b8.jpg", "/assets/b9.jpg", "/assets/b10.jpg"],
    description:
      "Модульный жилой объект с фасадными системами, стеклом, балконами, входными зонами и чистой студийной подачей."
  },
  {
    id: "helmet",
    title: "Technical Helmet Asset",
    category: "Hard Surface / Substance Painter",
    tags: ["Hard Surface"],
    cover: "/assets/b13.jpg",
    images: ["/assets/b13.jpg", "/assets/b12.jpg", "/assets/b14.jpg"],
    description:
      "Предметный hard-surface ассет с кабельными деталями, wireframe-превью, material separation и текстурированием."
  },
  {
    id: "diorama",
    title: "Fantasy Diorama Blockout",
    category: "Miniature Culture / Environment Sculpt",
    tags: ["Miniatures", "Experimental"],
    cover: "/assets/b17.jpg",
    images: ["/assets/b17.jpg", "/assets/b15.jpg", "/assets/b16.jpg", "/assets/b11.jpg"],
    description:
      "Фэнтезийная сцена с органическими формами, камнями, torii-inspired конструкцией, подвесными объектами и tabletop worldbuilding атмосферой."
  }
];
