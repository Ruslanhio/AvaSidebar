import React from 'react'
import classes from '../Sidebar.module.css'
import {NavLink} from "react-router-dom";


const sidebarItem = (props) => {


    return (

        <div>
            <div className={classes.sideBtn}>
            <div className={classes.sideButton}>

            </div>
            </div>
            <div className = {classes.sideNames} >
                <div>
                    {props.name}
                </div>
            </div>
        </div>

    )
}

export default sidebarItem