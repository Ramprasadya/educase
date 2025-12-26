import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
  return (
          <div
        className={`w-full h-screen flex items-end md:justify-center md:items-center p-5 `}
      >
        <div className="sm:w-100  flex flex-col gap-y-2">
          <h1 className="text-2xl font-bold">Welcome to PopX</h1>
          <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
          <div className="flex flex-col gap-y-2">
            <button
              className="w-full px-3 py-2 bg-[#6C25FF] text-white rounded-md cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              Create Account
            </button>
            <button
              className="w-full px-3 py-2 bg-[#6C25FF4B] text-black font-bold rounded-md cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Already Registered? Login
            </button>
          </div>
        </div>
      </div>
  )
}

export default Home