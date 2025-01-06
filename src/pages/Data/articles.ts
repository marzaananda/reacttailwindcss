export interface Article {
    id: number;
    title: string;
    imageUrl: string[];
    summary: string;
  }
  
  export const fetchedArticles: Article[] = [
    {
      id: 1,
      title: "Photobook IPA 1",
      imageUrl: ["/img/IMG_1.jpg", "/img/IMG_2.jpg", "/img/IMG_3.jpg"],
      summary:
        "Banyak kisah yang terjadi dan akhirnya menjadi kenangan tak terlupakan. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      title: "Prakik kimia XI IPA 1",
      imageUrl: ["/img/IMG_4.jpg", "/img/IMG_5.jpg"],
      summary: "Pelajaran kalor mungkin...jika kalian tahu beritahu saya ok.",
    },
    {
      id: 3,
      title: "Hari batik sebelum berangkat study tour",
      imageUrl: ["/img/IMG_6.jpg"],
      summary: "Aku tidak tahu bagaimana menjelaskannya, tetapi banyak hal terjadi di hari itu.",
    },
  ];
  