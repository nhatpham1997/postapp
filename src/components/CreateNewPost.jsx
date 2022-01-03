import React, { Component } from "react";

class CreateNewPost extends Component {
    handleOnClick = () => {
        this.props.show()
    }
    render() {

        return (
            <div className="flex justify-center">
                <div className="w-[500px] h-[123px] mt-10 bg-white flex items-center justify-center rounded-lg shadow-md overflow-hidden">
                    <button className="bg-gray-100 pl-5 pr-32 py-2 rounded-full" onClick={this.handleOnClick}>Bạn đang nghĩ gì?</button>
                </div>
            </div>
        );
    }
}

export default CreateNewPost;
