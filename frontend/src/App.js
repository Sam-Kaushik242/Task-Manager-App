import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About.js';
import Blog from './Components/Blog.js';
import Contact from './Components/Contact.js';
import TodoList from './Components/Todo/TodoList';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Signup from './Components/Contact/Signup.js';
import ForgotPswrd from './Components/Contact/ForgotPswrd.js';
import Login from './Components/Contact/Login.js';
import OTPInput from './Components/Contact/OTPInput.js';
import Recovered from './Components/Contact/Recovered.js';
import Reset from './Components/Contact/Reset.js';
import PvtComponent from './Components/PvtComponent.js';
import Header from './Components/Header.js';
import { useEffect, useState } from 'react';
function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
  const [, setPage] = useState()
  const [email, setEmail] = useState()
  const [, setOtp] = useState()
  
  // const RecoveryContext = createContext();
  

  useEffect(()=>{
    localStorage.setItem("theme", theme)
    const localTheme = localStorage.getItem("theme")
    document.querySelector("html").setAttribute("data-theme", localTheme)
  }, [theme])

  const handleSwitch = (e) =>{
    if(e.target.checked){
      setTheme("dark")
    }else{
      setTheme("light")
    }
  }
  return (
    <Router>
    <div className={`App text-${theme === "dark" ? "white" : "black"}`}>
        <Header handleSwitch={handleSwitch}/>
      <div className="panel flex justify-center md:gap-28">
      <Navbar theme={theme}/>
      <Routes>
      <Route element={<PvtComponent/>}>
      <Route exact path='/' element={<TodoList/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/blog' element={<Blog/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
      </Route>
      <Route exact path='/signup' element={<Signup theme={theme}/>}/>
      <Route exact path='/login' element={<Login theme={theme} />}/>
      <Route exact path='/otp' element={<OTPInput setEmail={setEmail} email={email} setOtp={setOtp} theme={theme}/>}/>
      <Route exact path='/recovered' element={<Recovered setEmail={setEmail} email={email} setOtp={setOtp} />}/>
      <Route exact path='/reset' element={<Reset theme={theme} setPage={setPage} setEmail={setEmail} email={email} setOtp={setOtp} />}/>
      <Route exact path='/password/forgot' element={<ForgotPswrd setEmail={setEmail} email={email} setOtp={setOtp} setPage={setPage}/>}/>
      </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
