<template>
  <SimulatorPage />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SimulatorPage from '~/components/SimulatorPage.vue';

export default defineComponent({
  name: "Simulator",
  layout: 'MainLayout', 
  middleware: 'authenticated',
  components: { SimulatorPage },
})
</script>
