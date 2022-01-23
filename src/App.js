
import './App.css';
import {useEffect, useState} from "react";
import Users from "./components/Users";
import Posts from "./components/Posts";
import Coments from "./components/Coments";

function App() {
    return (
        <div>
            <Users/>
            <hr/>
            <Posts/>
            <hr/>
            <Coments/>

<h1>hello</h1>
        </div>
    );
}

export default App;
