import * as actionTypes from "./actionTypes";

export const startNewSheep = () => {
    return {
        type: actionTypes.START_NEW_SHEEP
    }
}

export const saveNewSheep = newSheep => {
    return async dispatch => {
        const query = "https://sheepsmanagement.firebaseio.com/sheeps.json";
        const response = await fetch(query, {
            method: 'POST',
            body: JSON.stringify(newSheep),
          });
        if(response.ok) {
            dispatch(saveNewSheepSuccess());
        }
    }
}

export const saveNewSheepSuccess = () => {
    return {
        type: actionTypes.SAVE_NEW_SHEEP_SUCCESS
    }
}

