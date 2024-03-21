import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/NavBar/NavBar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";


function App() {


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>

                <div className={"app-wrapper-content"}>

                    <Route exact={true} path={'/Dialogs'} component={Dialogs}/>
                    <Route exact={true} path={'/Profile'} component={Profile}/>
                    <Route exact={true} path={'/News'} component={News}/>
                    <Route exact={true} path={'/Music'} component={Music}/>
                    <Route exact={true} path={'/Settings'} component={Settings}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
