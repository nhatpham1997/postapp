import React, { Component } from 'react';
import Postcard from './PostCard';

class ListPost extends Component {
  changeShow = () => {
    this.props.changeShow();
  }
  dataItem = (id, content) => {
    this.props.dataItem(id, content)
  }
  addComment = (id, comment) => {
    this.props.addComment(id, comment);
  }
  render() {
    const { list } = this.props;
    console.log(list)
    return (
      <div className='mt-10'>
        {list?.map((item) => (
          <Postcard key={item.id} id={item.id} createdAt={item.createdAt} content={item.content} imageUrl={item.imageUrl} comment={item.comment} changeShow={this.changeShow} dataItem={this.dataItem} addComment={this.addComment} />
        ))}
      </div>
    );
  }
}

export default ListPost;