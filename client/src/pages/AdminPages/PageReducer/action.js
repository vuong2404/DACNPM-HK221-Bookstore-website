
// Order management pages : action
export const SET_PAGE = 'set_page';
export const SET_FIRST_PAGE = 'set_first_page';
export const SET_LAST_PAGE = 'set_last-page';
export const SET_NUM_DISPLAY = 'set_number_display';
export const SEARCH_ORDER = 'search_order';
//.....

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
