import AdminHomePage from '~/pages/AdminPages/pages/Home';
import ManageOrder from '~/pages/AdminPages/pages/ManageOrder';
import ManageBookView from '~/pages/AdminPages/pages/ManageBookView';
import ManageBookAdvancedSearch from '~/pages/AdminPages/CRUDBook/ManageBookAdvancedSearch';
import ManageBookAdd from '~/pages/AdminPages/CRUDBook/ManageBookAdd';
import ManageBookDetail from '~/pages/AdminPages/CRUDBook/ManageBookDetail';
import OrderDetail from '~/pages/AdminPages/pages/OrderDetails';
import HomePage from '~/pages/CustomerPages/pages/HomePage';
import SearchPage from '~/pages/CustomerPages/searchBook/Search';
import ViewProfilePage from '~/pages/CustomerPages/pages/ManageProfile/ViewProfilePage';
import EditProfilePage from '~/pages/CustomerPages/pages/ManageProfile/EditProfilePage';
import ViewOrderHistoryPage from '~/pages/CustomerPages/pages/ManageProfile/ViewOrderHistoryPage';
import Cart from '~/pages/CustomerPages/pages/CartPages/Cart';

import Payment from '~/pages/CustomerPages/pages/Paymentpage/Payment';
import BookDetail from '~/pages/CustomerPages/pages/BookDetail/BookDetail';

import LogIn from '~/pages/Authorization/LogIn';
import LogInAdmin from '~/pages/Authorization/LogInAdmin';
import Register1 from '~/pages/Authorization/Register-1';
import Register2 from '~/pages/Authorization/Register-2';
import Forgot from '~/pages/Authorization/Forgot';

import ManageCustomerView from '~/pages/AdminPages/pages/ManageCustomerView';
import ManageCustomerAdd from '~/pages/AdminPages/CRUDCustomer/ManageCustomerAdd';
import ManageCustomerFilter from '~/pages/AdminPages/CRUDCustomer/ManageCustomerFilter';

import Page1 from '~/pages/CustomerPages/pages/Support/Page1';
import Page2 from '~/pages/CustomerPages/pages/Support/Page2';
import Page3 from '~/pages/CustomerPages/pages/Support/Page3';

const routes = [
    //Authorization
    { path: '/LogIn', component: LogIn },
    { path: '/LogInAdmin', component: LogInAdmin },
    { path: '/Register-1', component: Register1 },
    { path: '/Register-2', component: Register2 },
    { path: '/Forgot', component: Forgot },

    //support Customer
    { path: '/cau-hoi-thuong-gap', component: Page1 },
    { path: '/chinh-sach-doi-tra-hang', component: Page2 },
    { path: '/tieu-chuan-binh-luan', component: Page3 },

    //customer
    { path: '/', component: HomePage },
    { path: '/search', component: SearchPage },
    { path: '/cart', component: Cart },
    { path: '/payment', component: Payment },
    { path: '/bookDetail', component: BookDetail },
    { path: '/viewProfile', component: ViewProfilePage },
    { path: '/editProfile', component: EditProfilePage },
    { path: '/viewOrderHistory', component: ViewOrderHistoryPage },

    // admin
    { path: '/admin', component: AdminHomePage },
    {
        path: '/manage-order',
        component: ManageOrder,
    },
    {
        path: '/manage-book',
        component: ManageBookView,
    },
    {
        path: '/manage-book/add',
        component: ManageBookAdd,
    },
    {
        path: '/manage-book/advanced-search',
        component: ManageBookAdvancedSearch,
    },
    {
        path: '/manage-book/details/:id',
        component: ManageBookDetail,
    },
    {
        path: '/manage-order/details',
        component: OrderDetail,
    },
    {
        path: '/member',
        component: ManageCustomerView,
    },
    {
        path: '/member/add',
        component: ManageCustomerAdd,
    },
    {
        path: '/member/filter',
        component: ManageCustomerFilter,
    },
];

export default routes;
