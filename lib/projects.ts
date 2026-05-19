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
    title: "Частная вилла",
    category: "Окружение / архитектура",
    tags: ["Environments", "Cinematics"],
    cover: "/assets/b3.jpg",
    images: ["/assets/b1.jpg", "/assets/b3.jpg", "/assets/b4.jpg", "/assets/b2.jpg"],
    description:
      "Архитектурная сцена: фасад, двор, ворота, ограждения, светильники, фактура стен и несколько ракурсов для презентации."
  },
  {
    id: "building",
    title: "Жилой дом",
    category: "Архитектура / 3D-модель",
    tags: ["Environments", "Cinematics"],
    cover: "/assets/b7.jpg",
    images: ["/assets/b5.jpg", "/assets/b7.jpg", "/assets/b8.jpg", "/assets/b9.jpg", "/assets/b10.jpg"],
    description:
      "Многоэтажный жилой дом с фасадом, окнами, балконами, входными зонами и чистой подачей на нейтральном фоне."
  },
  {
    id: "helmet",
    title: "Технический шлем",
    category: "Предметная модель / текстуры",
    tags: ["Hard Surface"],
    cover: "/assets/b13.jpg",
    images: ["/assets/b13.jpg", "/assets/b12.jpg", "/assets/b14.jpg"],
    description:
      "Предметная модель с кабелями, креплениями, аккуратной сеткой, разделением материалов и текстурированием."
  },
  {
    id: "diorama",
    title: "Фэнтези-диорама",
    category: "Миниатюры / окружение",
    tags: ["Miniatures", "Experimental"],
    cover: "/assets/b17.jpg",
    images: ["/assets/b17.jpg", "/assets/b15.jpg", "/assets/b16.jpg", "/assets/b11.jpg"],
    description:
      "Фэнтезийная сцена с камнями, органическими формами, деревом, подвесными деталями и настроением настольной миниатюры."
  }
];
