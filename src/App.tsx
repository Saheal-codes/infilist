import { useState } from 'react'
import './App.css';
import HomePage from "./Login/HomePage"
import LoginPage from "./Login/loginpage"
import { BrowserRouter, Routes, Link, Route } from "react-router-dom"
import "./Login/CSS/list.css"

function App() {

    const [isLoggedin, setisLoggedin] = useState(false)

    const login = () => {
        setisLoggedin(true)
        localStorage.setItem("isLoggedin", "true");
    }

    const logout = () => {
        setisLoggedin(false)
        localStorage.removeItem("isLoggedin");
    }

    return (
        <BrowserRouter>
            <nav className='nav'>
                <ul className='list'>
                    {isLoggedin ?
                        (<>
                            <li className='nav-links home'>
                            <Link to="/home">
                               HOME 
                            </Link>
                            </li>
                            <li className='nav-links logout'>
                            <button onClick={logout} >
                                LOGOUT
                            </button>
                            </li>
                        </>)
                        : 
                            <li className='nav-links'>
                            <Link to="/login">
                                LOGIN
                            </Link>
                            </li>
                    }</ul>

            </nav>
            <Routes>
                {
                    !isLoggedin
                        ? <Route path="/login" element={<LoginPage login={login} />} />
                        : <Route path="/home" element={<HomePage logout={logout} />} />
                }
            </Routes>

        </BrowserRouter>
    );
}

export default App;