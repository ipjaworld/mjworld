<template>
    <MainLayout>
        <CommunityPage />
    </MainLayout>
</template>

<script lang="ts">
import CommunityPage from '~/components/CommunityPage.vue';
import MainLayout from '~/components/MainLayout.vue';

export default {
  middleware: 'authenticated',
  components: { MainLayout, CommunityPage }
}
</script>
