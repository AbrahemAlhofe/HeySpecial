<template lang="pug">
    vs-sidebar( absolute :open="open" :value='open' @input='$emit("close")' )
        vs-button( icon dark shadow @click='$store.commit("closeSidebar")' ): CloseIcon
        vs-sidebar-item#home: NuxtLink( to="/" ) الصفحة الرئيسية
        vs-sidebar-item#games: NuxtLink( to="/tools/games/imitate" ) الألعاب
        vs-sidebar-item#tests: NuxtLink( to="/tools/tests/giliam" ) الإختبارات
</template>
<script>
import CloseIcon from '@/assets/icons/x.svg?inline';
export default {

    props: ['open'],

    components: { CloseIcon }

}
</script>
<style lang="scss">
.vs-sidebar {
    .vs-sidebar__item {
        a {
            text-decoration: none;
            color: var(--black)
        }
    }
}
</style>