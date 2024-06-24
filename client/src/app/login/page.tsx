const LoginPage = () => {
  return (
    <section className="flex justify-center items-center w-full flex-wrap h-screen ">
      <form className="bg-slate-500 rounded-md py-5 px-2 md:w-1/4 w-11/12 flex flex-wrap gap-5 justify-center">
        <div className="w-full text-center text-white text-2xl">Login</div>
        <input
          type="text"
          className="w-full bg-slate-100 rounded-md  py-2 px-1"
          placeholder="Enter your number"
        />
        <input
          type="password"
          className="w-full bg-slate-100 rounded-md py-2 px-1 "
          placeholder="Enter your password"
        />
        <input
          type="submit"
          value="Login"
          className="bg-blue-500 cursor-pointer w-fit py-3 px-10 rounded-md text-slate-200"
        />
      </form>
    </section>
  );
};

export default LoginPage;
