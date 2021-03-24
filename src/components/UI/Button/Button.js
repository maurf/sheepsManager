import React from 'react';


const button = (props) => (
    <button
        disabled={props.disabled}
        className={`${props.btnType} text-white font-bold py-2 px-4 rounded w-32 mx-2`}
        onClick={props.clicked}>{props.children}</button>
);

export default button;