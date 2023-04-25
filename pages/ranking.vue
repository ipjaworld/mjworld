<template>
  <RankingPage />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import RankingPage from '../components/RankingPage.vue'

export default defineComponent({
  name: "Ranking",
  layout: 'MainLayout',
  middleware: 'authenticated',
  components: { RankingPage },
  setup() {

  },
})
</script>
