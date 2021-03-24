import * as actionTypes from "./actionTypes";

export const fetchSheepsSuccess = (sheeps) => {
    return {
        type: actionTypes.FETCH_SHEEPS_SUCCESS,
        sheeps: sheeps
    }
}

export const fetchSheepsStart = () => {
    return {
        type: actionTypes.FETCH_SHEEPS_START
    }
}

export const fetchSheeps = () => {
    return async (dispatch) => {
        dispatch(fetchSheepsStart());
        const query = "https://sheepsmanagement.firebaseio.com/sheeps.json";
        const response = await fetch(query);
        if (response.ok) {
            const sheeps = await response.json();
            const fetchedSheeps = [];
            for ( let key in sheeps ) {
                fetchedSheeps.push( {
                    ...sheeps[key],
                    id: key
                } );
            }
            dispatch(fetchSheepsSuccess(fetchedSheeps));
        }
    }
}

