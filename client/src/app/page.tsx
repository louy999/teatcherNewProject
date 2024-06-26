import CardLesson from "../components/chapters/CardLesson";

const data = [
  {
    name: "chapter1",
    data: [
      {
        id: 1,
        img: "/images.png",
        view: 8,
        title: "lesson 1",
        price: 20,
        dateCreate: "20/5/2024",
      },
      {
        id: 2,
        img: "/images.png",
        view: 7,
        title: "lesson 2",
        price: 40,
        dateCreate: "20/7/2024",
      },
      {
        id: 3,
        img: "/images.png",
        view: 122,
        title: "lesson 3",
        price: 400,
        dateCreate: "10/12/2024",
      },
    ],
  },
  {
    name: "chapter2",
    data: [
      {
        id: 1,
        img: "/images.png",
        view: 8,
        title: "lesson 1",
        price: 20,
        dateCreate: "20/5/2024",
      },
      {
        id: 2,
        img: "/images.png",
        view: 7,
        title: "lesson 2",
        price: 40,
        dateCreate: "20/7/2024",
      },
      {
        id: 3,
        img: "/images.png",
        view: 1222,
        title: "lesson 3",
        price: 400,
        dateCreate: "10/12/2024",
      },
    ],
  },
  {
    name: "chapter2",
    data: [
      {
        id: 1,
        img: "/images.png",
        view: 8,
        title: "lesson 1",
        price: 20,
        dateCreate: "20/5/2024",
      },
      {
        id: 2,
        img: "/images.png",
        view: 7,
        title: "lesson 2",
        price: 40,
        dateCreate: "20/7/2024",
      },
      {
        id: 3,
        img: "/images.png",
        view: 1222,
        title: "lesson 3",
        price: 400,
        dateCreate: "10/12/2024",
      },
    ],
  },
  {
    name: "chapter2",
    data: [
      {
        id: 1,
        img: "/images.png",
        view: 8,
        title: "lesson 1",
        price: 20,
        dateCreate: "20/5/2024",
      },
      {
        id: 2,
        img: "/images.png",
        view: 7,
        title: "lesson 2",
        price: 40,
        dateCreate: "20/7/2024",
      },
      {
        id: 3,
        img: "/images.png",
        view: 1222,
        title: "lesson 3",
        price: 400,
        dateCreate: "10/12/2024",
      },
    ],
  },
];
const Home = () => {
  return (
    <main className="relative md:top-20 flex flex-col justify-center items-center flex-wrap">
      <CardLesson data={data} />
    </main>
  );
};

export default Home;
