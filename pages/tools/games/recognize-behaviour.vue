<template lang='pug'>
    
    v-game#recognize-behaviour( ref='game' title='لعبة التعرف علي السلوك' )

        template( #explain ) صور الأفعال البسيطة لزيادة عدد الكلمات عند الأطفال .... من 3 الى 5 صور في اليوم .تعرض على الطفل حوالي 4 مرات .

        template( #action )
            .slider
                splide( :options='{ direction: "rtl" }' @splide:pagination:updated='splidePaginationUpdated' )
                    splide-slide.slide( v-for='caption, path in slides' :key='path' )
                        .slide__image: img( :src='require(`~/assets/images/pages/tools/games/recognize-behaviour/${path}.png`)' )
                        .slide__caption {{ caption }}
                    splide-slide
            button( @click='party' ).slider__button#party 🥳

</template>

<script>
import party from 'party-js';

export default {
    
    data: vm => ({

        slides: {
            smell: "يشم",
            sleep: "ينام",
            play: "يلعب",
            listen: "يستمع",
            eat: "يأكل",
            drink: "يشرب",
            draw: "يرسم",
            clap: "يصفق"
        }        

    }),

    methods: {

        party ({ target }) {
            party.confetti(target, { count: party.variation.range(20, 80) })
        },

        splidePaginationUpdated (splide, previousItem, activeItem = {}) {
            if ( activeItem.page === this.slides.length - 1 ) this.$refs.game.nextStage()
        }

    }

}
</script>

<style lang='scss'>
.game#recognize-behaviour {

    flex-grow: 1;

    .game__stage {
        flex-direction: column;
    }

    .slider {
        
        width: 20em;

        .slide {
        
            &__image {
            
                width: 20em;
                height: 13em;
            
                img {
                
                    vertical-align: bottom;
                    width: 100%;
        
                }
        
            }
        
            &__caption {
        
                text-align: center;
                font-weight: bold;
                font-size: 2em;
                margin-bottom: 1em;
        
            }
        
        
        }

        &__button {
            background-color: var(--white);
            border: none;
            box-shadow: 0px 10px 15px var(--gray-90);
            border-radius: 0.5em;
            font-size: 1.5em;
            padding: 0.5em;
            cursor: pointer;
        }

        .splide__pagination__page.is-active {
            background: var(--primary-70);
        }

    }


}
</style>