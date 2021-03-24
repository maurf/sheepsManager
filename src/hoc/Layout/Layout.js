import React from 'react';
import Aux from '../Aux/Aux'
import Sidebar from '../../components/Navigation/Sidebar/Sidebar'
import Header from '../../components/UI/Header/Header';

const layout = props => {
    return (
        <Aux>
            <div className="flex h-screen bg-gray-200">
                <Sidebar></Sidebar>
                <div className="flex-1 flex flex-col overflow-hidden">
                    <Header></Header>
                    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">{props.children}</main>
                </div>
            </div>
        </Aux>
    );
}

export default layout;