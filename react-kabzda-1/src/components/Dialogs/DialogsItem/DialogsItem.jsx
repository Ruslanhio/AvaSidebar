import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './DialogsItem.module.css'

const DialogsItem = (props) => {
    let path = '/dialogs/' + props.id
    return(
       
          <div className={classes.dialogsItem + '' + classes.active}>
            <NavLink to ={path}>{props.name}</NavLink>
           </div>
          
    )
}
export default DialogsItem