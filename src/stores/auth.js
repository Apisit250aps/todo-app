import { defineStore } from 'pinia';
import apiClient from './api';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null,
  }),
  actions: {
    async login(email, password) {
      try {
        const response = await apiClient.post('/login', { email, password });
        const { token } = response.data;
        this.token = token;
        return token;
      } catch (error) {
        console.error('Login failed:', error);
        throw error;
      }
    },
    logout() {
      this.token = null;
    },
  },
});
