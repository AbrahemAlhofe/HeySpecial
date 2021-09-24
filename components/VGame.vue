<template lang='pug'>
  
    .game
        
        .game__stage#explain( v-if="currentStage === 'explain'" )
                
            .dialog

                h1.dialog__title {{ title }}
                
                .dialog__body: slot( name='explain' )

                .dialog__footer
                    vs-button( @click='nextStage' gradient ) إبدأ اللعبة
        
        .game__stage#action( v-if="currentStage === 'action'" )
            slot( keep-alive name='action' )

        .game__stage#result( v-if="currentStage === 'result'" )
            
            .dialog

                h1.dialog__title أحسنت
                
                .dialog__body: slot( name='result' )

                .dialog__footer
                    vs-button( @click='restart' gradient) إعادة اللعب
        
        IndexSection( title='' )
            vs-card-group
                vs-card(v-for='gameTitle, gameName in games' @click='$router.push(`/tools/games/${gameName}`)' type='2' )
                    template( #title ): h3 {{ gameTitle }}
                    template( #text ): h1
                    template( #img ): img( :src='require(`~/assets/images/pages/index/${gameName}.jpg`)' )
                    

</template>

<script>
export default {

    data: vm => ({
        
        stages: ['explain', 'action', 'result'],

        currentStage: 'explain',
        
        games: { ['first-letter']: 'لعبة الحرف الأول', ['recognize-behaviour']:'لعبة التعرف علي السلوك', ['imitate']: 'لعبة التقليد' }

    }),

    computed : {

        currentStageIndex () { return this.stages.indexOf(this.currentStage) }

    },

    methods: {

        nextStage () {

            this.currentStage = this.stages[ this.currentStageIndex + 1 ]

        },

        restart () {

            this.currentStage = this.stages[0]

        }

    },

    props: ['title']
    
}
</script>

<style lang='scss'>
@import '@/styles/mixins/screen.scss';

.game {

    display: flex;
    flex-direction: column;
    margin: auto;

    .section { width: 100vw }

    .vs-card__group {
        .vs-card__group-next, .vs-card__group-prev { display: none }
    }

    .vs-card {
      
      direction: rtl;
      &__group { direction: ltr }

    }
    
    &__stage {
        
        width: 100%;
        perspective: 1000px;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
    }

    .dialog {
        
        width: 85vw;
        background-color: var(--white);
        padding: 25px;
        border-radius: 0.5em;
        text-align: center;
        box-shadow: 0px 10px 15px var(--gray-90);
        margin: auto;

        &__title { margin: 0 }

        &__body {
            text-align: justify;
            padding: 0.5em;
        }

        &__footer button {
            margin: auto;
        }

        @include screen("sm") { width: 60vw }

        @include screen("lg") { width: 40vw }

    }

}
</style>