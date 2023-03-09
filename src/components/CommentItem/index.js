import './index.css'

const CommentItem = props => {
  const {commentDetails, onDeleteCommentsList} = props
  const {name, comment, id} = commentDetails
  console.log(id)
  const profileIcon = name[0]
  const onDeleteItem = () => {
    onDeleteCommentsList(id)
  }
  return (
    <li className="list-item">
      <p className="person-name">
        <span className="person-logo amber">{profileIcon}</span>
        {name}
        <span className="running-time">time</span>
      </p>
      <p className="comment-content">{comment}</p>
      <div className="like-delete-container">
        <div className="like-container">
          <img
            className="like-icon"
            alt="like"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
          />
          <p className="like-text">Like</p>
        </div>
        <button className="delete-button" type="button" onClick={onDeleteItem}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
      <hr className="line" />
    </li>
  )
}

export default CommentItem
