import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "./context/userContext";

const Signup = () => {
  const  {setLoggedInUser,setIsLogin} = useContext(userContext)
  const navigate = useNavigate()
  const [signUpForm, setSignUpForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    companyName: "",
    agency: "",
  });
  const handleSignupOnChange = (field, value) => {
    setSignUpForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit  =()=>{
      localStorage.setItem("user", JSON.stringify(signUpForm))
      setLoggedInUser(signUpForm)
      setIsLogin(true)
      localStorage.setItem("isLogin",true)
      navigate("/account")
  }
  
  return (
    <>
        <div className="w-full h-screen md:flex  md:justify-center md:items-center p-5 ">
          <div className="sm:w-100  flex flex-col gap-y-2">
            <h1 className="text-2xl font-bold">Create your <br/> PopX account</h1>
          <div className="w-full sm:flex sm:flex-col sm:justify-center relative  space-y-4 bg-[#F9F9F9] mt-2">
           
            <div className="relative">
              <label className="absolute -top-2 left-3 bg-[#F9F9F9] px-1 text-sm text-[#6C25FF] font-medium">
                Full Name
              </label>
              <input
                type="text"
                required
                value={signUpForm.fullName}
                onChange={(e) =>
                  handleSignupOnChange("fullName", e.target.value)
                }
                className="w-full px-4 py-2 border rounded-md outline-none focus:border-purple-500"
              />
            </div>
            <div className="relative">
              <label className="absolute -top-2 left-3 bg-[#F9F9F9] px-1 text-sm text-[#6C25FF] font-medium">
                Phone
              </label>
              <input
                type="tel"
                required
                value={signUpForm.phone}
                onChange={(e) => handleSignupOnChange("phone", e.target.value)}
                className="w-full px-4 py-2 border rounded-md outline-none focus:border-purple-500"
              />
            </div>
            <div className="relative">
              <label className="absolute -top-2 left-3 bg-[#F9F9F9] px-1 text-sm text-[#6C25FF] font-medium">
                Email Address
              </label>
              <input
                type="email"
                required
                value={signUpForm.email}
                onChange={(e) => handleSignupOnChange("email", e.target.value)}
                className="w-full px-4 py-2 border rounded-md outline-none focus:border-purple-500"
              />
            </div>
            <div className="relative">
              <label className="absolute -top-2 left-3 bg-[#F9F9F9] px-1 text-sm text-[#6C25FF] font-medium">
                Password
              </label>
              <input
                type="password"
                required
                value={signUpForm.password}
                onChange={(e) =>
                  handleSignupOnChange("password", e.target.value)
                }
                className="w-full px-4 py-2 border rounded-md outline-none focus:border-purple-500"
              />
            </div>
            <div className="relative">
              <label className="absolute -top-2 left-3 bg-[#F9F9F9] px-1 text-sm text-[#6C25FF] font-medium">
                Company Name
              </label>
              <input
                type="text"
                value={signUpForm.companyName}
                onChange={(e) =>
                  handleSignupOnChange("companyName", e.target.value)
                }
                className="w-full px-4 py-2 border rounded-md outline-none focus:border-purple-500"
              />
            </div>
            <div className="">
              <p className="text-sm text-[#6C25FF] font-medium mb-2">
                Are you an agency?
              </p>

              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="agency"
                    value="yes"
                    checked={signUpForm.agency === "yes"}
                    onChange={(e) =>
                      handleSignupOnChange("agency", e.target.value)
                    }
                    className="accent-blue-600"
                  />
                  <span className="text-sm">Yes</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="agency"
                    value="no"
                    checked={signUpForm.agency === "no"}
                    onChange={(e) =>
                      handleSignupOnChange("agency", e.target.value)
                    }
                    className="accent-blue-600"
                  />
                  <span className="text-sm">No</span>
                </label>
              </div>
            </div>
            <button
              className="w-full bg-[#6C25FF] text-white py-2 absolute sm:relative sm:bottom-0 bottom-[-50%] rounded-md
                    transition"
             onClick={handleSubmit}
            >
              Create Account
            </button>
          </div>
          </div>
        </div>
    </>
  );
};

export default Signup;
