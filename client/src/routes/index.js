import AdminHomePage from '~/pages/AdminPages/pages/Home';
import ManageOrder from '~/pages/AdminPages/pages/ManageOrder';
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
        path: '/manage-order/details',
        component: OrderDetail,
    },
];

export default routes;
