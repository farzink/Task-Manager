import * as actionTypes from '../actions/profile-action';


const profileReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.ADD:
            return Object.assign({}, state, action.payload)      
        default:
            return state;
    }
}


export default profileReducer
