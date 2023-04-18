<script>
export default {
  computed: {
    character() {
      return this.$store.state.characters.character
    }
  },
  created() {
    this.$store.dispatch('characters/fetchCharacter', 'some_character_name')
  }
}
</script>