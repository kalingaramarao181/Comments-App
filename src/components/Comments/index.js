import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'

import CommentItem from '../CommentItem'

const instantTimeDistance = formatDistanceToNow(new Date())

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const initialCommentsList = []

class Comments extends Component {
  state = {
    name: '',
    comment: '',
    commentsList: initialCommentsList,
    backgroundColor: initialContainerBackgroundClassNames[0],
    timeDistance: instantTimeDistance,
  }

  onAddComments = event => {
    event.preventDefault()
    const randomNumber = Math.floor(Math.random() * 7)
    const {name, comment, timeDistance} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLikeActive: false,
      timeDistance,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
      backgroundColor: initialContainerBackgroundClassNames[randomNumber],
      timeDistance: prevState.timeDistance + 1,
    }))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  toggleIsFavorite = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (eachComment.id === id) {
          console.log(id)
          return {...eachComment, isLikeActive: !eachComment.isLikeActive}
        }
        return eachComment
      }),
    }))
  }

  onDeleteCommentsList = id => {
    const {commentsList} = this.state
    const filteredList = commentsList.filter(
      eachComment => eachComment.id !== id,
    )
    this.setState({commentsList: filteredList})
  }

  render() {
    const {commentsList, name, comment, backgroundColor} = this.state
    const count = commentsList.length

    return (
      <div className="top-container">
        <h1 className="heading">Comments</h1>
        <div className="form-img-container">
          <form className="form-container" onSubmit={this.onAddComments}>
            <p htmlFor="comment" className="label-text">
              Say Something about 4.0 Technologies
            </p>
            <input
              onChange={this.onChangeName}
              placeholder="Your Name"
              className="input"
              id="comment"
              type="text"
              value={name}
            />
            <textarea
              onChange={this.onChangeComment}
              placeholder="Your Comment"
              className="textarea"
              rows="10"
              cols="50"
              value={comment}
            />
            <button className="submit-button" type="submit">
              Add Comment
            </button>
          </form>
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </div>
        <hr className="line" />
        <div className="bottom-container">
          <p className="comments-title">
            <span className="comments-counter">{count}</span> Comments
          </p>
          <ul>
            {commentsList.map(eachItem => (
              <CommentItem
                toggleIsFavorite={this.toggleIsFavorite}
                commentDetails={eachItem}
                onDeleteCommentsList={this.onDeleteCommentsList}
                count={count}
                backgroundColor={backgroundColor}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Comments
