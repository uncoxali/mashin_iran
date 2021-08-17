import { login } from '@store/reducers/user';
import router from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Layout from '@components/Layout';

import Home from './home';
import Login from './login';

const Index = () => {
    useEffect(() => {
        if (sessionStorage.length === 0) {
            router.push('/login');
        }
    });

    return (
        <Layout>
            <div className=" w-full h-auto bg-red-100">
                <div className="flex justify-center ">
                    <Home />
                </div>
            </div>
            <div className="w-full h-52 bg-red-100"></div>
        </Layout>
    );
};

export default Index;
