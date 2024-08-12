<template>
    <div class="w-full h-[10%] flex justify-center items-center">
        <header>
            <div id="headerPerforma" class="py-4">
                <img :src="logoPerforma" alt="logoPerforma" class="w-[300px]" title="">
            </div>
        </header>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
// import { useRouter } from 'vue-router';
import { logoPerforma } from '../assets/components/image';

export default defineComponent({
    name: 'Header',
    setup(){
        return {
            logoPerforma
        }
    }
});

</script>