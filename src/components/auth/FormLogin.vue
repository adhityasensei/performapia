<script lang="ts" setup>
import { useVuelidate } from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
import { reactive, computed, ref } from "vue";
import { useAuthStore } from '@/store/auth';
import { useRouter } from 'vue-router';
const state = reactive({
  username: '',
  password: ''
});

const rules = computed(() => {
  return {
    username: { required },
    password: { required, minLength: minLength(4) }
  };
});

const $router = useRouter();
const authStore = useAuthStore();
const loading = ref(false);

const v$ = useVuelidate(rules, state);

const submitForm = async () => {
  // vuelidate validation
  v$.value.$validate();

  // if success
  if (!v$.value.$error) {
    loading.value = true;
    // alert("Form Successfully Submitted!");
    try {
    await authStore.login(btoa(btoa(state.username)), btoa(btoa(state.password)));

      if (authStore.isAuthenticated === true) {
        // Redirect to the dashboard page upon successful login
        $router.push('/');
      } else {
        // Handle login failure, show an error message, etc.
        $router.push('/login');
      }
    } catch (error) {
      // Handle any errors that may occur during login
      alert(error);
    } finally {
      loading.value = false; // Set loading back to false when the request is complete
    }

  }
};
</script>

<template>
  <div class="root flex items-center dark:bg-black min-h-screen p-4 bg-gray-100 lg:justify-center">
    <div
      class="flex flex-col overflow-hidden dark:bg-black dark:shadow-green-500/100 bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
    >
      <div
        class="p-4 py-6 text-white dark:bg-gray-900 bg-blue-600 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
      >
        <div class="my-3 text-4xl font-bold tracking-wider text-center dark:grayscale-0">
          <a href="#"><img src="../../assets/logo.png" alt="Promise" class="w-60 mb-2"/></a>
        </div>
        <p class="mt-6 font-normal text-center text-gray-300 md:mt-0">
          With the power of K-WD, you can now focus only on functionaries for your digital products, while leaving the
          UI design on us!
        </p>
        <p class="flex flex-col items-center justify-center mt-10 text-center">
          <span>Don't have an account?</span>
          <a href="#" class="underline">Get Started!</a>
        </p>
        <p class="mt-6 text-sm text-center text-gray-300">
          Read our <a href="#" class="underline">terms</a> and <a href="#" class="underline">conditions</a>
        </p>
      </div>
      <div class="p-5 dark:bg-black bg-white md:flex-1">
        <h3 class="my-4 text-2xl font-semibold text-gray-700 dark:text-white">Account Login</h3>
        <div class="flex flex-col space-y-5">
          <div class="flex flex-col space-y-1">
            <label for="email" class="text-sm font-semibold text-gray-500 dark:text-white">User Name</label>
            <input
              type="text"
              id="userName"
              v-model="state.username"
              class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
            />
              <span v-if="v$.username.$error" class="text-red-500 text-sm " :class="['error-animation']">
                <!-- {{ v$.username.$errors[0].$message }} -->
                <p>aduh.....</p>
              </span>
          </div>
          <div class="flex flex-col space-y-1">
            <div class="flex items-center justify-between">
              <label for="password" class="text-sm font-semibold text-gray-500 dark:text-white">Password</label>
              <a href="#" class="text-sm text-blue-600 hover:underline focus:text-blue-800">Forgot Password?</a>
            </div>
            <input
              type="password"
              id="password"
              v-model="state.password"  
              class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
            />
            <span v-if="v$.password.$error" class="text-red-500 animate__shakeX text-sm" style="animation: shakeX 0.5s;">
              {{ v$.password.$errors[0].$message }}
            </span>
          </div>
          <div class="flex items-center space-x-2">
            <input
              type="checkbox"
              id="remember"
              class="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
            />
            <label for="remember" class="text-sm font-semibold dark:text-white text-gray-500">Remember me</label>
          </div>
          <div>
            <button
              class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-green-500 rounded-md shadow hover:bg-green-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
              @click="submitForm"
              :disabled="loading"
            >
            <span v-if="!loading">Log in</span>
            <span v-else>
                <img src="../../assets/loading.svg" alt="Loading..." class="w-7 fixed"/> Loading...
            </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
