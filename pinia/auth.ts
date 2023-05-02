import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authenticated: false,
  }),
  getters: {
    isAuthenticated: (state) => state.authenticated,
  },
  actions: {
    setAuthenticated(authenticated: boolean) {
      this.authenticated = authenticated
    },
    // 필요한 인증 관련 액션을 여기에 추가하십시오.
  },
})
