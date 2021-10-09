<template lang="pug">
TextInput(label="Correo electrónico" name="user_email" placeholder="Ingrese su correo electrónico..." required=true :v-model="model")
</template>

<script>
import TextInput from './TextInput.vue'
export default {
    name: "EmailInput",
    components:{
        TextInput
    },
    props:{
        model: Object
    }
}
</script>