<template>
  <div :class="{'ml-64': showSidebar}">
  <header class="bg-gray-800 dark:bg-black text-white p-4 mt-10">
    <!-- Header content goes here -->
    <h1>HEADER</h1>
  </header>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  props: {
    showSidebar: Boolean, // Assuming showSidebar is a Boolean prop
  },
});
</script>
