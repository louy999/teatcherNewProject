const ProfileLoadingPage = () => {
  return (
    <main className="flex justify-center items-center flex-wrap w-full ">
      <section className="w-full h-fit flex justify-center items-center animate-pulse">
        <div className="container flex md:w-6/12 justify-around h-fit min-h-64  items-center bg-white rounded-md py-4">
          <div class="px-3 py-1 text-xs font-medium leading-none text-center bg-black text-white rounded-full animate-pulse">
            loading...
          </div>
        </div>
      </section>
      <div className="bg-white w-3/12 h-80 overflow-y-auto py-5  rounded-md m-3 pl-2 animate-pulse">
        <div className="container flex  justify-around w-full h-full  items-center bg-white rounded-md py-4">
          <div class="px-3 py-1 text-xs font-medium leading-none text-center bg-black text-white rounded-full animate-pulse">
            loading...
          </div>
        </div>
      </div>
      <div className="bg-white w-3/12 h-80 overflow-y-auto py-5  rounded-md m-3 pl-2 animate-pulse">
        <div className="container flex  justify-around w-full h-full  items-center bg-white rounded-md py-4">
          <div class="px-3 py-1 text-xs font-medium leading-none text-center bg-black text-white rounded-full animate-pulse">
            loading...
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfileLoadingPage;
