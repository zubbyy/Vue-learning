<template>
    <button @click="onClick()" :style="{ background: color }" class="btn">Add Task</button>
</template>

<script>
import { type } from 'os';

export default{
    name:"Button",
    props: {
        text: {
            type: String,
            default: "Next",
        },

        color: {
            type: String,
            default: "black",
        },
    },
    methods:{
        onClick(){
            alert("yo u clicked a button")
        }
    }
}
</script>