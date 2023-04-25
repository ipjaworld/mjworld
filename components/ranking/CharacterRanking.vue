<template>
    <div>
        랭킹 정보
    </div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue'
import { useSocket } from '@/composables/useSocket'

export default {
  setup() {
    /**
    const rankingData = ref([])

    onMounted(async () => {
      const socketInstance = useSocket()
      await socketInstance.connect()
      socketInstance.subscribe('/api/rankings/support', (message: any) => {
        rankingData.value = JSON.parse(message.body)
      })
    })

    return {
      rankingData
    }
     */
  },
}
</script>