<template>
  <User />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import User from '~/components/User.vue'

export default defineComponent({
  name: 'UserPage',
  components: { User },
})
</script>
