import React from 'react';
import { NavLink } from 'react-router-dom'

const navigationItem = (props) => (
    <li>
        <NavLink className="flex items-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
            to={props.link}
            exact={props.exact}>
            <img src={props.logo} className="h-6 w-6" alt="MyBurger" />
            <span className="mx-3">{props.children}</span>
        </NavLink>
    </li>
);

export default navigationItem;



