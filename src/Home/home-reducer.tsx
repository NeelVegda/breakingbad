
import { ADD_TO_FAVOURITE, SAVE_TO_STORE } from './home-actions-types';

const initialState = {
    charecterList: [],
    favouriteList: []
}

const homeReducer = (state = initialState, action) => {
    switch(action.type){
        case SAVE_TO_STORE:
            return {...state, charectorList: state.charecterList};
        case ADD_TO_FAVOURITE:
            return {...state, favouriteList: state.favouriteList};;
        default:
            return state;
    }
}

export default homeReducer;