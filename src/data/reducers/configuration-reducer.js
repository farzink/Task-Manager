import * as actionTypes from '../actions/configuration-action';


const configurationReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.ADD:
            return Object.assign({}, state, action.payload)      
        default:
            return state;
    }
}


export default configurationReducer
