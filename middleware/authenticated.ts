import { Middleware } from '@nuxt/types'

const authenticated: Middleware = ({ store, redirect }) => {
  // 인증 상태를 확인하기 위해 store.state.auth 모듈을 참조
  if (!store.state.auth?.authenticated) {
    return redirect('/login')
  }
}

export default authenticated