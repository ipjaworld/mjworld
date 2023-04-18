<template>
  <MainLayout>
    <CharacterPage />
  </MainLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useCharactersStore } from '~/store/characters'
import MainLayout from '~/components/MainLayout.vue';
import CharacterPage from '~/components/CharacterPage.vue';

export default defineComponent({
  name: 'Character',
  components: { MainLayout, CharacterPage },
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
