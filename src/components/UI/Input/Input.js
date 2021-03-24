import React from 'react';

const input = props => {
    let inputElement = null;
    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = <input
                className="form-input w-full"
                {...props.elementConfig}
                value={props.value || ""}
                onChange={props.changed} />;
            break;
        case ( 'textarea' ):
            inputElement = <textarea
                className="form-textarea w-full"
                {...props.elementConfig}
                value={props.value || ""}
                onChange={props.changed} />;
            break;
        case ( 'select' ):
            inputElement = (
                <select
                    className="form-select w-full"
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input
                className="form-input w-full"
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }

    return (
        <div className="w-9/12">
            <label className="block tracking-wide text-gray-700 text-base font-bold mb-2 ml-1">{props.label}</label>
            {inputElement}
        </div>
    );

}

export default input;