<template>
  <CharacterPage />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useCharactersStore } from '~/pinia/characters'
import CharacterPage from '~/components/CharacterPage.vue';

export default defineComponent({
  name: 'Character',
  components: { CharacterPage },
  setup() {
    const charactersStore = useCharactersStore()

    const fetchCharacter = async (characterName: string) => {
      await charactersStore.fetchCharacter(characterName)
    }

    return {
      fetchCharacter,
    }
  },
})
</script>
