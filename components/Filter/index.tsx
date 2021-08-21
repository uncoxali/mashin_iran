import React from 'react';
import Filter from './filter';

export default function index() {
    return (
        <div className="h-auto w-52 bg-white row-span-1 rounded-lg p-3">
            {Filter.map((filter, index) => (
                <div className="text-xs" key={index}>
                    <div className="flex mt-1">
                        <div className="mt-1">{filter.icon}</div>
                        <p className="mr-1 mt-2">{filter.title}</p>
                    </div>
                    <div className={`${filter.line ? `h-11 bg-red-50 w-full` : ''}   mt-2`}></div>
                    <div className="flex justify-between">
                        <p className="mr-8">{filter.name}</p>
                        {filter.arrow}
                    </div>
                    <div className={` bg-watusi-250 w-full`} style={{ height: '1px' }} />
                </div>
            ))}
        </div>
    );
}
