<template lang='pug'>

    v-game#first-charachter( ref='game' title="لعبة الحرف الأول" )

        template( #explain ) شرح لعبة

        template( #action )
            
            .slider( ref='slider' )
                .slide
                    .slide__image
                        img( :src='currentImage' )
                    .slide__options
                        .slide__option( v-for='option of currentSlide.options' @click='validate(option, $event)' )
                            span {{ option.value }}

</template>
<script>
import party from 'party-js';
const images = require.context( '~/assets/images/pages/tools/games/first-character' , true, /\.png$/ )

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

export default {

    data: vm => ({
        images: images.keys().map(key => images(key)),
        slides: images.keys().map(key => {
            const name = (/\.\/(?<name>.*)\.(png|jpg)/g).exec(key).groups['name']
            const options = name.split('').map((option, index) => ({ value: option, isValid: index === 0 }))
            return { key, options: shuffle( options ) }
        }),
        currentImageIndex: 0,
        currentSlideIndex: 0
    }),

    computed: {

        currentImage () {
        
            return this.images[ this.currentImageIndex ]
        
        },
        
        currentSlide () {

            return this.slides[ this.currentSlideIndex ]
        
        }

    },

    watch : {

        currentSlideIndex (index) {

            this.$refs.slider.style.setProperty('--rotate-ratio',`${ ( index ) * 360 }deg`)

        }

    },

    methods: {

        next () {
            if ( this.currentSlideIndex >= this.images.length - 1 ) return this.finish()
            this.currentSlideIndex += 1
            setTimeout(() => this.currentImageIndex += 1, 300)
        },

        finish () {
            this.$refs.game.nextStage()
        },

        validate (option, { target }) {

            if ( option.isValid ) {
                party.confetti(target, { count: party.variation.range(20, 80) })
                setTimeout(() => this.next(), 2000)
            }
            
        }

    }
    
}
</script>
<style lang='scss'>
.slider {
  
  transform-style: preserve-3d;
  transition: transform 1s ease-in-out;
  transform: rotate3d(0, 1, 0, var(--rotate-ratio, 0deg));
  
  .slide {
    
    width: 20em;
    border-radius: 0.5em;
    height: 20em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1em;
    
    &__image {
      
      flex-grow: 1;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--white);
      box-shadow: 0px 0px 15px var(--gray-90);
      border-radius: 0.5em;
      
      img {
        width: 10em;
        border-radius: 0.5em;
        transform: translateZ(20px);
        filter: drop-shadow(0px 0px 5px var(--gray-65));
      }
      
    }

    &__options {
        display: flex;
        gap: 1em;
    }
    
    &__option {
      
      background-color: var(--white);
      box-shadow: 0px 0px 15px var(--gray-90);
      color: var(--black);
      height: 2.5em;
      width: 2.5em;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0.5em;
      cursor: pointer;
      font-weight: bold;
      border: 0.15em solid var(--black);

      span {
        transform: translateZ(20px);
        font-size: 1.5em;
        text-shadow: 0px 0px 15px var(--black);
      }
      
    }
    
  }
  
}
</style>