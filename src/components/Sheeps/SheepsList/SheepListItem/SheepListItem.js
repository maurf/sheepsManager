import React from 'react';
import { Link } from 'react-router-dom';

/**
 * SheepListItem Component 
 * Display sheep item of the table 
 * 
 * TODO:
 */
const SheepListItem = props => {
    return (               
        <tr>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1588672204561-5638420df69c?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                            alt="" />
                    </div>

                    <div className="ml-4">
                        <div className="text-sm leading-5 font-medium text-gray-900">Arete #{props.earTag} {props.tagColor}</div>
                        <div className="text-sm leading-5 text-gray-500">{props.breed}</div>
                    </div>
                </div>
            </td>

            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="text-sm leading-5 text-gray-900">{props.sex}</div>
                <div className="text-sm leading-5 text-gray-500">{props.born}</div>
            </td>

            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">{props.status}</span>
            </td>

            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">{props.type}</td>

            <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                <Link to={"/sheep/" + props.id} className="text-indigo-600 hover:text-indigo-900">Edit</Link>
            </td>
        </tr>
    );
};

export default SheepListItem;