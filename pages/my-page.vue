<template>
  <div>
    <h1>마이 페이지</h1>
    <p>{{ username }}님의 개인 정보와 설정을 확인 및 변경할 수 있습니다.</p>
    <!-- 개인 정보 및 설정에 관련된 내용을 추가합니다. -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "My-page",
  layout: 'MainLayout', 
  middleware: 'authenticated',
  components: {  },
  data() {
    return {
      username: '홍길동', // 실제로는 로그인한 사용자의 정보를 가져와야 합니다.
    }
  },
})
</script>
