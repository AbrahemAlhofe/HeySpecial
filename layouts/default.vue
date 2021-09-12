<template lang='pug'>
    .layout#default
        TheNavbar
        Nuxt
</template>
<script>
export default {}
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
    --gray-65: hsl(0deg, 0%, 65%);

    --black: hsl(0deg, 0%, 20%);

}
* { box-sizing: border-box }
body { margin: 0; }
.layout#default {
    width: 100vw;
    min-height: 100vh;
    background-color: var(--gray-100); 
}
</style>