import { NuxtAppOptions } from '@nuxt/types'
import { AxiosInstance } from 'axios'

declare module '@nuxt/types' {
  interface Context {
    $axios: AxiosInstance
  }

  interface NuxtAppOptions {
    $axios: AxiosInstance
  }
}

declare module '@nuxtjs/composition-api' {
  interface UseContextReturn {
    $axios: AxiosInstance
  }
}