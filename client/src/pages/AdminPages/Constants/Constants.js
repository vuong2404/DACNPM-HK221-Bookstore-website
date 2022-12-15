// Admin homepage constants
export const adminOption = [
    {
        name: 'Tài khoản của tôi',
        to: '/myaccout',
    },
    {
        name: 'Đăng xuất',
        to: '/login',
    },
];

export const menu = [
    {
        name: 'Trang chủ',
        path: '/admin',
    },
    {
        name: 'Quản lý sách',
        path: '/manage-book',
    },
    {
        name: 'Thành viên',
        path: '/member',
    },
    {
        name: 'Đơn hàng',
        path: '/manage-order',
    },
    {
        name: 'Thông báo',
        path: '/notify',
    },
];


// Order management pages : action
export const SET_PAGE = 'set_page';
export const SET_FIRST_PAGE = 'set_first_page';
export const SET_LAST_PAGE = 'set_last-page';
export const SET_NUM_DISPLAY = 'set_number_display';
export const SEARCH_ORDER = 'search_order';
//.....