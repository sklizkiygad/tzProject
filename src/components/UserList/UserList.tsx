import React,{FC} from 'react';
import {IUser} from "../../types/types";
import './UserList.css';
import UserItem from "../UserItem/UserItem";

interface UserListProps {
    users:IUser[];

}

const UserList: FC<UserListProps> = ({users}) => {

    return (
        <div>
            {users.map(user=>
                <UserItem  key={user.userId} user={user}/>
            )}
        </div>
    );
};

export default UserList;