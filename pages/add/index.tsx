import React from 'react';
import Layout from '@components/ui/Layout';

export default function index() {
    return (
        <Layout>
            <div className="my-32 flex justify-center">
                <div className="w-1/2 h-96 border border-red-50  rounded-xl border-opacity-40"></div>
            </div>
        </Layout>
    );
}
