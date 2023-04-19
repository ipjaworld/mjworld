<template>
  <MainLayout>
    <RankingPage />
  </MainLayout>
</template>

<script lang="ts">
import MainLayout from '~/components/MainLayout.vue';
import RankingPage from '../components/RankingPage.vue'

export default {
  components: { MainLayout, RankingPage },
  middleware: 'authenticated',
}
</script>
