import AdminHomePage from '~/pages/AdminPages/pages/Home';
import ManageOrder from '~/pages/AdminPages/pages/ManageOrder';
import ManageBook from '~/pages/AdminPages/pages/ManageBook';
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
        component: ManageBook
    },
    {
        path: '/manage-order/details',
        component: OrderDetail,
    },
];

export default routes;
