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
            

</template>

<script>
export default {

    data: vm => ({
        
        stages: ['explain', 'action', 'result'],

        currentStage: 'explain'

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

    &__stage {
        
        width: 100%;
        perspective: 1000px;
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .dialog {
        
        width: 85vw;
        background-color: var(--white);
        padding: 0.5em;
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