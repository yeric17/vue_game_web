
<template lang="pug">
.form-wrapper
  form.form-container
    span.user-picture#user-picture
    h5.form-title Ingresar
    div.input-text.error(v-if="authFailed" data-error="El usuario o contraseña son incorrectos")
    label.input-text.input-email#user_email
      span.input-label Correo electrónico
      input(type="text", name="user_email" placeholder="Ingrese su correo..." required v-model="email")
    label.input-text.input-email#user_email
      span.input-label Contraseña
      input(type="password", name="user_password" placeholder="Registre la contraseña..." required v-model="password")
    button.input-submit(v-on:click.prevent="LoginAction") Ingresar
    BottomLogin
</template>


<script>


import useLogin from '../api/useLogin'
import Password from '../components/Password.vue'
import EmailInput from '../components/EmailInput.vue'
import BottomLogin from '../components/BottomLogin.vue'


export default {
 name:'Login',
 components:{
   EmailInput,
   BottomLogin,
   Password
 },
 methods:{
   LoginAction(){
        
        let {Login} = useLogin()

        Login(this.email,this.password).then(data=>{
          if(this.isAuthenticated){
            this.authFailed = false
            window.location.replace('/news')
          }
          else this.authFailed = true
        })
        .catch(err=>{
          this.authFailed = true  
        })

        
   }
 },
 data() {
   return {
     email: '',
     password: '',
     authFailed: false
   }
 },
 setup(){
   const {isAuthenticated} = useLogin()
   return {
     isAuthenticated
   }
 },
}

</script>

<style>

</style>