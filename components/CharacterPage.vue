<template>
  <Character />
</template>

<script lang="ts">
import Vue from 'vue'
import Character from '~/components/Character.vue'

export default Vue.extend({
  name: 'CharacterPage',
  components: { Character },
})
</script>
