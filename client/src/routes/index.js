import AdminHomePage from '~/pages/AdminPages/pages/Home';
import ManageOrder from '~/pages/AdminPages/pages/ManageOrder';
import OrderDetail from '~/pages/AdminPages/pages/OrderDetails';
import HomePage from '~/pages/CustomerPages/pages/HomePage';
import Cart from '~/pages/CustomerPages/pages/CartPages/Cart';

const routes = [
    //customer
    { path: '/', component: HomePage },
    { path: '/cart', component: Cart },

    // admin
    { path: '/admin', component: AdminHomePage },
    {
        path: '/manage-order',
        component: ManageOrder,
    },
    {
        path: '/manage-order/details',
        component: OrderDetail,
    },
];

export default routes;
