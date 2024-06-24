import React from "react";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    name: "chapter1",
    data: [
      {
        id: 1,
        img: "/images.png",
        view: 8,
        title: "exam 1",
        price: 20,
        dateCreate: "20/5/2024",
      },
      {
        id: 2,
        img: "/images.png",
        view: 7,
        title: "exam 2",
        price: 40,
        dateCreate: "20/7/2024",
      },
      {
        id: 3,
        img: "/images.png",
        view: 122,
        title: "exam 3",
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
        title: "exam 1",
        price: 20,
        dateCreate: "20/5/2024",
      },
      {
        id: 2,
        img: "/images.png",
        view: 7,
        title: "exam 2",
        price: 40,
        dateCreate: "20/7/2024",
      },
      {
        id: 3,
        img: "/images.png",
        view: 1222,
        title: "exam 3",
        price: 400,
        dateCreate: "10/12/2024",
      },
    ],
  },
];
function Exam() {
  return (
    <div className="bg-white md:w-4/12 w-full h-80 overflow-y-auto py-5 md:min-w-80 rounded-md m-3 pl-2 shadow-md">
      {data.map((chapter, index) => (
        <div key={index} className="w-11/12  ">
          <div className="text-black text-2xl">{chapter.name}</div>
          {chapter.data.map((lesson) => (
            <div
              key={lesson.id}
              className="card  rounded-md w-full bg-red-200 hover:bg-red-100 cursor-pointer"
            >
              <Link
                href="/"
                className="name capitalize mb-2 w-full block border-b-2 border-black px-2 py-1 hover:px-4 hover:text-slate-400 duration-300"
              >
                {lesson.title}
              </Link>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Exam;
