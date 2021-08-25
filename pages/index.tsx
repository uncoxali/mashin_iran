import router from 'next/router';
import React, { useEffect } from 'react';
import Layout from '@components/ui/Layout';
import Exhibition from './exhibition';
import Home from './home';

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
        </Layout>
    );
};

export default Index;
