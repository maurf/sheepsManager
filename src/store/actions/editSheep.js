import * as actionTypes from "./actionTypes";

export const startEditSheep = () => {
    return {
        type: actionTypes.START_EDIT_SHEEP
    }
}

export const fetchSheep = (sheep) => {
    return {
        type: actionTypes.FETCH_SHEEP,
        sheep: sheep
    }
}

export const initSheep = (id) => {
    return async (dispatch) => {
        dispatch(startEditSheep());
        const query = "https://sheepsmanagement.firebaseio.com/sheeps/" + id + ".json";
        const response = await fetch(query);
        if (response.ok) {
            const sheeps = await response.json();
            dispatch(fetchSheep(sheeps));
        }    
    }
}

export const editSheepSuccess = () => {
    return {
        type: actionTypes.EDIT_SHEEP_SUCCESS
    }
}

export const editSheep = (id, sheep) => {
    return async dispatch => {
        const query = "https://sheepsmanagement.firebaseio.com/sheeps/" + id + ".json";
        const response = await fetch(query, {
            method: 'put',
            body: JSON.stringify(sheep),
        });
        if(response.ok) {
            dispatch(editSheepSuccess());
        }
    }
}
