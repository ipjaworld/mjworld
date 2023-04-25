<template>
  <CommunityPage />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CommunityPage from '~/components/CommunityPage.vue';

export default defineComponent({
  name: "Community",
  layout: 'MainLayout',
  middleware: 'authenticated',
  components: { CommunityPage },
  setup() {

  },
})
</script>
