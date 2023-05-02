<template>
  <div>
    <header>
      <nav>
        <ul class="flex">
          <li class="mr-4"><nuxt-link to="/">메인</nuxt-link></li>
          <li class="mr-4"><nuxt-link to="/character">캐릭터</nuxt-link></li>
          <li class="mr-4"><nuxt-link to="/news">뉴스</nuxt-link></li>
          <li class="mr-4"><nuxt-link to="/simulator">시뮬레이터</nuxt-link></li>
          <li class="mr-4"><nuxt-link to="/community">커뮤니티</nuxt-link></li>
          <li class="mr-4"><nuxt-link to="/ranking">랭킹(신기능)</nuxt-link></li>
        </ul>
      </nav>
      <nav>
        <ul class="flex">
          <li class="mr-4"><nuxt-link to="/login">로그인</nuxt-link></li>
          <li><nuxt-link to="/join">회원가입</nuxt-link></li>
        </ul>
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
  background-color: blueviolet;
  margin: 0 auto;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
}
header nav:first-child {
  display: flex;
}
header nav:last-child {
  display: flex;
}
main {
  min-height: 900px;
}
</style>
