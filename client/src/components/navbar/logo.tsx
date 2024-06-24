import { GiTeacher } from "react-icons/gi";
import Link from "next/link";

const LogoPage = () => {
  return (
    <Link href="/" className="flex justify-center items-center text-xl gap-2">
      <GiTeacher className="w-10 h-10 " />
      LogoPage
    </Link>
  );
};

export default LogoPage;
