import { Route, Routes } from "react-router-dom"
import Signup from "./components/Signup"
import Home from "./components/Home"
import Login from "./components/Login"
import Account from "./components/Account"

function App() {

  return (
    <>
     <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/signup" element={<Signup/>} />
       <Route path="/login" element={<Login/>} />
       <Route path="/account" element={<Account/>} />
     </Routes>
    </>
  )
}

export default App