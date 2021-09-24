<template lang="pug">
    #navbar
        vs-navbar( center-collapsed fixed shadow-scroll padding-scroll v-model='active')
            template(#left): HeySpecialLogo
            vs-navbar-item#home(:active="active == '/'") الصفحة الرئيسية
            vs-navbar-item#games(:active="active == '/tools/games/imitate'") الألعاب
            vs-navbar-item#tests(:active="active == '/tools/tests/giliam'") الإختبارات
            template(#right)
                vs-button( @click='$store.commit("openLoginDialog")' ) تسجيل الدخول
                vs-button#open-sidebar( icon dark shadow @click='$store.commit("openSidebar")' ): MenuIcon
</template>
<script>
import MenuIcon from '@/assets/icons/menu.svg?inline';
export default {
    
    data: vm => ({

        links: {
            home: '/',
            games: '/tools/games/imitate',
            tests: '/tools/tests/giliam'
        }

    }),

    computed : {

        active: {

            get () {

                return this.$route.path

            },

            set (path) {

                this.$router.push( this.links[path] )
                
            }

        }

    },

    components: { MenuIcon }

}
</script>
<style lang="scss">
@import "@/styles/mixins/screen.scss";

#navbar {
    
    height: 5em;

    #open-sidebar { @include screen("md") { display: none } }

}
</style>