<template lang="pug">
    #giliam-test( :class='`--${status}`')
        .dialog(v-if='status === "idle"')
            h1.dialog__title مقياس جيليام لتشخيص التوحدية
            p.dialog__body.
                يعد مقياس جيليام من أهم الأدوات المستخدمة في قياس وتشخيص مرض التوحد ومعرفة مرحلته ودرجة تطوره. يتم استخدام مقياس جيليام للأعمار التي تتراوح ما بين 3-22 عامًا للأشخاص الذين تظهر عليهم أعراض قد تكون أعراضًا للتوحد مثل الاضطرابات السلوكية الحادة أو انعدام مهارات التواصل الاجتماعي.
            vs-button(@click='start' gradient) إبدأ الإختبار
        .test(v-if='status === "pending"')
            v-section.test__section(
              v-for='section, index in sections'
              :key='index'
              :title='section.title'
              :quizzes='section.quizzes'
              v-model='sectionsScores[index]'
            )
            vs-button.test__submit-button(@click='submit') أنتهيت
        .result(v-if='status === "finished"')
            .item(v-for='item, index in result.items' :key='index')
                .item__title {{ item.title }}
                .item__value {{ item.value }}
            hr
            .item
                .item__title النتيجة 
                .item__value {{ result.score }}
            .item
                .item__title النوع
                .item__value {{ result.type }}
            vs-button(@click='status = "pending"') إعادة الإختبار
</template>
<script>
import sections from '@/data/tools/tests/quizzes.json'

function range (min, max) {

  const range = {}

  for ( let i = min; i <= max; i += 1 ) range[i] = null

  return range

}

export default {
  data : vm => ({
    result: {
      items: [],
      score: 0,
      type: 'عادي'
    },
    sections,
    sectionsScores : [],
    status : "idle"
  }),
  watch: {

    sectionsScores: {

      handler (scores) {

        this.result.score = scores.reduce(( total, score ) => total + score, 0)

      },

      deep: true

    },

    ['result.score'] (score) {
      if ( score in range(1, 17) ) this.result.type = "بسيط"
      if ( score in range(17, 27) ) this.result.type = "طيف توحد"
      if ( score in range(27, 46) ) this.result.type = "توحد شديد"
    }

  },
  methods: {
    start () {
      this.status = "pending"
    },
    submit () {
      this.result.items = sections.map((section, index) => ({ title: section.title, value: this.sectionsScores[index] || 0 }))
      this.status = "finished"
    }
  }
}
</script>

<style lang='scss'>
#giliam-test {

    min-height: 90vh;

    display: flex;
    justify-content: center;

    &.--idle, &.--finished {
        align-items: center;
    }

    .dialog {
        width: 30em;
        background-color: var(--white);
        padding: 0.5em;
        border-radius: 0.5em;
        text-align: center;
        box-shadow: 0px 10px 15px var(--gray-90);
        font-family: 'Cairo';
        &__body {
            text-align: justify;
            padding: 0.5em;
        }
        .vs-button {
          margin: auto;
        }
    }
    
    .result {
    
      background-color: var(--white);
      width: 20em;
      border-radius: 0.5em;
      padding: 0.5em;
      box-shadow: 0px 10px 15px var(--gray-90);
      font-family: 'Cairo';
    
      .item {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1em;
        color: red;
        &__value {
          background-color: var(--primary-80);
          font-family: cursive;
          min-width: 1em;
          height: 1.5em;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: .2em;
          font-size: 1.2em;
          padding: 0.2em;
        }
      }
    }

}
</style>
