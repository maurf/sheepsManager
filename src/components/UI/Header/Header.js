import React from 'react';

const Header = () => {

    return (
        <header className="flex justify-between items-center py-4 px-6 bg-white border-b-4 border-indigo-600">
            <div className="flex items-center">
                <button className="text-gray-500 focus:outline-none lg:hidden">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </button>

                <div className="relative mx-4 lg:mx-0">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                        <svg className="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            </path>
                        </svg>
                    </span>

                    <input className="form-input w-32 sm:w-64 rounded-md pl-10 pr-4 focus:border-indigo-600" type="text" placeholder="Search"/>
                </div>
            </div>    
        </header>
    )
}

export default Header;