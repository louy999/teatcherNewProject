import StudentInfo from "./components/StudentInfo";
import Lesson from "./components/lessons";
import Exam from "./components/exam";

const ProfilePage = () => {
  return (
    <main className="flex justify-center items-center flex-wrap w-full ">
      <StudentInfo />
      <Lesson />
      <Exam />
    </main>
  );
};

export default ProfilePage;
