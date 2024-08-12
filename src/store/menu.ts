// import { defineStore } from 'pinia';
// import { MenuItem } from '@/model/user/menuModel'
// import { getUser } from '../api/endpoints/user';

// const useMenuStore = defineStore({
//   id: 'menu',
//   state: () => ({
//     menuItems: [] as MenuItem[],
//     isLoggedIn: false,
//   }),
//   getters: {
//     getMenuItems(): MenuItem[] {
//       return this.menuItems;
//     },
//     getIsLoggedIn(): boolean {
//       return this.isLoggedIn;
//     },
//   },
//   actions: {
//     async fetchMenuItems() {
//       try {
//         // Make an API call to get menu items
//         const response = await getUser(`${localStorage.getItem('username')}`);
//         const menuItems = response.data; // Adjust this based on your API response
//         console.log('menu', menuItems);
//         console.log(`${localStorage.getItem('username')}`);
//         this.setMenuItems(menuItems);
//       } catch (error) {
//         console.error('Error fetching menu items:', error);
//       }
//     },
//     setMenuItems(menuItems: MenuItem[]) {
//       this.menuItems = menuItems;
//     },
//     setLoggedIn(value: boolean) {
//       this.isLoggedIn = value;  
//     },
//   },
// });

// export { useMenuStore };


