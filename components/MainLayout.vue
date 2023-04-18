<template>
  <div>
    <header>
      <nav>
        <nuxt-link to="/">메인</nuxt-link>
        <nuxt-link to="/character">캐릭터</nuxt-link>
        <nuxt-link to="/news">뉴스(신기능)</nuxt-link>
        <nuxt-link to="/simulator">시뮬레이터(신기능)</nuxt-link>
        <nuxt-link to="/community">커뮤니티(신기능)</nuxt-link>
      </nav>
      <nav>
        <nuxt-link to="/login">로그인</nuxt-link>
        <nuxt-link to="/join">회원가입</nuxt-link>
      </nav>
    </header>
    <main>
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Footer from '~/components/Footer.vue'

export default Vue.extend({
  name: 'MainLayout',
  components: { Footer },
})
</script>
