<template lang='pug'>
.page#index
  TheQuote
  .sections
    section.section#tests
      h2.section__title التقييمات
      NuxtLink(to="/tools/tests/giliam").item
        img( src='~/assets/images/pages/index/giliam.jpg' alt='صورة تحتوي علي مجموعة من الأشكال الهندسية ثلاثية الأبعاد').item__thumbnail
        .item__caption مقياس جيليام لتشخيص التوحدية
    section.section#games
      h2.section__title الألعاب
      NuxtLink(to="/tools/games/imitate").item
        img( src='~/assets/images/pages/index/imitate-game.jpg' alt='صورة تحتوي علي مجموعة من الوجوه المتبسمة ثلاثية الأبعاد' ).item__thumbnail
        .item__caption لعبة التقليد
      NuxtLink(to="/tools/games/recognize-behaviour").item
        img( src='~/assets/images/pages/index/recognize-behaviour.jpg' alt='صورة تحتوي علي فتاة جالسة علي كرسي و تحمل لابتوب' ).item__thumbnail
        .item__caption لعبة التعرف علي السلوك
      NuxtLink(to="/tools/games/first-letter").item
        img( src='~/assets/images/pages/index/first-letter.jpg' alt='صورة مجموعة من الأحرف الإنجليزية ثلاثية الأبعاد علي خلفية صفراء' ).item__thumbnail
        .item__caption لعبة الحرف الأول
    
    IndexSection#store( title='المتجر' )
      vs-card-group
        vs-card(v-for='product in store.products' @click='goto(product.link)')
          template( #title ): h3 {{ product.caption }}
          template(#img='')
            img(:src='product.thumbnail.src' alt='')
          template(#interactions='')
            vs-button.btn-chat(gradient)
              i.bx.bx-chat
              span.span {{product.price}}

</template>
<script>
import storeProducts from '~/data/store/products.json';

export default {
  data: vm => ({ store: { products: storeProducts } }),
  methods:{
    goto(link) {
      window.open(link, '_blank')
    }
  }
}
</script> 
<style lang="scss" scoped>
.sections {
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
}

.section {

  &__title {
    padding-right: 1em;
    color: var(--black);
  }

  &__items {
    padding-inline: 1em;
  }

  .item {
    text-decoration: none;
    background-color: var(--white);
    width: 20em;
    height: 4.5em;
    display: flex;
    margin: 1em;
    border-radius: 0.5em;
    overflow: hidden;
    gap: 1em;
    box-shadow: 0px 10px 15px var(--gray-90);
    &__thumbnail {
      -webkit-mask-image: -webkit-gradient(linear, right 75%, left bottom, from(var(--white)), to(hsl(0deg 0% 0% / 0%)));
    }
    &__caption {
      flex-grow: 1;
      display: flex;
      align-items: center;
      color: var(--black);
    }
  }

  &#store {

    .vs-card__group { direction: ltr }

  }

}
</style>
