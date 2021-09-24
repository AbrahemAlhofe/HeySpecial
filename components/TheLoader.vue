<template lang='pug'>
    .loader( v-if='loading' )
        .loader__content {{ tip }} 
        .loader__progress( ref='progress' )
</template>
<script>
import tips from '@/data/tips.json';
export default {
    data: vm => ({
        loading: true,
        isReady: false,
        tip: null,
        loader: null
    }),
    methods: {
        finish() { this.isReady = true }
    },
    watch: {
        isReady (isReady) { if ( isReady ) setTimeout(() => this.loading = false, this.time) }
    },
    computed: {
        time () { return this.tip.split(" ").length * 250 }
    },
    mounted () {
        this.loader = this.$vs.loading({ target: this.$refs.progress, color: 'dark' })
    },
    async fetch() {
        this.tip = "نصيحة 💡 : " + tips[ Math.floor( Math.random() * tips.length ) ]
    },
    fetchOnServer: true,
    fetchKey: 'loader'
}
</script>
<style lang='scss'>
.loader {
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
    &__progress {
        position: absolute;
        background: transparent;
        bottom: 2em;
        .vs-loading {
            background: transparent;
        }
    }
}
</style>
