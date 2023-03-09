import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'

import CommentItem from '../CommentItem'

console.log(formatDistanceToNow(new Date()))

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
    commentsCount: 0,
    commentsList: [],
  }

  onAddComments = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isActive: false,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  onDeleteCommentsList = id => {
    const filteredList = initialCommentsList.filter(
      eachComment => eachComment.id === id,
    )
    this.setState({commentsList: filteredList})
  }

  render() {
    const {commentsList} = this.state

    return (
      <div className="top-container">
        <h1 className="heading">Comments</h1>
        <div className="form-img-container">
          <form className="form-container" onSubmit={this.onAddComments}>
            <label htmlFor="comment" className="label-text">
              Say something about 4.0 Technologies
            </label>
            <input
              onChange={this.onChangeName}
              placeholder="Your Name"
              className="input"
              id="comment"
              type="text"
            />
            <textarea
              onChange={this.onChangeComment}
              placeholder="Your Comment"
              className="textarea"
              rows="10"
              cols="50"
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
            <span className="comments-counter">0</span> Comments
          </p>
          <ul>
            {commentsList.map(eachItem => (
              <CommentItem
                commentDetails={eachItem}
                onDeleteCommentsList={this.onDeleteCommentsList}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Comments
