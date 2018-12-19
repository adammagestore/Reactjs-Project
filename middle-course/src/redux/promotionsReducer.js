import {PROMOTIONS} from '../shared/promotions';

export const Promotions = (state = PROMOTIONS, action) => {
    switch (action.type) {
        case '@@INIT':
            console.log('promotions reducer');
            return state;
        default:
            return state;
    }
}