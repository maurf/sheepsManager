import React from 'react';

import SheepsListItem from './SheepListItem/SheepListItem';

/**
 * NewSheep Component 
 * Display sheep list table
 * 
 * TODO:
 */
const SheepsList = props => {

    let list = "";

    list = props.list.map(item => (
        <SheepsListItem
            key={item.id}
            {...item}
        />
    ));
    
    return (
    <div className="flex flex-col mt-8">
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                <table className="min-w-full">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                Identificacion
                            </th>
                            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                Sexo
                            </th>
                            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                Estado
                            </th>
                            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                Role
                            </th>
                            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {list}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    );
};

export default SheepsList;