<template lang='pug'>
  .v-section
    h1.v-section__title {{ title }}
    .v-section__form
      v-section-quiz(
        v-for='quiz, index in quizzes'
        :key='index'
        :quiz='quiz'
        v-model='answers[index]'
      )
</template>
<script>
export default {
  data: vm => ({
    answers: [],
    score: 0
  }),
  watch: {
    answers : {
      handler (answers) {
        this.score = answers.reduce((score, answer) => score + answer, 0)
        this.$emit('input', this.score)
      },
      deep: true
    }
  },
  props: {
    quizzes: Array,
    title: String
  }
}
</script>
<style lang='scss'>
.v-section {

  width: 55vw;

  &__title {
    font-family: 'Cairo', sans-serif;
  }

  &__form {
    background-color: var(--white);
    padding: 1em;
    border-radius: 0.5em;
    box-shadow: 0px 15px 15px var(--blue-90);
  }

}
</style>