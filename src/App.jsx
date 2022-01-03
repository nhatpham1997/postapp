import React, { Component } from "react";
import CreateNewPost from "./components/CreateNewPost";
import PostForm from "./components/PostForm";
import "tailwindcss/tailwind.css";
import ListPost from "./components/ListPost";
import postApi from "./api/postApi";

class App extends Component {
    state = {
        show: false,
        postList: []
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

    showForm = () => {
        this.setState((pre) => ({
            show: !pre.show
        }))
    }
    render() {
        const { show, postList } = this.state;
        console.log(postList)
        return (
            <div className="bg-slate-100 min-h-screen">
                <CreateNewPost show={this.showForm} />
                <PostForm show={show} hidden={this.showForm} />
                <ListPost list={postList} />
            </div>
        );
    }
}

export default App;
