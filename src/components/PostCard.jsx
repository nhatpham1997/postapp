import React, { Component } from 'react';
import postApi from '../api/postApi';
import ListComments from './ListComments';

class Postcard extends Component {
  onRemove = (id) => {
    postApi.remove(id);
  }
  render() {
    const { content, id } = this.props;
    return (
      <div className='flex justify-center'>
        <div className='w-[500px] bg-white my-2 rounded-md shadow-md'>
          <div className='p-4'>
            <h4>{content}</h4>
            <ListComments />
            <button>Edit</button>
            <button onClick={() => this.onRemove(id)}>Remove</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Postcard;
