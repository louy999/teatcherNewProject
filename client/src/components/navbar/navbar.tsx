import React from "react";
import LogoPage from "./logo";
import NotificationPage from "./Notification";
import LivePage from "./Live";
import AuthPage from "./auth";

const NavBar = () => {
  return (
    <section className="flex bg-black bg-opacity-50 shadow-md text-slate-200 md:fixed w-full md:w-3/4 lg:w-2/4 md:top-2 left-2/4 md:-translate-x-2/4 py-2 px-4 md:rounded-lg h-fit items-center justify-between">
      <div className="logo">
        <LogoPage />
      </div>
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <LivePage />
          <NotificationPage />
        </div>
        <AuthPage />
      </div>
    </section>
  );
};

export default NavBar;
