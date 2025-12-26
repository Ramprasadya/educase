import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { userContext } from './context/userContext';

const Login = () => {
     const {setLoggedInUser, setIsLogin} = useContext(userContext)
      const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
      });
      const navigate = useNavigate()
      const handleSubmit=()=>{
        let user = localStorage.getItem("user")
         user = JSON.parse(user)
        if(user?.email === loginForm.email || user?.password === loginForm.password){
            setIsLogin(true)
            setLoggedInUser(user)
            navigate("/account")
        }else{
            alert("Enter valid credentials")
        }
      }
  return (
        <div className="w-full h-screen flex  md:justify-center md:items-center p-5 ">
          <div className="sm:w-100  flex flex-col gap-y-2">
            <h1 className=" text-2xl font-bold">Signin to your PopX account</h1>
            <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
            <div className="flex flex-col gap-y-3 mt-4">
              <div className="relative">
                <label
                  htmlFor=""
                  className="absolute -top-2 left-3 bg-[#F9F9F9] px-1 text-sm text-[#6C25FF] font-medium"
                >
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  value={loginForm.email}
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, email: e.target.value })
                  }
                  className="w-full px-4 py-2 outline-none border rounded-md"
                />
              </div>
              <div className="relative">
                <label
                  htmlFor=""
                  className="absolute -top-2 left-3 bg-[#F9F9F9] px-1 text-sm text-[#6C25FF] font-medium"
                >
                  Password
                </label>
                <input
                  required
                  type="text"
                  value={loginForm.password}
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, password: e.target.value })
                  }
                  className="w-full px-4 py-2 outline-none border rounded-md"
                />
              </div>
            </div>
            <button className="w-full px-3 py-2 bg-[#6C25FF] text-white font-bold rounded-md cursor-pointer" onClick={handleSubmit}>
              Login
            </button>
          </div>
        </div>
  )
}

export default Login