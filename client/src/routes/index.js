import AdminHomePage from '~/pages/AdminPages/pages/Home';
import ManageOrder from '~/pages/AdminPages/pages/ManageOrder';
import ManageBookView from '~/pages/AdminPages/pages/ManageBookView';
import ManageBookAdvancedSearch from '~/pages/AdminPages/CRUDBook/ManageBookAdvancedSearch';
import ManageBookAdd from '~/pages/AdminPages/CRUDBook/ManageBookAdd';
import ManageBookDetail from '~/pages/AdminPages/CRUDBook/ManageBookDetail';
import OrderDetail from '~/pages/AdminPages/pages/OrderDetails';
import HomePage from '~/pages/CustomerPages/pages/HomePage';
import Cart from '~/pages/CustomerPages/pages/CartPages/Cart';

import Payment from '~/pages/CustomerPages/pages/Paymentpage/Payment';

const routes = [
    //customer
    { path: '/', component: HomePage },
    { path: '/cart', component: Cart },
    { path: '/payment', component: Payment },

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
        path: '/manage-book/details',
        component: ManageBookDetail
    },
    {
        path: '/manage-order/details',
        component: OrderDetail,
    },
];

export default routes;
