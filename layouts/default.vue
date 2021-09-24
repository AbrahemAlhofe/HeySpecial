<template lang='pug'>
    .layout#default
        TheNavbar
        Nuxt.layout__content
        TheFooter
        TheLoginDialog( :active="$store.state.isLoginDialogOpen" @close='$store.commit("closeLoginDialog")')
        TheSidebar( :open='$store.state.isSidebarOpen' )
</template>
<script>
export default {

    mounted () {
        this.$nextTick(() => this.$nuxt.$loading.finish())
    }

}
</script>
<style lang="scss">
@import url("@/assets/fonts/Cairo/setup.css");

:root {
  
    --white: hsl(0deg, 0%, 100%);

    --primary-95: hsl(200deg, 100%, 95%);
    --primary-90: hsl(200deg, 100%, 90%);
    --primary-80: hsl(200deg, 100%, 80%);
    --primary-70: hsl(200deg, 100%, 70%);

    --gray-100: hsl(0deg, 0%, 98%);
    --gray-95: hsl(0deg, 0%, 95%);
    --gray-90: hsl(0deg, 0%, 90%);
    --gray-65: hsl(0deg, 0%, 65%);

    --black: hsl(0deg, 0%, 20%);

}
* {
    box-sizing: border-box;
    font-family: 'Cairo';
}
body { margin: 0; }
.layout {

    &#default {
        direction: rtl;
        width: 100%;
        min-height: 100vh;
        background-color: var(--gray-100); 
        display: flex;
        flex-direction: column;
    }

    &__content {
        flex-grow: 1;
    }

}
::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    display: block;
    background: var(--gray-90);
}
::-webkit-scrollbar-thumb {
    background: var(--black);
    border-radius: 5px;
}
</style>