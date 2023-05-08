import React from "react";
import { useState, useContext } from "react";
import { Home } from "./Components/Home/Home";
import { Login } from "./Components/Login/Login"
import Cookies from 'js-cookie'
import { Route, Router } from 'react-router-dom'
import LoginContext from './context/login.context'
import { Customer } from "./Components/Customer/Customer";

function App() {

    return (
        <>
            <Home />
        </>

    )
}

export default App;