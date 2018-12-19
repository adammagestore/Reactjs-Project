import {LEADERS} from '../shared/leaders';

export const Leaders = (state = LEADERS, action) => {
    switch (action.type) {
        case '@@INIT':
            console.log('leaders reducer');
            return state;
        default:
            return state;
    }
}