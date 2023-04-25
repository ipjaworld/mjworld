<template>
  <MainPage />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainPage from '~/components/MainPage.vue';

export default defineComponent({
    name: "Index",
    layout: 'MainLayout', 
    // middleware: 'authenticated',
    components: { MainPage },
    setup() {

    },
})
</script>
