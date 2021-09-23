<template lang='pug'>
    .tip-board( v-if='loading' )
        .tip-board__content نصيحة 💡 : {{ tip }} 
        .tip-board__loading( ref='loading' )
</template>
<script>
import tips from '@/data/tips.json';
export default {
    data: vm => ({
        loading: true,
        isReady: false,
        loader: null
    }),
    methods: {
        finish() { this.isReady = true }
    },
    watch: {

        isReady (isReady) {

            if ( !isReady ) return

            setTimeout(() => this.loading = false, this.time)
        
        }

    },
    computed: {
        tip () {
            const index = Math.floor( Math.random() * tips.length )
            return tips[ index ]
        },
        time () {
            return this.tip.split(" ").length * 250
        }
    },
    mounted () {
        
        this.loader = this.$vs.loading({
            target: this.$refs.loading,
            color: 'dark'
        })

    }
}
</script>
<style lang='scss'>
.tip-board {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 10000;
    padding: 1rem;
    text-align: center;
    font-size: 3rem;
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: var(--gray-90);
    &__content {
        font-size: 0.45em;
        text-align: justify;
        direction: rtl;
        width: 60vw;
        padding: 2em;
        border: 0.2em solid var(--black);
        border-radius: 0.5em;
    }
    &__loading {
        position: absolute;
        background: transparent;
        bottom: 2em;
        .vs-loading {
            background: transparent;
        }
    }
}
</style>
