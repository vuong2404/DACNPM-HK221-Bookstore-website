import { SET_FIRST_PAGE, SET_LAST_PAGE, SET_NUM_DISPLAY, SET_PAGE } from '~/pages/AdminPages/Constants/Constants';

const reducer = (state, action) => {
    console.log(action);
    
    switch (action.type) {
        case SET_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            };
        case SET_FIRST_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            };
        case SET_LAST_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            };
        case SET_NUM_DISPLAY:
            return {
                ...state,
                currentPage: 1,
                numberLine: action.payload,
            };
        default:
            new Error(`Invalid action ${action.type}`);
    }
};

export default reducer;
