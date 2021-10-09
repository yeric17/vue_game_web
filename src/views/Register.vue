
<template lang="pug">
.form-wrapper
	form.form-container
		span#user-picture.user-picture
		h5.form-title Crear cuenta
		label#user_email.input-text.input-email
			span.input-label Nombre
			input(
				type="text",
				placeholder="Nombre del nuevo usuario..",
				required,
				v-model="newUser.name"
			)
		label#user_email.input-text.input-email
			span.input-label Correo electrónico
			input(
				type="text",
				placeholder="Ingrese una cuenta de correo...",
				required,
				v-model="newUser.email"
			)
		label#user_email.input-text.input-email
			span.input-label Contraseña
			input(type="password", placeholder="Registre la contraseña...", required, v-model="newUser.password")
			span.error(v-if="!PasswordSecurity" :data-error="errorMessage2")
	  
		label.input-text
			span.input-label Confirmación de Contraseña
			input(
				type="password",
				placeholder="Registre nuevamente la contraseña...",
				required,
				v-model="confirmPassword"
			)
			span.error(v-if="!PasswordCheck" :data-error="errorMessage")
		button.input-submit(v-on:click.prevent="CreateUserAction") Crear
		router-link.link-text(to="/login") Ingresar
</template>


<script>
import useLogin from "../api/useLogin";
import TextInput from "../components/TextInput.vue";
import Password from "../components/Password.vue";
import EmailInput from "../components/EmailInput.vue";
import BottomLogin from "../components/BottomLogin.vue";

export default {
  name: "Register",
  components: {
    TextInput,
    EmailInput,
    BottomLogin,
    Password,
  },
  data() {
    return {
		newUser: {
			name: "",
			email: "",
			password: ""
		},
		confirmPassword: "",
		errorMessage: "",
		errorMessage2: ""
    };
  },
  computed: {
    PasswordCheck() {
      let flag = this.newUser.password === this.confirmPassword || this.confirmPassword == "";
	  this.errorMessage = flag?'':'Confirmación de contraseña no coinciden'
	  return flag
    },
	PasswordSecurity(){
		let regSecPassword = /^(?=(?:.*\d))(?=.*[A-Z])(?=.*[a-z])(?=.*[.,*!?¿¡/#$%&])\S{8,64}$/

		let flag = regSecPassword.test(this.newUser.password) || this.newUser.password == ""

		this.errorMessage2 = flag?'':'La contraseña no es segura'

		return flag
	}
  },
  methods: {
    async CreateUserAction() {
      if (!this.PasswordCheck) {
        console.log("contraseñas no coinciden");
        return;
      }

      let { CreateUser } = useLogin();

      let response = await CreateUser(this.newUser);

      console.log(response);

      (this.userName = ""),
        (this.email = ""),
        (this.password = ""),
        (this.confirmPassword = "");
    },
  },
};
</script>

<style>
</style>