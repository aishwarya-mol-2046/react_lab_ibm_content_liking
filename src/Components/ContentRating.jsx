import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      dislikes: 0,
      totalRatings: 0
    };
  }

  handleLike = () => {
    this.setState((prevState) => ({
      likes: prevState.likes + 1,
      totalRatings: prevState.totalRatings + 1
    }));
  };

  handleDislike = () => {
    this.setState((prevState) => ({
      dislikes: prevState.dislikes + 1,
      totalRatings: prevState.totalRatings + 1
    }));
  };

  render() {
    return (
      <>
        <div className="content-rating">
          <p>
            React is a popular open-source JavaScript library developed by Meta for building dynamic and interactive user interfaces. It uses a component-based architecture, allowing developers to create reusable UI elements. React employs a Virtual DOM to efficiently update only changed parts of the page, improving performance. It supports JSX, which combines HTML and JavaScript, and offers Hooks like `useState` and `useEffect` for managing state and lifecycle features in functional components. React ensures unidirectional data flow, making applications predictable and easy to debug. It’s widely used for developing modern single-page applications (SPAs) with fast rendering and responsive designs.
          </p>

          <div className="rating-buttons">
            <button className="like-button" onClick={this.handleLike}>
              Like ({this.state.likes})
            </button>
            <button className="dislike-button" onClick={this.handleDislike}>
              Dislike ({this.state.dislikes})
            </button>
            <p>Total Ratings: {this.state.totalRatings}</p>
          </div>
        </div>
      </>
    );
  }
}

export default ContentRating;
