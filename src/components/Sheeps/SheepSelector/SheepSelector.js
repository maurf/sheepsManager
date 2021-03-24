import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SheepSelectorOption from './SheepSelectorOption/SheepSelectorOption';
/**
 * SheepSelector Component 
 * Display sheeps selector modal 
 * 
 * TODO:
 */
const SheepSelector = props => {

    const fetchedSheeps = useSelector( state => state.sheepManager.sheeps ); // Fecth all sheeps from the state
    const [filteredSuggestions, setfilteredSuggestions] = useState([]); // Auto complete sheeps suggestions 

    /**
     * onChangedHandler  
     * Updates the autocomplete sheep list  
     */
    const onChangedHandler = (event) => {
        const value = event.target.value;
        let suggestions = [];
        suggestions = fetchedSheeps.filter(sheep => 
            sheep.earTag.indexOf(value) > -1
        )
        setfilteredSuggestions(suggestions);
    }

    // Render the sheep list items
    const suggestions = filteredSuggestions.map( suggestion => 
        <SheepSelectorOption 
            key={suggestion.id}
            id={suggestion.id} 
            title={`Arete #${suggestion.earTag} ${suggestion.tagColor}`} 
            description={suggestion.breed}
            onSelect={() => { 
                props.onSelect(props.cycleId, suggestion.id);
                props.onClose();
            }}/>
    )

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto -right-14">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

                <div className="fixed inset-0 transition-opacity" onClick={props.onClose}>
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
                <div className="inline-block align-bottom rounded-lg text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                    <div className="w-full flex flex-col items-cener">
                        <div className="w-full px-4">
                            <div className="flex flex-col items-center relative">
                                <div className="w-full">
                                    <div className="my-2 p-1 bg-white flex border border-gray-200 rounded">
                                        <div className="flex flex-auto flex-wrap"></div>
                                        <input placeholder="Buscar oveja por arete" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" onChange={onChangedHandler}/>
                                        <div className="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200">
                                            <button className="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"
                                                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                                                    strokeLinecap="round" strokeLinejoin="round"
                                                    className="feather feather-chevron-up w-4 h-4">
                                                    <polyline points="18 15 12 9 6 15"></polyline>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* Autocomplete sheeps options */}
                                <div className="shadow bg-white  z-40 w-full lef-0 rounded max-h-select overflow-y-auto svelte-5uyqqj">
                                    <div className="flex flex-col w-full">
                                        {suggestions}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto" onClick={props.onClose}>
                            <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5">Cancel</button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SheepSelector;