import {FC, PropsWithChildren, useEffect, useState} from "react";
import {userService} from "../../services";
import {data} from "react-router-dom";
import {IUser} from "../../interfaces";
import {User} from "./User";

interface IProps extends PropsWithChildren {

}

const Users: FC<IProps> = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        userService.getAlL().then(({data})=>setUsers(data))
    }, []);

    return (
        <div>
            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};