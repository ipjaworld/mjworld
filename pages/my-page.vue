<template>
  <MainLayout>
    <div>
      <h1>마이 페이지</h1>
      <p>{{ username }}님의 개인 정보와 설정을 확인 및 변경할 수 있습니다.</p>
      <!-- 개인 정보 및 설정에 관련된 내용을 추가합니다. -->
    </div>
  </MainLayout>
</template>

<script lang="ts">
import MainLayout from '~/components/MainLayout.vue'

export default {
  components: { MainLayout },
  data() {
    return {
      username: '홍길동', // 실제로는 로그인한 사용자의 정보를 가져와야 합니다.
    }
  },
}
</script>
