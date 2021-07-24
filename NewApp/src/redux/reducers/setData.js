
import {
    SETCOLOR,
} from '../actions/type';
const initialState = {};

function setColor(state = initialState, action) {
    switch (action.type) {
        case SETCOLOR:
            return action.data;
        default:
            return state;
    }
}

export {
    setColor,
};
