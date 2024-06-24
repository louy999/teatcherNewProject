import SideBar from "./components/SideBar";
export default function Layout({ children }) {
  return (
    <main className="flex items-center h-screen flex-wrap">{children}</main>
  );
}
