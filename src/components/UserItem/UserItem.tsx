import React,{FC} from 'react';
import {IUser} from "../../types/types";
import './UserItem.css';


interface UserItemProps {
    user:IUser;
}


const UserItem:FC<UserItemProps> = ({user}) => {
    return (
        <div className="users-list">
            <div className="users-list__item">
            <p> {user.id}. Имя:{user.name}</p>
            <p>Телефон: {user.phone}</p>
            </div>

            <div className="users-list__buttons">
            <button className="users-list__buttons__edit">Редактировать</button>
            <button className="users-list__buttons__delete">Удалить</button>

            </div>
        </div>
    );
};

export default UserItem;