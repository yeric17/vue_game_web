import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import useLogin from './api/useLogin'

createApp(App)
    .use(router)
    .mount('#app')


let {isAuthenticated, Login} = useLogin()

if(localStorage.getItem('token')){
    let token = JSON.parse(localStorage.getItem('token'))
    Login(token.email,token.password)
}


router.beforeEach((to, from, next)=>{
    if((to.name !== 'login' && to.name !== 'register') && !isAuthenticated)
    {
        next({name:'login'})
    }
    else next()
})
