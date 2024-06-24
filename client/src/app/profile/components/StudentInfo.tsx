import Image from "next/image";

function StudentInfo() {
  return (
    <section className="w-full h-fit flex justify-center items-center ">
      <div className="container flex md:w-2/4 justify-around h-fit min-h-64 w-full  shadow-md items-center bg-white rounded-md py-4">
        <div className="info">
          <div className="name mb-4">
            <span className="title capitalize">name:</span>
            <span className="info ml-2">Louy Hany</span>
          </div>
          <div className="phone mb-4">
            <span className="title capitalize">phone:</span>
            <span className="info ml-2">01029939183</span>
          </div>
          <div className="year mb-4">
            <span className="title capitalize">year:</span>
            <span className="info ml-2">1 year</span>
          </div>
        </div>
        <div className="img">
          <Image
            src="/images.jpeg"
            alt="profile img"
            width={200}
            height={200}
            className="rounded-full w-50 h-48 border-4 border-slate-600 p-2 bg-cover "
          />
        </div>
      </div>
    </section>
  );
}

export default StudentInfo;
