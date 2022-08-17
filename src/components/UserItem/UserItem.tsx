import React, {ChangeEvent, FC, useState} from 'react';
import {IUser} from "../../types/types";
import './UserItem.css';


interface UserItemProps {
    user:IUser;

}



const UserItem:FC<UserItemProps> = ({user}) => {

    const [editActive, setEditActive] = useState<boolean>(false)
    const [editName, setEditName] = useState(user.name);
    const [editPhone, setEditPhone] = useState(user.phone);
    const [userName,setUserName]=useState(user.name);
    const [userTelephone,setUserTelephone]=useState(user.phone);

    const handleName = (e: ChangeEvent<HTMLInputElement>) => setEditName(e.target.value)
    const handlePhone = (e: ChangeEvent<HTMLInputElement>) => setEditPhone(e.target.value)


    const editMode = () => setEditActive(true)

    const saveChanges = () => {
        setUserName(editName)
        setUserTelephone(editPhone)
        setEditActive(false)
    }



    return (
        <div className="users-list">
            <div className="users-list__item">
                {!editActive ? <p>{user.userId}. Имя:{userName} </p> : <p>Имя:<input type="text" onChange={handleName} value={editName}/></p>}
                {!editActive ? <p>Телефон: {userTelephone} </p> : <p>Телефон:<input type="text" onChange={handlePhone} value={editPhone}/></p>}
            </div>

            <div className="users-list__buttons">
                {editActive ? <button onClick={saveChanges} className="users-list__buttons__edit">Сохранить изменения</button> :
                    <button onClick={editMode} className="users-list__buttons__edit">Редактировать</button>}
                <button  className="users-list__buttons__delete">Удалить</button>

            </div>
        </div>
    );
};

export default UserItem;