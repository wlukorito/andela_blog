import './Comment.css'

const Comment = ({comment}) => {
    return (
        <div className='comment'>
            <p className="email">{comment.email}</p>
            <p className="name">{comment.name}</p>
            <p className="body">{comment.body}</p>
        </div>
    )
}

export default Comment