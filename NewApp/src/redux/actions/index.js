import * as Types from './type';

export const setDataTest = val => ({
    type: Types.TEST, data: val
});

export const resetStore = () => {
    return {
        type: Types.RESET_STORE
    }
}

export const setLanguage = val => ({
    type: Types.SETLANGUAGE, data: val
});


