import React from 'react';
/**
 * SheepSelectorOption Component 
 * Display sheeps selector modal 
 * 
 * TODO:
 */
const SheepSelectorOption = props => {

    return (
        <div className="cursor-pointer w-full border-gray-100 border-b hover:bg-gray-200" onClick={props.onSelect}>
            <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
                <div className="w-full items-center flex">
                    <div className="mx-2 -mt-1 w-1/2 ">
                        <span className="text-xs text-center md:text-base text-gray-700">{props.title}</span>
                        <div className="text-xs truncate w-full normal-case font-normal -mt-1 text-gray-500">{props.description}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SheepSelectorOption;