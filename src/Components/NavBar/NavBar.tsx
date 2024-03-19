import React from 'react';
import s from './NavBar.module.css'
import {NavLink} from "react-router-dom";


export const NavBar = () => {
    return (


        <nav className={s.nav}>
            <div className={s.item}><NavLink to={'/Profile'} activeClassName={s.ActiveLink}>Profile</NavLink></div>
            <div className={`${s.item} ${s.Active}`}><NavLink to={'/Dialogs'} activeClassName={s.ActiveLink}>Message</NavLink></div>
            <div className={s.item}><NavLink to={'/News'} activeClassName={s.ActiveLink}>News</NavLink></div>
            <div className={s.item}><NavLink to={'/Music'} activeClassName={s.ActiveLink}>Music</NavLink></div>
            <div className={s.item}><NavLink to={'/Settings'} activeClassName={s.ActiveLink}>Settings</NavLink></div>
        </nav>


    );
};


