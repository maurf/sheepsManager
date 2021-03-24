import React from 'react';
import logo from '../../../assets/farmer.svg';

import NavigationItems from '../NavigationItems/NavigationItems';
import Aux from '../../../hoc/Aux/Aux';

/**
 * sidebar Component 
 * Displays sidebar
 * 
 * TODO: Mobile functionality
 */
const sidebar = () => {

    return (
        <Aux>
            <div className="fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-secondary overflow-y-auto lg:translate-x-0 lg:static lg:inset-0 hidden md:block">
                <div className="flex items-center justify-center mt-8">
                    <div className="flex items-center">
                        <img className="h-10 w-10" src={logo}></img>

                        <span className="text-white text-lg mx-2 font-semibold">Sheep Management</span>
                    </div>
                </div>
                <nav className="mt-10">
                    <NavigationItems></NavigationItems>
                </nav>
            </div>
            <div className="fixed z-20 inset-0 bg-black opacity-50 transition-opacity hidden block"></div>
        </Aux>

    )
}

export default sidebar;