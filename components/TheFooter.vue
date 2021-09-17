<template lang='pug'>
  #footer
    .link#facebook
        .link__text تواصل معنا علي
        a.link__icon( href='https://www.facebook.com/Hey-Spacial-102271598877467' name='facebook' ): FacebookIcon
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

    .link {
        background-color: var(--white);
        box-shadow: 0px 10px 15px var(--gray-90);

        border-radius: 0.5em;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        margin-inline: 0.5em;
        color: var(--black);
        padding: 0.5em;
        &__text {
            font-size: 1.2em;
        }
        &__icon {
            border-radius: 0.5em;
            width: 2em;
            height: 2em;
            background-color: #1877f2;
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