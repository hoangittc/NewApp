
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import * as ActionTypes from '../actions/type'
import AsyncStorage from '@react-native-community/async-storage';
import {
    setColor,
} from './setData';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: [
        'color',
    ],
};
const rootReducer = combineReducers({
    color: setColor,
});
const AppReducer = (state, action) => {
    if (action.type === ActionTypes.RESET_STORE) {
        state = undefined;
    }
    return rootReducer(state, action)
}
const RootReducer = persistReducer(persistConfig, AppReducer);
export default RootReducer;


