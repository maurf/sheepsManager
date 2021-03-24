import * as actionTypes from '../actions/actionTypes';


const initialState = {
    sheeps: [], 
    sheepSaved: false,
    loading: true,
}

const fetchSheepsStart = (state, action) => {
    return {
        ...state,
        sheeps: [],
        loading: true
    }
} 

const fetchSheepsSuccess = (state, action) => {
    return {
        ...state,
        sheeps: action.sheeps,
        loading: false
    }
} 

const reducer = ( state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_SHEEPS_SUCCESS: return fetchSheepsSuccess( state, action );
        case actionTypes.FETCH_SHEEPS_START: return fetchSheepsStart(state);
        default: return state;
    }
}

export default reducer;