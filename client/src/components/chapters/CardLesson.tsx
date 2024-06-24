import Image from "next/image";
import { GrView } from "react-icons/gr";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const CardLesson = ({ data }) => {
  return (
    <>
      {data.map((chapter, index) => (
        <div key={index} className="w-11/12 mb-5 ">
          <div className="text-white bg-black rounded-md w-fit px-2 py-1 text-2xl mb-1">
            {chapter.name}
          </div>
          <div className="relative flex items-center ">
            <div className="flex gap-5 overflow-x-auto scrollbar-hide w-full py-5 px-10 bg-black rounded-md">
              {chapter.data.map((lesson) => (
                <div
                  key={lesson.id}
                  className="card bg-white rounded-md p-5 flex-shrink-0 w-80 cursor-pointer"
                >
                  <div className="rounded-md mb-2 relative">
                    <Image
                      className="rounded-t-md"
                      src={lesson.img}
                      alt={lesson.title}
                      width={300}
                      height={300}
                    />
                    <span className="count absolute top-2 right-2 bg-black text-slate-100 rounded-full w-10 h-10 opacity-70 flex justify-center items-center gap-1">
                      <GrView />
                      <span>{lesson.view}</span>
                    </span>
                  </div>
                  <div className="info">
                    <div className="name text-2xl capitalize">
                      {lesson.title}
                    </div>
                    <div className="price text-md opacity-70">
                      {lesson.price}$
                    </div>
                    <div className="dateCreate text-end opacity-70">
                      {lesson.dateCreate}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardLesson;
