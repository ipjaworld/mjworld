import { Middleware } from '@nuxt/types'

const authenticated: Middleware = ({ store, redirect }) => {
  if (!store.state.authenticated) {
    return redirect('/login')
  }
}

export default authenticated