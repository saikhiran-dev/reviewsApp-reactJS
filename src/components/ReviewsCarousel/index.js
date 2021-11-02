import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeReviewIndex: 0}

  onClickLeftArrow = () => {
    const {activeReviewIndex} = this.state

    if (activeReviewIndex > 0) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    }
  }

  onClickRightArrow = () => {
    const {activeReviewIndex} = this.state
    const {reviewsList} = this.props

    if (activeReviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex + 1,
      }))
    }
  }

  onRenderReviewDetails = reviewsList => {
    const {imgUrl, username, companyName, description} = reviewsList

    return (
      <div className="reviews-container">
        <img src={imgUrl} className="person-image" alt={username} />
        <p className="person-name">{username}</p>
        <p className="company-name">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  render() {
    const {activeReviewIndex} = this.state
    const {reviewsList} = this.props
    const displayReviews = reviewsList[activeReviewIndex]

    return (
      <div className="reviews-bg-container">
        <h1 className="main-heading">Reviews</h1>
        <div className="app-container">
          <button
            type="button"
            className="button"
            onClick={this.onClickLeftArrow}
            testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              className="arrow"
              alt="left arrow"
            />
          </button>
          {this.onRenderReviewDetails(displayReviews)}
          <button
            type="button"
            className="button"
            onClick={this.onClickRightArrow}
            testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              className="arrow"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
