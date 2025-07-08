import {IRes} from "../types";
import {IUser} from "../interfaces";
import {urls} from "../constants";
import {apiService} from "./apiService";

const userService = {
    getAlL: (): IRes<IUser[]> => apiService.get(urls.users.base),
    getById: (id: number): IRes<IUser> => apiService.get(urls.users.byId(id)),
}

export {
    userService
}