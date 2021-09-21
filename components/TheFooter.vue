<template lang='pug'>
  #footer
    vs-button#facebook(@click='goto("https://www.facebook.com/Hey-Spacial-102271598877467")' color='facebook')
        .vs-button__icon: FacebookIcon
        | Facebook
        template( #animate ) تواصل معنا
</template>

<script>
import FacebookIcon from '~/assets/icons/facebook.svg?inline';

export default {

    methods: {

        goto (link) { window.location = link }

    },

    components: { FacebookIcon }

}
</script>

<style lang='scss'>
#footer {

    background-color: var(--gray-90);
    padding: 1em;

    .vs-button {
        
        &#facebook {
            direction: ltr;
        }


        &__icon {
            border-radius: 0.5em;
            width: 1.5em;
            height: 1.5em;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 0.6em;
            color: transparent;
            svg { fill: hsl(0, 0%, 100%) }
        }

    }

}
</style>