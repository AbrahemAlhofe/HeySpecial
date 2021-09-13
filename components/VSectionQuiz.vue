<template lang='pug'>
.quiz
  .quiz__header
    label.quiz__label {{ quiz.label + " ؟" }}
    InfoIcon.quiz__details(v-if='quiz.details !== null')
  .quiz__options-list
    button( 
      v-for='option, value in quiz.options'
      :class='[ "quiz__option", { "--active" : value === answer } ]'
      @click='input( value )'
    ) {{ option }}
</template>

<script>
import InfoIcon from '~/assets/icons/info.svg?inline';
import tippy from 'tippy.js';

export default {
  name: 'VQuiz',
  data: vm => ({
    answer: 0
  }),
  mounted () {

    const detailsElement = this.$el.querySelector(".quiz__details")

    tippy( detailsElement, { content: this.quiz.details } )

  },
  methods: {

    input ( answer ) {
      this.answer = answer
      this.$emit("input", answer)
    }

  },
  props: {
    value: Number,
    quiz: Object,
  },
  components: { InfoIcon }
}
</script>

<style lang='scss'>
@import 'tippy.js/dist/tippy.css';
.quiz {
  
  font-family: 'Cairo', sans-serif;
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
  gap: 0.2em;

  &__header {
    display: flex;
    align-items: center;
    gap: 0.2em;
  }

  &__details {
    width: 1.2em;
    cursor: pointer;
  }

  &__label {
    font-weight: bold;
    text-align: justify;
  }
  &__options-list {
    text-align: center;
    display: flex;
  }
  &__option {
    border: 0;
    padding: 0.3em;
    border-radius: 0.2em;
    margin-inline: 0.2em;
    margin-block: 0.2em;
    width: 6em;
    height: 2.2em;
    color: var(--gray-65);
    cursor: pointer;
  }
  &__option.--active {
    background-color: var(--primary-80);
    color: var(--black)
  }
  &__option:active {
    border-bottom: 0px;
  }

}
</style>
