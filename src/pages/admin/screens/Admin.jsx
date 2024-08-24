import { useSelector } from "react-redux";

const Admin = () => {
  const isAdmin  = useSelector((state) => state.user.userInfo?.filterdData.admin);
    return <div className="text-5xl font-blod flex justify-center items-center h-[100%] " >{isAdmin ? "Admin Dashboard" :"Your Dashboard"}</div>;
  };
  
  export default Admin;