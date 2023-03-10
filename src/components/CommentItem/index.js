import './index.css'

const CommentItem = props => {
  const {
    commentDetails,
    onDeleteCommentsList,
    toggleIsFavorite,
    backgroundColor,
  } = props
  const {name, comment, id, isLikeActive, timeDistance} = commentDetails
  const profileIcon = name[0]

  const onDeleteItem = () => {
    onDeleteCommentsList(id)
  }

  const onClickLike = () => {
    toggleIsFavorite(id)
  }

  const clickLikeChangeClass = isLikeActive ? 'like-text-blue' : ''

  return (
    <li className="list-item">
      <p className="person-name">
        <span className={`person-logo ${backgroundColor}`}>{profileIcon}</span>
        {name}
        <span className="running-time">{timeDistance}</span>
      </p>
      <p className="comment-content">{comment}</p>
      <div className="like-delete-container">
        <button type="button" onClick={onClickLike} className="like-container">
          {isLikeActive ? (
            <img
              className="like-icon"
              alt="like"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
            />
          ) : (
            <img
              className="like-icon"
              alt="like"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
            />
          )}
          <p className={`like-text ${clickLikeChangeClass}`}>Like</p>
        </button>
        <button
          data-testid="delete"
          className="delete-button"
          type="button"
          onClick={onDeleteItem}
        >
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
