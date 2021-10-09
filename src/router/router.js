
import {createWebHistory, createRouter} from 'vue-router'

import News from '../views/News.vue'
import LoginPage from '../views/LoginPage.vue'
import Register from '../views/Register.vue'
import Profile from '../views/Profile.vue'
import Scores from '../views/Scores.vue'
import Updates from '../views/Updates.vue'



const routes = [
        {
            path: '/',
            name: 'login',
            component: LoginPage,
            alias: '/login'
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
            alias: '/register'
        },
        {
            path: '/news',
            name: 'news',
            component: News,
            alias: '/news'
        },
        {
            path: '/profile',
            name: 'profile',
            component: Profile,
            alias: '/profile'
        },
        {
            path: '/scores',
            name: 'scores',
            component: Scores,
            alias: '/scores'
        },
        {
            path: '/updates',
            name: 'updates',
            component: Updates,
            alias: '/updates'
        }
];

const router = createRouter(
    {
        history: createWebHistory(),
        routes,
    }
);

export default router;