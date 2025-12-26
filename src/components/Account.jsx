import React, { useContext, useEffect } from "react";
import { userContext } from "./context/userContext";
import { useNavigate } from "react-router-dom";
import profile from "./images/profile.png"
import cam from "./images/cam.svg"
import { LogOut } from "lucide-react";

const Account = () => {
  const { loggedInUser, setIsLogin } = useContext(userContext);
  const navigate = useNavigate();
  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");
    if (!isLogin) {
      navigate("/login");
    }
  }, []);

  const handleLogout=()=>{
    setIsLogin(false)
    navigate("/login")
  }
 
  return (
    <>
      <div
        className={`w-full bg-[#F7F8F9] h-screen flex items-start md:justify-center md:items-center `}
      >
        <div className="sm:w-100  flex flex-col gap-y-2">
          <div className="px-6 flex justify-between items-center py-4 shadow-sm bg-white w-full">
            <h1>Account Settings</h1>
             <button onClick={handleLogout} className="cursor-pointer"  ><LogOut className="size-5 text-red-600"/></button>
          </div>
          <div className=" p-5 mt-5">
             <div className="flex gap-x-4">
               <div className="relative">
               <img className="w-19 h-19" src={profile} alt="" />
               <img className="h-5.25 w-5.75 absolute right-0 bottom-0" src={cam} alt="" />
               </div>
               <div>
                <h1 className="font-medium ">{loggedInUser?.fullName}</h1>
                <p>{loggedInUser?.email}</p>
               </div>
             </div>
                <p className="mt-7.5">Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Account;
