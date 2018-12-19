import {applyMiddleware, createStore, combineReducers} from 'redux';
import { Dishes } from './dishesReducer';
import { Comments } from './commentsReducer';
import { Leaders } from './leadersReducer';
import { Promotions } from './promotionsReducer';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes, // co the de value luon: Dishes, ko can key: dishes dang truoc cung duoc
            leaders: Leaders,
            comments: Comments,
            promotions: Promotions
        }),
        // Neu dung redux-logger thi ko can dung dong nay nua
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose;
        applyMiddleware(thunk, logger)
        // Neu muon dung ca 2 thi se dung nhu sau:
        // enhhance = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

    );
    return store;
}