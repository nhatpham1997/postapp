import React, { Component } from 'react';
import postApi from '../api/postApi';
import ListComments from './ListComments';

class Postcard extends Component {
  onRemove = (id) => {
    postApi.remove(id);
    this.props.removePost(id);
  }
  onEdit = () => {
    this.props.changeShow();
    this.props.dataItem(this.props.id, this.props.content);
  }
  addComment = (id, comment) => {
    this.props.addComment(id, comment);
  }
  render() {
    const { content, id, comment } = this.props;
    return (
      <div className='flex justify-center'>
        <div className='w-[500px] bg-white my-2 rounded-md shadow-md'>
          <div className='p-4'>
            <h4 className='mb-4'>{content}</h4>
            <ListComments comment={comment} id={id} addComment={this.addComment} />
            <div className='space-x-5 flex items-center'>
              <button className='px-5 py-1 rounded-lg bg-blue-500 text-white shadow-md border-2' onClick={this.onEdit}>Edit</button>
              <button className='px-5 py-1 rounded-lg bg-red-500 text-white shadow-md border-2' onClick={() => this.onRemove(id)}>Remove</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Postcard;
