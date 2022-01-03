import React, { Component } from 'react';

class Comment extends Component {
  handleOnchange = (e) => {
    console.log(e.target.value)
  }
  render() {
    return (
      <div>
        ddaay la comment
        <input type="text" placeholder='Viết bình luận' onChange={this.handleOnchange} />
        <button>Comment</button>
      </div>
    );
  }
}

export default Comment;
