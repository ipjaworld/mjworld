<template>
  <Character />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Character from '~/components/Character.vue'

export default defineComponent({
  name: 'CommunityPage',
  components: {
    Character,
  },
})
</script>
