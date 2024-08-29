import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/header/Header";


const AdminLayout = () => {

  const element = document.documentElement;
  element.classList.remove("dark");
  localStorage.removeItem('darkMode');
  
  return (
    <div className="flex flex-col h-screen lg:flex-row overflow-x-hidden" >
      <Header />
      <main className="bg-[#F9F9F9] flex-1 p-4 lg:p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;