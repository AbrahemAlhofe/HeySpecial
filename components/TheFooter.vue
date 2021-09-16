<template lang='pug'>
  #footer
    a( href='https://www.facebook.com/Hey-Spacial-102271598877467' ).footer__link#facebook: FacebookIcon
</template>

<script>
import FacebookIcon from '~/assets/icons/facebook.svg?inline';
import GithubIcon from '~/assets/icons/github.svg?inline';

export default {

    components: { FacebookIcon, GithubIcon }

}
</script>

<style lang='scss'>
#footer {

    background-color: var(--gray-90);
    padding: 1em;

    .footer__link {
        width: 2em;
        background-color: var(--white);
        border: none;
        box-shadow: 0px 10px 15px var(--gray-90);
        border-radius: 0.5em;
        font-size: 1.5em;
        cursor: pointer;
        height: 2em;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin-inline: 0.5em;
        color: var(--black);
    }

}
</style>