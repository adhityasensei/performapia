<template>
  <div :class="{'ml-64': showSidebar}" class="fixed left-0 right-0 bottom-0">
    <footer class="bg-gray-800 dark:bg-black text-white p-4">
      <!-- Footer content goes here -->
      <p>Footer</p>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Footer',
  props: {
    showSidebar: Boolean, // Assuming showSidebar is a Boolean prop
  },
});
</script>
