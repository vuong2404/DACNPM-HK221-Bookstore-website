import AdminPage from '~/pages/AdminPages/AdminPage';
import HomePage from '~/pages/CustomerPages/HomePage';

const routes = [
    { path: '/', component: HomePage },
    { path: '/admin', component: AdminPage },
];

export default routes;
