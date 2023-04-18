<template>
    <MainLayout>
        <SimulatorPage />
    </MainLayout>
</template>

<script lang="ts">
import SimulatorPage from '~/components/SimulatorPage.vue';
import MainLayout from '~/components/MainLayout.vue';

export default {
  middleware: 'authenticated',
  components: { SimulatorPage, MainLayout }
}
</script>
