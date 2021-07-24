import * as Types from './type';

// export const setDataTest = val => ({
//     type: Types.TEST, data: val
// });

export const resetStore = () => {
    return {
        type: Types.RESET_STORE
    }
}

export const setColor = val => ({
    type: Types.SETCOLOR, data: val
});


