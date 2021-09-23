<template lang="pug">
    #navbar
        vs-navbar( center-collapsed fixed shadow-scroll padding-scroll v-model='active')
            template(#left): HeySpecialLogo
            vs-navbar-item#home(:active="active == '/'") الصفحة الرئيسية
            vs-navbar-item#games(:active="active == '/tools/games/imitate'") الألعاب
            vs-navbar-item#tests(:active="active == '/tools/tests/giliam'") الإختبارات
            template(#right)
                vs-button( @click='$store.commit("openLoginDialog")' ) تسجيل الدخول
</template>
<script>
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

    }

}
</script>
<style lang="scss" scoped>
#navbar { height: 5em }
</style>