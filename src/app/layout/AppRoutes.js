import NotFoundPage from './404-page/NotFoundPageComponent';
import Homepage from '../components/home/HomeComponent';
import Login from '../components/auth/LoginComponent';

const APP_ROUTES = {
    notFound: {
        path: '/not-found',
        protected: false,
        icon: null,
        component: NotFoundPage,
    },
    default: {
        path: '/',
        icon: null,
        component: Login,
        default: true,
    },
    login: {
        path: '/login',
        name: 'Login',
        protected: false,
        icon: null,
        component: Login
    },
    homepage: {
        path: '/homepage',
        name: 'Homepage',
        protected: false,
        icon: null,
        component: Homepage
    },  
    
};
class AppRoutes {
    registeredRoutes() {
        return Object.keys(APP_ROUTES);
    }
    
    getRoute(name) {
        if (APP_ROUTES[name]) return APP_ROUTES[name];

        throw new Error(`Invalid route name [${name}]`);
    }
}
export default new AppRoutes;