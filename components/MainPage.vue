<template>
  <div>
    <nuxt-link to="/secure">보안 페이지로 이동</nuxt-link>
    <nuxt-link to="/character">캐릭터 페이지로 이동</nuxt-link>
    <nuxt-link to="/join">회원 가입 페이지로 이동</nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'MainPage',
})
</script>
