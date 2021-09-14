<template lang='pug'>
    nav#navbar
        HeySpecialLogo
        #navbar__links
            NuxtLink( to='/' ).navbar__link الصفحة الرئيسية
            NuxtLink( to='/tools/games/imitate' ).navbar__link الألعاب
            NuxtLink( to='/tools/tests/giliam' ).navbar__link التقييمات
</template>
<script>
export default {}
</script>
<style lang='scss'>
#navbar {
    position: sticky;
    width: 100vw;
    height: 10vh;
    background-color: var(--white);
    padding: 0.5em;
    display: flex;
    &__links {
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1em;
    }
    .navbar__link {
        text-decoration: none;
        font-family: 'Cairo';
        color: var(--black);
    }
}
</style>