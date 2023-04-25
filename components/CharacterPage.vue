<template>
  <Character />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Character from '~/components/Character.vue'

export default defineComponent({
  name: 'CharacterPage',
  components: {
    Character,
  },
})
</script>
