import {IRes} from "../types";
import {IPost} from "../interfaces";
import {urls} from "../constants";
import {apiService} from "./apiService";

const postService = {
    getAlL: (): IRes<IPost[]> => apiService.get(urls.posts.base),
    getById: (id: number): IRes<IPost> => apiService.get(urls.posts.byId(id)),
}

export {
    postService
}