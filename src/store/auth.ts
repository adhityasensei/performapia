// Import necessary dependencies and types
import { defineStore } from 'pinia';
import { checkToken, getPosts } from '../api/endpoints/login';
// Define your authentication store
export const useAuthStore = defineStore('auth', {
  state: () => ({
    username: '',
    password: '',
    authToken: '',
    isAuthenticated: false, // Whether the user is authenticated
  }),

  getters: {
    // Define getters here
    isLoggedIn: (state) => state.isAuthenticated,
    currentUser: (state) => state.username,
    currentPassword: (state) => state.password,
  },

  actions: {
    // Define actions here
    async login(username: string, password: string) {
      try {
        // Make a POST request to your authentication endpoint
        const response: any = await getPosts(username, password);
        // Check if the authentication was successful (adjust as needed)
        if (response.data) {
          this.username = username;
          // this.password = password;

          // Store the authentication token in local storage
          this.authToken = response.data.access_token;
          localStorage.setItem('authToken', response.data.access_token);
          localStorage.setItem('username', atob(atob(this.username)));

          // check token
         if (this.authToken) {
          const res: any = await checkToken(this.authToken);
          if(res) return this.checkAuthenticationStatus();
         }
 
        } else {
          // Handle authentication failure, e.g., show an error message
          alert(response)
        }
      } catch (error) {
        // Handle the error, e.g., show an error message or log it
        alert('An error occurred during authentication');
        localStorage.removeItem('authToken');
        localStorage.removeItem('username');
        this.isAuthenticated = false;
      }
    },

    checkAuthenticationStatus() {
      // You may want to retrieve the authentication status from the server,
      // or check the local storage or any other method you're using to
      // determine if the user is authenticated.
      // For this example, we'll check if the authToken exists in local storage.
      const authToken = localStorage.getItem('authToken');

      if (authToken) {
        // If the authToken exists, consider the user as authenticated
        this.isAuthenticated = true;
      } else {
        // If the authToken doesn't exist, consider the user as not authenticated
        this.isAuthenticated = false;
      }
    },

    async logout() {
      // Implement your logout logic here
      // For example, set user data to empty strings and isAuthenticated to false
      localStorage.removeItem('authToken');
      localStorage.removeItem('username');
      this.isAuthenticated = false;
    },
  },
});
