// import {DISHES} from "../shared/dishes";
import * as ActionTypes from './ActionTypes';

export const Dishes = (state = {
    isLoading: true,
    errMess: null,
    dishes: []
}, action) => {
    switch (action.type) {
        case '@@INIT':  // day la action ma reducer nao cung phat ra
            console.log('dishes reducer');
            return state;
        case ActionTypes.ADD_DISHES:
            return {
                ...state,
                isLoading: false,
                errMess: null,
                dishes: action.payload
            }
        case ActionTypes.DISHES_LOADING:
            return {
                ...state,
                isLoading: true,
                errMess: null,
                dishes: []
            }
        case ActionTypes.DISHES_FAILED:
            return {
                ...state,
                isLoading: false,
                errMess: action.payload
            }
        default:
            return state
    }
}