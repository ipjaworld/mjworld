<script>
export default {
  computed: {
    user() {
      return this.$store.state.users.user
    }
  },
  methods: {
    async joinUser() {
      const userData = { /* 회원 가입 정보 */ }
      await this.$store.dispatch('users/joinUser', userData)
    }
  }
}
</script>