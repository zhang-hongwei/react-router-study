import React, { useState } from "react";
import logo from "./logo.svg";
// import App from './App';
import A from "./pages/a";
import B from "./pages/b";
import "./App.css";
import { Router, Route, Switch, Link } from "react-router-dom";
import MyContext from "./pages/context/mycontext";
import RouterWrap from "./router";

function App() {
    const handleClick = () => {
        // setval((val += 1));

        // window.history.go(-1)
        window.history.pushState(
            { foo: "bar", key: "123123123" },
            "page1",
            "http://localhost:3000/b"
        );
    };

    let [val, setval] = useState(0);
    return (
        <MyContext.Provider value={{ val: val }}>
            <button onClick={handleClick}> click</button>
            <RouterWrap></RouterWrap>
        </MyContext.Provider>
    );
}

export default App;
