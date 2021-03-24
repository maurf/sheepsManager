import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem'
import logoAdd from '../../../assets/add.svg'
import logoList from '../../../assets/list.svg'
import logoReports from '../../../assets/reports.svg'


const navigationItems = () => {
    return (
        <ul> 
            <NavigationItem link="/" logo={logoList} exact>All</NavigationItem>
            <NavigationItem link="/new" logo={logoAdd}>New</NavigationItem>
            <NavigationItem link="/report" logo={logoReports}>Reports</NavigationItem>
        </ul>
    );
}

export default navigationItems;