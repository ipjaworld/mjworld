<template>
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
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from '@nuxtjs/composition-api';
  import useAuthService from '~/services/AuthService';
  
  export default defineComponent({
    setup() {
      const email = ref('');
      const password = ref('');
      const authService = useAuthService();
  
      const submitLoginForm = async () => {
        try {
          const user = await authService.login({ username: email.value, password: password.value });
          if (user) {
            // 로그인 성공시 처리 (예: 페이지 이동)
          }
        } catch (error) {
          console.error('로그인 실패:', error);
        }
      };
  
      return {
        email,
        password,
        submitLoginForm,
      };
    },
  });
  </script>
  