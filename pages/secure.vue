<template>
  <ErrorPage />
</template>

<script lang="ts">
import ErrorPage from '../layouts/error.vue';

export default {
    components: { ErrorPage },
    middleware: 'authenticated',
  };
</script>