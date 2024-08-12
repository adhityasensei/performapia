<template>
  <div>
    <button @click="toggleSidebar" class="top-0 absolute h-10 w-10 left-64
    flex justify-center p-2 text-gray-500 transition duration-150 ease-in-out bg-gray-100 border border-transparent rounded-md lg:bg-white lg:dark:bg-gray-900 dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-700 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50
    ">
    <img :src="menuImage" alt="Menu" />
    </button>
    </div>
  <div>
    <Sidebar :showSidebar="showSidebar" />
    <Header :showSidebar="showSidebar"/>
    <main>
      <router-view></router-view>
    </main>
    <router-view />
    <Footer :showSidebar="showSidebar"/>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Header from '@/components/common/Header.vue';
import Footer from '@/components/common/Footer.vue';
import Sidebar from '@/components/common/Sidebar.vue';
import menuImage from '@/assets/menu.svg';
const showSidebar = ref(true);
const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value;
};
</script> 