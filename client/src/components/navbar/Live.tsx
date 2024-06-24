import { RiLiveFill } from "react-icons/ri";
import Link from "next/link";

const LivePage = () => {
  return (
    <Link href="/" className="cursor-pointer">
      <RiLiveFill className="w-8 h-8 hover:bg-red-400 hover:px-2 rounded-lg duration-300" />
    </Link>
  );
};

export default LivePage;
