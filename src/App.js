
import './App.css';
import {useEffect, useState} from "react";
import Users from "./components/Users";
import Posts from "./components/Posts";
import Coments from "./components/Coments";

function App() {
    return (
        <div className="wrap">
            <div className="header">
                <div className="users">  <Users/>  </div>
                <div className="posts">  <Posts/>  </div>
            </div>
            <hr/>
            <Coments/>
        </div>
    );
}

export default App;
