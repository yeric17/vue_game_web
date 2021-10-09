<template lang="pug">
TextInput(label="Crear Contraseña" name="user_password" placeholder="Ingrese la contraseña..." required=true)
</template>

<script>
import TextInput from './TextInput.vue'
export default {
    name: "Password",
    components:{
        TextInput
    },
    props: {
        isConfirm: Boolean
    }
    
}
</script>