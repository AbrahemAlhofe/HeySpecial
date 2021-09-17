<template lang='pug'>
NuxtLink.hey-special-logo( to='/' title='HeySpecial' )
    img.hey-special-logo__brandmark( src='~/assets/brand/logo.svg' alt='شعار الموقع و هو عبارة عن يد بيضاء خلفها دائرة متدرجة من الأصفر إلي الأحمر' )
    div( v-if='isFull' ).hey-special-logo__type HeySpecial
</template>
<script>
export default {
  props: {
    isFull: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang='scss'>
@import url('../assets/fonts/Pacifico/setup.css');

.hey-special-logo {

    display: flex;
    align-items: center;
    height: 3em;
    gap: 0.5em;
    text-decoration: none;

  &__type {  
    --gradient-1: hsl(55deg 100% 60%);
    --gradient-5: hsl(0deg 80% 55%);
    font-family: 'Pacifico', cursive;
    background: -webkit-linear-gradient(var(--gradient-1), var(--gradient-5));
    -webkit-background-clip: text;
    -webkit-text-fill-color: hsl(0deg 0% 0% / 0%);
  }

  &__brandmark {
    height: 60%;
  }

}
</style>