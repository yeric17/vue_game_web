<template lang="pug">
label.input-text.input-email#user_email
    span.input-label {{label}}
    input(type="text", :name="name" :placeholder="placeholder" :required="required" :v-model="model")
</template>

<script>
export default {
    name: 'TextInput',
    props: {
        name: String,
        placeholder: String,
        label: String,
        required: Boolean,
        model: Object
    }
}
</script>

<style>

</style>