import { SET_FIRST_PAGE, SET_LAST_PAGE, SET_NUM_DISPLAY, SET_PAGE } from '../Constants/Constants';

// Manage order actions
export const setPage = (payload) => ({ payload, type: SET_PAGE });

export const gotoFirstPage = () => ({
    payload: 1,
    type: SET_FIRST_PAGE,
});

export const gotoLastPage = (payload) => ({
    payload,
    type: SET_LAST_PAGE,
});

export const setNumberLine = (payload) => ({
    payload,
    type: SET_NUM_DISPLAY,
});
