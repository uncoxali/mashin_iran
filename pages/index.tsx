import { login } from '@store/reducers/user';
import React from 'react';
import { useDispatch } from 'react-redux';

import Home from './home';
import Login from './login';

const Index = () => {
    const [login, setLogin] = React.useState<boolean>(true);

    return (
        <div className="w-full h-screen bg-red-100 flex justify-center items-center">
            <Home />
        </div>
    );
};

export default Index;
