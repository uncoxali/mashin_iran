import React from 'react';
import Cards from '@components/Car';
import Card from '@components/Card';

import { useRouter } from 'next/router';

export default function index() {
    const router = useRouter();

    return (
        <div>
            <div className="py-28 lg:mt-0 md:mt-0">
                <Card data={Cards} />
            </div>
        </div>
    );
}
