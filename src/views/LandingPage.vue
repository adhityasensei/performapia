<template>
    <Header />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '../layouts/Header.vue'
export default defineComponent({
    components: {
        Header
    },
    setup(){
        return{
            Header
        }
    }

});
</script>