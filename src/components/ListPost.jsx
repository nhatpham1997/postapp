import React, { Component } from 'react';
import Postcard from './PostCard';

class ListPost extends Component {
  render() {
    const { list } = this.props;
    console.log(list)
    return (
      <div className='mt-10'>
        {list?.map((item) => (
          <Postcard key={item.id} id={item.id} createdAt={item.createdAt} content={item.content} imageUrl={item.imageUrl} />
        ))}
      </div>
    );
  }
}

export default ListPost;