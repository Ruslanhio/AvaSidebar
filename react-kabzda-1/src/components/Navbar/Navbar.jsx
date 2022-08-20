import React from 'react'
 import { NavLink } from 'react-router-dom'
import classes from './Navbar.module.css'
import Sidebar from "./Sidebar/Sidebar";



const Navbar = (props) => {
    return <nav className={classes.nav}>
        <div className={`${classes.item} ${classes.active}`}>
            <NavLink to='/profile' className = { navData => navData.isActive ? classes.active : classes.item } >Profile</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/dialogs' className={navData=>navData.isActive ? classes.active : classes.item}>Messages</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to ='/News'>News</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/Music'>Music</NavLink>
        </div>
        <div >
            <Sidebar sidebar={props.state.sidebar}/>
        </div>
    </nav>
}
export default Navbar
