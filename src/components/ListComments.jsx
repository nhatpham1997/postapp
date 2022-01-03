import React, { Component } from 'react';
import postApi from '../api/postApi';

class ListComments extends Component {
  state = {
    comment: ''
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const newComment = await postApi.edit(this.props.id, { comment: [this.state.comment, ...this.props.comment] });
    this.props.addComment(this.props.id, newComment);
    this.setState({
      comment: ''
    })
  }
  handleChange = (e) => {
    this.setState({
      comment: e.target.value
    })
  }
  render() {
    const { comment } = this.props;
    return (
      <div className='mb-4'>
        {comment.map((item, index) => (
          <div key={index}>
            <h4>{item}</h4>
          </div>
        ))}
        <form onSubmit={this.handleSubmit}>
          <input className="bg-gray-100 pl-5 pr-32 py-2 rounded-full w-full" type="text" value={this.state.comment} placeholder='Viết bình luận' onChange={this.handleChange} />
          <button type="submit" className='hidden'>Submit</button>
        </form>
      </div>
    );
  }
}

export default ListComments;