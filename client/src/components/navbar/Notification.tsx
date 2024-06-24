"use client";
import { RiNotification4Fill } from "react-icons/ri";
import { useState } from "react";
import NotificationMenu from "./NotificationMenu";
const NotificationPage = () => {
  const [openNotification, setOpenNotification] = useState(false);

  return (
    <div
      className="cursor-pointer relative"
      onClick={() => {
        setOpenNotification((prev) => !prev);
      }}
    >
      <RiNotification4Fill className="w-8 h-8 hover:bg-sky-400 hover:px-2 rounded-lg duration-300" />
      {openNotification ? <NotificationMenu /> : <></>}
    </div>
  );
};

export default NotificationPage;
