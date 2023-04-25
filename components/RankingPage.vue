<template>
  <div>랭킹 정보</div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue'
import { useSocket } from '@/composables/useSocket'

export default {
  setup() {
    const rankingData = ref([])

    onMounted(async () => {
      const socketInstance = useSocket()
      const websocketUrl = process.env.WEBSOCKET_URL || 'fallback_websocket_url_here'
      socketInstance.connect(websocketUrl) // 여기에 실제 웹소켓 URL을 입력하세요.
      socketInstance.subscribe((message: any) => {
        rankingData.value = JSON.parse(message.data)
      })
    })

    return {
      rankingData,
    }
  },
}
</script>
