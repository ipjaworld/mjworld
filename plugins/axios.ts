import axios from 'axios'
import { defineNuxtPlugin } from '@nuxtjs/composition-api'

export default defineNuxtPlugin(({ $config }, inject) => {
  const axiosInstance = axios.create({
    baseURL: $config.BACKEND // 백엔드 서버의 주소를 환경 변수에서 가져옵니다.
  })

  //위 코드는 Nuxt context 객체에 axios 인스턴스를 주입하여 사용하도록 변경되었습니다. 이제 타입 오류가 발생하지 않아야 합니다.
  inject('axios', axiosInstance)
})
