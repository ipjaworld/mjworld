<template>
  <MainLayout>
    <div>
      <h1>로그인</h1>
      <form @submit.prevent="submitLoginForm">
        <div>
          <label for="email">이메일:</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div>
          <label for="password">비밀번호:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">로그인</button>
      </form>
    </div>
  </MainLayout>
</template>

<script lang="ts">
import { ref } from '@nuxtjs/composition-api'
import MainLayout from '~/components/MainLayout.vue'

export default {
  components: { MainLayout },
  setup() {
    const email = ref('')
    const password = ref('')

    const submitLoginForm = async () => {
      // 로그인 API 호출 및 인증 처리
    }

    return {
      email,
      password,
      submitLoginForm,
    }
  },
}
</script>
