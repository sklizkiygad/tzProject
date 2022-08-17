import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../../types/types";
import axios from "axios";
import UserItem from "../UserItem/UserItem";
import List from "../List/List";
import './UsersPage.css';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {logout} from "../../redux/auth/authActions";
import { getUsersContacts } from '../../redux/contactUser/contactActions';
import { userContactsSelector } from '../../redux/contactUser/contactSelectors';

const UsersPage:FC = () => {

    const dispatch = useAppDispatch();
    const users = useAppSelector(userContactsSelector)
   
    useEffect(()=>{
        dispatch(getUsersContacts())
    },[])

    
    const out = () => dispatch(logout())

    return (
        <div>
            <div className="nav">
                <h1>Добро пожаловать, {sessionStorage.getItem('userLogin')}</h1>
                <input type="text" placeholder="Поиск"/>
                <button onClick={out}>Выйти</button>
            </div>

            <List items={users} renderItem={(user:IUser)=><UserItem  user={user} key={user.userId}/> }/>
        </div>
    );
};

export default UsersPage;