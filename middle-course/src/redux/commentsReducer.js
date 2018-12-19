import {COMMENTS} from '../shared/comments';

import * as ActionsType from "./ActionTypes";

export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
        case '@@INIT':
            console.log('comments reducer');
            return state;
        case ActionsType.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            debugger;
            return state.concat(comment);
        default:
            return state;
    }
}