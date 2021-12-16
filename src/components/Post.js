import { useEffect, useState } from "react"
import Comment from "./Comment"
import {getData} from '../api'
import {COMMENTS_URL} from '../api/constants'
import './Post.css'


const Post = ({post}) => {
    const [comments, setCommnets] = useState([])
    
    useEffect(async() =>{
        const commentList = await getData(COMMENTS_URL)
        if(commentList) setCommnets(commentList)
    }, [])

    return (
        <div className="post">
            <p className="title">{post.title}</p>
            <p className="body">{post.body}</p>
            <p className="title">Comments</p>
            <div className="comments">
                {
                comments.length && 
                comments.filter(c => c.postId === post.id).map(cmt => (<Comment key={cmt.id} comment={cmt}/>)
                )}
            </div>
        </div>
    )
}

export default Post