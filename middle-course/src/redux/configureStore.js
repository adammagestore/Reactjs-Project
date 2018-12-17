import {createStore, combineReducers} from 'redux';
import { Dishes } from './dishesReducer';
import { Comments } from './commentsReducer';
import { Leaders } from './leadersReducer';
import { Promotions } from './promotionsReducer';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes, // co the de value luon: Dishes, ko can key: dishes dang truoc cung duoc
            leaders: Leaders,
            comments: Comments,
            promotions: Promotions
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}