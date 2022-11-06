import AdminHomePage from '~/pages/AdminPages/pages/Home';
import ManageOrder from '~/pages/AdminPages/pages/ManageOrder';
import HomePage from '~/pages/CustomerPages/HomePage';

const routes = [
    { path: '/', component: HomePage },
    { path: '/admin', component: AdminHomePage },
    {
        path: '/manage-order',
        component: ManageOrder,
    },
];

export default routes;
