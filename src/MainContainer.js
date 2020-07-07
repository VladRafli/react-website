import React from 'react';
import Posts from "./Posts"
import "./App.css"

function MainContainer(){
    return(
        <div className="container">
            <div className="sidebar-left">
                <button href="#">Menu 1</button>
                <button href="#">Menu 2</button>
                <button href="#">Menu 3</button>
            </div>
            <div className="sidebar-right">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="main-content">
                <Posts author="John Doe"/>
                <Posts author="Josh Dun"/>
            </div>
        </div>
    );
}

export default MainContainer;