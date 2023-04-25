<!-- pages/login.vue -->
<template>
  <LoginForm />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginForm from '~/components/LoginForm.vue';

export default defineComponent({
  name: 'login',
  layout: 'MainLayout',
  components: {
    LoginForm,
  },
  middleware: 'authenticated',
});
</script>
