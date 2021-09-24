<template lang='pug'>
.page#index
  TheQuote
  .sections
    IndexSection(title='التقييمات')
      vs-card(@click='$router.push(`/tools/tests/giliam`)')
        template(#title) 
          h3 مقياس جيليام لتشخيص التوحدية
        template(#img)
          img(src='~/assets/images/pages/index/giliam.jpg' alt='صورة تحتوي علي مجموعة من الأشكال الهندسية ثلاثية الأبعاد')
        template(#text): h1
        

    IndexSection#games( title='الالعاب' )
      vs-card-group
        vs-card(v-for='gameTitle, gameName in games' :key='gameName' @click='$router.push(`/tools/games/${gameName}`)' type='2' )
          template( #title ): h3 {{ gameTitle }}
          template( #text ): h1
          template( #img ): img( :src='require(`~/assets/images/pages/index/${gameName}.jpg`)' )

    IndexSection#store( title='المتجر' )
      vs-card-group
        vs-card(v-for='product, index in store.products' :key='index' @click='goto(product.link)')
          template( #title ): h3 {{ product.caption }}
          template( #text ): h1
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
  data: vm => ({ store: { products: storeProducts }, games: { ['first-letter']: 'لعبة الحرف الأول', ['recognize-behaviour']:'لعبة التعرف علي السلوك', ['imitate']: 'لعبة التقليد' } }),
  methods:{
    goto(link) {
      window.open(link, '_blank')
    }
  }
}
</script> 
<style lang="scss">
@import '@/styles/mixins/screen.scss';

.page#index {

  .sections {
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
  }
  
  .section {
  
    .vs-card__group {

      direction: ltr;
      display: flex;
      justify-content: center;
      align-items: center;

      .vs-card {
        
        direction: rtl;
        width: 90vw;
        &__group { direction: ltr }
        
      }
      
      .vs-card__group-next, .vs-card__group-prev { display: none }
      
      @include screen('md') {
  
        .vs-card__group-next, .vs-card__group-prev { display: block }

      }

    }
  
    &__title {
      padding-right: 1em;
      color: var(--black);
      margin: auto;
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
  
  }
  
}
</style>
