// import { RootState } from '~/store'
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useContext } from '@nuxtjs/composition-api'

export const useUsersStore = defineStore({
    id: 'users',
    state: () => ({
      user: ref({})
    }),
    actions: {
      async joinUser(userData: any) {
        const { $axios } = useContext()
        await $axios.post('/users/join', userData)
        this.user = userData
      }
    }
  })