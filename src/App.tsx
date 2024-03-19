import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/NavBar/NavBar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";




function App() {


    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>аааааааааааааааа
         {/*   <Profile/>*/}
            <div className={"app-wrapper-content"}>
               {/* <Dialogs/>*/}
                <Profile/>
            </div>

        </div>
    );
}

export default App;
