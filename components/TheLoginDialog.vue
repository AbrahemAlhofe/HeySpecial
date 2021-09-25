<template lang="pug">
    vs-dialog#login( :value='active' @input='$emit("close")' )
        template( #header ): h4 إنضم إلينا
        .con-form
            vs-button#google( block color='google' )
                .vs-button__text التسجيل عن طريق جوجل
                .vs-button__logo: GoogleIcon
            vs-button#facebook( block color='facebook' @click='loginWithFacebook')
                .vs-button__text التسجيل عن طريق فيسبوك
                .vs-button__logo: FacebookIcon

                
</template>

<script>
import FacebookIcon from '@/assets/icons/facebook.svg?inline';
import GoogleIcon from '@/assets/icons/google.svg?inline';
export default {
    name: "TheLoginDialog",
    methods: {
        loginWithFacebook () {
            window.location = "/auth/facebook"
        }
    },
    components: { FacebookIcon, GoogleIcon },
    props: ['active']
}
</script>
<style lang="scss">
.vs-dialog-content#login {
    
    .vs-button {

        direction: rtl;
    
        .vs-button__logo {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0.2em;
            margin-inline: 0.5em;
            svg { fill: var(--white) }
        }

    }

}
</style>