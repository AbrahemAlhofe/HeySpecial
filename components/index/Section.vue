<template lang="pug">
    section.section
      h2.section__title {{ title }}
      .section__items: slot
</template>

<script>
export default {

    props: {

        title: {
            type: String,
            default: 'no title'
        }

    }

}
</script>

<style lang='scss'>
.page#index {
    
    .section {
    
      &__title {
        padding-right: 1em;
        color: var(--black);
      }

      &__items {
        overflow-x: scroll;
        width: 100vw;
        white-space: nowrap;
      }

    }

}
</style>