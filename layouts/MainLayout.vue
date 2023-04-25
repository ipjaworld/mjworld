<template>
  <div>
    <header>
      <nav>
        <ul>
          <li><nuxt-link to="/">메인</nuxt-link></li>
          <li><nuxt-link to="/character">캐릭터</nuxt-link></li>
          <li><nuxt-link to="/news">뉴스</nuxt-link></li>
          <li><nuxt-link to="/simulator">시뮬레이터</nuxt-link></li>
          <li><nuxt-link to="/community">커뮤니티</nuxt-link></li>
          <li><nuxt-link to="/ranking">랭킹(신기능)</nuxt-link></li>
        </ul>
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
import { defineComponent } from 'vue'
import Footer from '~/components/Footer.vue'

export default defineComponent({
  name: 'MainLayout',
  components: { Footer },
})
</script>

<style scoped>
main {
  min-height: 600px;
}
header {
  margin: 0 auto;
  width: 1200px;
  display: flex;
  justify-content: space-between;
}
header nav:first-child {
  display: flex;
}
header nav:last-child {
  display: flex;
}
</style>
