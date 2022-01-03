import axiosClient from "./axiosClient";

class PostApi {
    getAll = (params) => {
        const url = "/posts";
        return axiosClient.get(url, { params });
    };
    create = (content) => {
        const url = "/posts";
        return axiosClient.post(url, content);
    };
    edit = (id, value) => {
        const url = `/posts/${id}`;
        return axiosClient.put(url, value);
    };
    remove = (id) => {
        const url = `/posts/${id}`;
        return axiosClient.delete(url);
    };
}

const postApi = new PostApi();
export default postApi;