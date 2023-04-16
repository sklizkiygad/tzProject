import React from 'react';

import {HashRouter,Route,Routes} from 'react-router-dom';
import UsersPage from "./components/UsersPage/UsersPage";
import AuthPage from "./components/AuthPage/AuthPage";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import {useAppSelector} from "./redux/store";
import {isAuthSelector} from "./redux/auth/authSelectors";

const App = () => {
    const isAuth= useAppSelector(isAuthSelector)
   console.log(isAuth);

    return (
        <HashRouter>
        <div>
            <Routes>
                <Route path='/' element={<UsersPage/>}/>
            {/*{isAuth ?*/}
            {/*    ( <Route path='/' element={<UsersPage/>}/>):*/}
            {/*    ( <Route path='/' element={<AuthPage/>}/>)*/}
            {/*}*/}
            {/*    <Route element={<ErrorPage/>} path='*' />*/}
            </Routes>

        </div>
        </HashRouter>

    );
};

export default App;