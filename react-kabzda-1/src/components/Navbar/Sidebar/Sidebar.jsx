import React from 'react'
import classes from './Sidebar.module.css'
import SidebarItem from "./SidebarItem/SidebarItem";
import {NavLink} from "react-router-dom";


const sidebar = (props) => {
   let sidebarElements = props.sidebar.map(s =><SidebarItem name = {s.name} id={s.id}/>)

    return (
        <nav>
        <div>
        <div className={classes.sideItem}>
            Friends
        </div>
             <div className={classes.sideBtn}>
                 <NavLink to='/avatar'className={navData=>navData.isActive ? classes.sideBtn : classes.avaImg}><img  src='https://www.perunica.ru/uploads/posts/2019-03/1552932077_1.jpg'/> </NavLink>
            {sidebarElements}
        </div>
        </div>
        </nav>
    )
}
export default sidebar