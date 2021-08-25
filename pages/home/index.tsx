import React from 'react';
import Car from '@components/Car';
import Card from '@components/Card';

import { useRouter } from 'next/router';

export default function index() {
    const router = useRouter();

    return (
        <div>
            <div className="py-28 lg:mt-0 md:mt-0 mt-14">
                <Card data={Car} />
            </div>
        </div>
    );
}
