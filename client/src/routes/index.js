import AdminHomePage from '~/pages/AdminPages/pages/Home';
import ManageOrder from '~/pages/AdminPages/pages/ManageOrder';
import ManageBookView from '~/pages/AdminPages/pages/ManageBookView';
import ManageBookAdvancedSearch from '~/pages/AdminPages/CRUDBook/ManageBookAdvancedSearch';
import ManageBookAdd from '~/pages/AdminPages/CRUDBook/ManageBookAdd';
import ManageBookDetail from '~/pages/AdminPages/CRUDBook/ManageBookDetail';
import OrderDetail from '~/pages/AdminPages/pages/OrderDetails';
import HomePage from '~/pages/CustomerPages/pages/HomePage';
import ViewProfilePage from '~/pages/CustomerPages/pages/ManageProfile/ViewProfilePage';
import EditProfilePage from '~/pages/CustomerPages/pages/ManageProfile/EditProfilePage';
import ViewOrderHistoryPage from '~/pages/CustomerPages/pages/ManageProfile/ViewOrderHistoryPage';
import Cart from '~/pages/CustomerPages/pages/CartPages/Cart';

import Payment from '~/pages/CustomerPages/pages/Paymentpage/Payment';
import BookDetail from '~/pages/CustomerPages/pages/BookDetail/BookDetail';

const routes = [
    //customer
    { path: '/', component: HomePage },
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
        component: ManageBookView
    },    
    {
        path: '/manage-book/add',
        component: ManageBookAdd
    },   
    {
        path: '/manage-book/advanced-search',
        component: ManageBookAdvancedSearch
    },    
    {
        path: '/manage-book/details/:id',
        component: ManageBookDetail
    },
    {
        path: '/manage-order/details',
        component: OrderDetail,
    },
];

export default routes;
