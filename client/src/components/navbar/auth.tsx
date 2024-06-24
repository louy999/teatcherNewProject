import React from "react";
import Link from "next/link";

const AuthPage = () => {
  return (
    <div className="flex items-center gap-4 ">
      <Link
        href="/login"
        className="cursor-pointer hover:bg-black hover:px-2 py-1  rounded-lg duration-300"
      >
        login
      </Link>
      <Link
        href="/register"
        className="cursor-pointer hover:bg-black hover:px-2 py-1  rounded-lg duration-300"
      >
        register
      </Link>
    </div>
  );
};

export default AuthPage;
