<template>
    <header>
        <h1>Ciao {{ title }}</h1>
        <!-- <h1>{{ name }}</h1> metodo 1 per usare i props in un component di vue -->
        <Button color="red" text="New"/>
        <Button  text="Update"/>

    </header>
</template>

<script>
import Button from "./Button.vue"

export default {
    name: 'Header',
    // props: ["name", "address"], metodo 1 per avere props in un component di vue 
    props: {
        title: {
            type: String,
            default: "Not defined",
            // valore default se non lo inseriamo, grazie al cazzo aggiungerei
        },
    },
    components: {
        Button
    }
    
}
</script>

<style scoped>
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
</style>