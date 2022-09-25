import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/profile' className = { navData => navData.isActive ? classes.active : classes.item }>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/dialogs' className = { navData => navData.isActive ? classes.active : classes.item }>Message</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/users' className = { navData => navData.isActive ? classes.active : classes.item }>Users</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/news' className = { navData => navData.isActive ? classes.active : classes.item }>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/friends' className = { navData => navData.isActive ? classes.active : classes.item }>Friends</NavLink>
            </div>
            {/* <div className={classes.nav}>
                <NavLink to='#'>Music</NavLink>
            </div>
            <div className={classes.nav}>
                <NavLink to='#'>Settings</NavLink>
            </div> */}
        </nav>
    )
}

export default Navbar;