import React,{FC} from 'react';
import {IUser} from "../types/types";

interface UserListProps {
    users:IUser[];

    
}

const UserList: FC<UserListProps> = ({users}) => {

    return (
        <div>
            {users.map(user=>
            <div key={user.id}>
                {user.id}. {user.name} Телефон: {user.phone}
            </div>
            )}
        </div>
    );
};

export default UserList;