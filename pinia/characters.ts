// import { RootState } from '~/store'
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useContext } from '@nuxtjs/composition-api'

export const useCharactersStore = defineStore({
    id: 'characters',
    state: () => ({
      character: ref({})
    }),
    getters: {
      character: (state) => state.character,
    },
    actions: {
      async fetchCharacter(characterName: string) {
        const { $axios } = useContext()
        const response = await $axios.get(`/characters/${characterName}`)
        this.character = response.data
      }
    },
  })