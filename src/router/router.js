
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
            component: Register
        },
        {
            path: '/news',
            name: 'news',
            component: News,
        },
        {
            path: '/profile',
            name: 'profile',
            component: Profile
        },
        {
            path: '/scores',
            name: 'scores',
            component: Scores
        },
        {
            path: '/updates',
            name: 'updates',
            component: Updates
        }
];

const router = createRouter(
    {
        history: createWebHistory(),
        routes,
    }
);

export default router;