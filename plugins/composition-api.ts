import { defineNuxtPlugin } from '@nuxtjs/composition-api'

export default defineNuxtPlugin((ctx) => {
  // Nuxt context 객체에 axios 인스턴스를 주입하여 사용하도록 변경되었습니다. 이제 타입 오류가 발생하지 않아야 합니다.
  ctx.$axios = ctx.$axios
})