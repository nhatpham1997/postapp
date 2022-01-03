import React, { Component } from "react";
import CreateNewPost from "./components/CreateNewPost";
import PostForm from "./components/PostForm";
import "tailwindcss/tailwind.css";
import ListPost from "./components/ListPost";
import postApi from "./api/postApi";

class App extends Component {
    state = {
        show: false,
        postList: [],
        postItem: {
            id: '',
            content: ''
        }
    }

    componentDidMount() {
        const fetchPostList = async () => {
            try {
                const response = await postApi.getAll();
                this.setState({ postList: response })
            } catch (error) {
                console.log('Failed to fetch post list: ', error)
            }
        }
        fetchPostList();
    };

    changeShow = () => {
        this.setState((pre) => ({
            ...pre,
            show: !pre.show
        }))
    }

    pushPost = (value) => {
        this.setState((pre) => ({
            ...pre,
            postList: [value, ...this.state.postList]
        }))
    }
    editPost = (id, content) => {
        const index = this.state.postList.findIndex((obj => obj.id == id));
        this.setState((pre) => ({
            ...pre,
            postList: [...this.state.postList.slice(0, index), Object.assign({}, this.state.postList[index], { content }),
            ...this.state.postList.slice(index + 1)]
        }))
    }
    dataItem = (id, content) => {
        this.setState(
            (pre) => ({
                ...pre,
                postItem: {
                    id: id,
                    content: content
                }
            })
        )
    }
    addComment = (id, comment) => {
        const index = this.state.postList.findIndex((obj => obj.id == id));
        this.setState((pre) => ({
            ...pre,
            postList: [...this.state.postList.slice(0, index), comment,
            ...this.state.postList.slice(index + 1)]
        }))
    }

    render() {
        const { show, postList } = this.state;
        console.log(postList)
        return (
            <div className="bg-slate-100 min-h-screen">
                <CreateNewPost show={this.changeShow} />
                <PostForm show={show} hidden={this.changeShow} pushPost={this.pushPost} id={this.state.postItem.id} content={this.state.postItem.content} editPost={this.editPost} />
                <ListPost list={postList} changeShow={this.changeShow} dataItem={this.dataItem} addComment={this.addComment} />
            </div>
        );
    }
}

export default App;
