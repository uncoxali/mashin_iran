import React from 'react';
import Layout from '@components/ui/Layout';
import { useRouter } from 'next/router';
import User from '@components/User';
import data from 'data.json';

export default function index() {
    const router = useRouter();

    return (
        <Layout>
            <User data={data} />
        </Layout>
    );
}
