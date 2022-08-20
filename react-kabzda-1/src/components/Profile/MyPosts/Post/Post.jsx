import React from 'react'
import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div className={classes.item}>
            <div>
                <img src='http://pm1.narvii.com/6825/d74beddc6e5570160f786213f68d740dc0c30834v2_00.jpg'/>
                {props.message}
            </div>
            <div>
                <span>
                like
            </span>
                {props.likeNumber}
            </div>
        </div>
    )
}


export default Post