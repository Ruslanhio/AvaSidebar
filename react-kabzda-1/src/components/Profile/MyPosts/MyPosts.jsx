import React from 'react'
import Post from './Post/Post'
import classes from './MyPosts.module.css'
const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message ={p.message} likeNumber={p.likeNumber}/>)
    return (
        <div>
            <div className={classes.postsBlock}>
                <h3>My posts</h3>
            </div>
            <div>
                <textarea> </textarea>
                </div>
                <div>
                    <button>add post</button>
                    <button>remove</button>
                </div>
            <div className = {classes.posts}>
                {postsElements}
          <Post/>
            </div>
          </div>
    )
}
export default MyPosts