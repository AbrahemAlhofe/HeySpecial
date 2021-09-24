<template lang="pug">
    vs-sidebar( absolute :open="open" :value='open' @input='$emit("close")' )
        vs-button( icon dark shadow @click='$store.commit("closeSidebar")' ): CloseIcon
        vs-sidebar-item#home الصفحة الرئيسية
        vs-sidebar-item#games الألعاب
        vs-sidebar-item#tests الإختبارات
</template>
<script>
import CloseIcon from '@/assets/icons/x.svg?inline';
export default {

    props: ['open'],

    components: { CloseIcon }

}
</script>
<style lang="scss"></style>