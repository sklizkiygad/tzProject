import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../../types/types";
import axios from "axios";
import UserItem from "../UserItem/UserItem";
import List from "../List/List";
import './UsersPage.css';
import {useAppDispatch} from "../../redux/store";
import {logout} from "../../redux/auth/authActions";

const UsersPage:FC = () => {
    const dispatch = useAppDispatch();

    const [searchQuery,setSearchQuery]=useState<string>('');

    const [users,setUsers]=useState<IUser[]>([]);
    useEffect(()=>{
        fetchUsers();
    },[])

    async function fetchUsers() {
        try{
            const response=await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data);
        }
        catch(e){
            alert(e);

        }
    }
    const out = () => {
        dispatch(logout())
    }

    return (
        <div>
            <div className="nav">
                <h1>Добро пожаловать, {sessionStorage.getItem('userLogin')}</h1>
                <input type="text" placeholder="Поиск"/>
                <button onClick={out}>Выйти</button>
            </div>

            <List items={users} renderItem={(user:IUser)=><UserItem user={user} key={user.id}/> }/>
        </div>
    );
};

export default UsersPage;