import React, { Component } from "react";
import postApi from "../api/postApi";

class NewPostForm extends Component {
    state = {
        content: ""
    }
    onChange = (e) => {
        this.setState({ content: e.target.value })
    }
    onHidden = (e) => {
        e.preventDefault();
        this.props.hidden()
    }
    addPost = (e) => {
        e.preventDefault();
        postApi.create({ content: this.state.content });
    }
    render() {
        const { show } = this.props;
        return (
            <div className={`fixed inset-0 bg-gray-100 ${!show && "hidden"}`}>
                <div className={`${!show && "hidden"} `}>
                    <form className="fixed top-1/4 left-1/2 -ml-[250px] w-full max-w-[500px] bg-white text-center">
                        <h4>Tạo bài viết</h4>
                        <input type="text" placeholder="Bạn đang nghĩ gì?" onChange={this.onChange} />
                        <button onClick={this.addPost}>Tạo</button>
                        <button onClick={this.onHidden}>Hủy</button>
                    </form>
                </div>
            </div >
        );
    }
}

export default NewPostForm;
