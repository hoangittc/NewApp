
import {
    SETLANGUAGE,
} from '../actions/type';
const initialState = {};

function setLanguage(state = initialState, action) {
    switch (action.type) {
        case SETLANGUAGE:
            return action.data;
        default:
            return state;
    }
}

export {
    setLanguage,
};
