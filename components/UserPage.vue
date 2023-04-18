<template>
  <User />
</template>

<script lang="ts">
import Vue from 'vue'
import User from '~/components/User.vue'

export default Vue.extend({
  name: 'UserPage',
  components: { User },
})
</script>
