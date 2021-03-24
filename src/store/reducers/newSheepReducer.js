import * as actionTypes from '../actions/actionTypes';


const initialState = {
    sheepSavedSuccess: false,
    loading: true,
}

const saveNewSheepSuccess = state => {
    return {
        ...state,
        sheepSavedSuccess: true
    }
}

const startNewSheep = state => {
    return {
        ...state, 
        sheepSavedSuccess: false
    }
}


const reducer = ( state = initialState, action) => {
    switch (action.type) {
        case actionTypes.START_NEW_SHEEP: return startNewSheep(state);
        case actionTypes.SAVE_NEW_SHEEP_SUCCESS: return saveNewSheepSuccess(state);
        default: return state;
    }
}

export default reducer;