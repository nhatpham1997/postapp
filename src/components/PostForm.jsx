import React, { Component, Fragment } from "react";
import postApi from "../api/postApi";
import { Dialog, Transition } from '@headlessui/react'

class NewPostForm extends Component {
    state = {
        content: ""
    }
    onChange = (e) => {
        this.setState({ content: e.target.value })
    }
    onHidden = () => {
        this.props.hidden()
    }
    addPost = async () => {
        const newPost = await postApi.create({ content: this.state.content });
        this.onHidden();
        this.props.pushPost(newPost);
    }
    onEdit = async () => {
        const newPost = await postApi.edit(this.props.id, { content: this.state.content });
        this.onHidden();
        this.props.editPost(this.props.id, this.state.content);
    }

    render() {
        const { show, id, content } = this.props;
        return (
            <Dialog open={show} onClose={this.onHidden} className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-center justify-center min-h-screen">
                    <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
                    <div className="relative bg-white rounded max-w-sm mx-auto w-[500px] min-h-[250px] flex flex-col justify-center items-center">
                        <h4 className="text-xl mb-4">{id ? "Chỉnh sửa bài viết" : "Tạo bài viết"}</h4>
                        <input className="px-10 py-2 rounded-md" type="text" placeholder="Bạn đang nghĩ gì?" onChange={this.onChange} defaultValue={content} />
                        <div className="space-x-4 mt-5">
                            <button className="px-5 py-1 rounded-lg bg-blue-500 text-white shadow-md border-2" onClick={id ? this.onEdit : this.addPost}>{id ? 'Sửa' : 'Đăng'}</button>
                            <button className="px-5 py-1 rounded-lg bg-red-500 text-white shadow-md border-2" onClick={this.onHidden}>Hủy</button>
                        </div>
                    </div>
                </div>
            </Dialog>
        );
    }
}

export default NewPostForm;
