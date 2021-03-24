import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../store/actions/index'
import SheepsList from '../../../components/Sheeps/SheepsList/SheepsList';

/**
 * AllSheeps Container
 * Disyplay all sheeps dashboard 
 *
 * TODO: Pagination 
 */
const AllSheeps = props => {
    const dispatch = useDispatch();
    const sheeps = useSelector( state =>  state.sheepManager.sheeps ); // Gets all sheeps from the API
    const loading = useSelector(state => state.sheepManager.loading);  // Handles the loading spinner  

    /**
     * Gets called to fetch all Sheeps from the API
     */
    const onInitSheeps = useCallback(
        () => dispatch(actions.fetchSheeps()),
        [dispatch]
    );

    useEffect(() => {
        onInitSheeps();
    }, [onInitSheeps])

    /**
     * Shows loading spinner if sheeps are not loaded, otherwise show the sheeps list
     * TODO: Create the loading spinner component, for now shows an empty div 
     */
    let sheepList = <div>loading</div>;
    if (!loading) {
        sheepList = <SheepsList list={sheeps} />
    }

    return (
        <div className="container mx-auto px-6 py-8">
            {sheepList}
        </div>
    )
};

export default AllSheeps;