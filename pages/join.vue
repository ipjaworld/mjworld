<template>
  <MainLayout>
    <div>
      <h1>회원 가입</h1>
      <form @submit.prevent="onSubmit">
        <input v-model="username" type="text" placeholder="사용자 이름" />
        <input v-model="email" type="email" placeholder="이메일" />
        <input v-model="password" type="password" placeholder="비밀번호" />
        <button type="submit">회원 가입</button>
      </form>
    </div>
  </MainLayout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useUsersStore } from '~/store/users'
import MainLayout from '~/components/MainLayout.vue'

export default defineComponent({
  name: 'JoinPage',
  components: { MainLayout },
  setup() {
    const usersStore = useUsersStore()

    const username = ref('')
    const email = ref('')
    const password = ref('')

    const onSubmit = async () => {
      try {
        const userData = {
          username: username.value,
          email: email.value,
          password: password.value,
        }
        await usersStore.joinUser(userData)
        // 회원 가입이 성공적으로 완료된 후 처리할 로직을 작성하세요.
      } catch (error) {
        // 회원 가입 중 발생한 에러를 처리하세요.
      }
    }

    return {
      username,
      email,
      password,
      onSubmit,
    }
  },
})
</script>
