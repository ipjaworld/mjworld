<template>
  <MainLayout>
    <MainPage />
  </MainLayout>
</template>

<script lang="ts">
import Vue from 'vue'
import MainLayout from '~/components/MainLayout.vue';
import MainPage from '~/components/MainPage.vue';

export default Vue.extend({
    name: "Index",
    components: { MainLayout, MainPage }
})
</script>
