<template lang='pug'>
.page#index
  section.section#tests
    h2.section__title التقييمات
    NuxtLink(to="/tools/tests/giliam").item
      img( src='~/assets/images/pages/index/giliam.jpg' ).item__thumbnail
      .item__caption مقياس جيليام لتشخيص التوحدية
</template>
<script>
export default {}
</script> 
<style lang="scss">
.section {

  &__title {
    font-family: "Cairo";
    padding-right: 1em;
    color: var(--black);
  }

  .item {
    text-decoration: none;
    background-color: var(--white);
    width: 20em;
    height: 4.5em;
    display: flex;
    margin: 1em;
    border-radius: 0.5em;
    overflow: hidden;
    gap: 1em;
    box-shadow: 0px 10px 15px var(--gray-95);
    &__thumbnail {
      -webkit-mask-image: -webkit-gradient(linear, right 75%, left bottom, from(var(--white)), to(hsl(0deg 0% 0% / 0%)));
    }
    &__caption {
      font-family: 'Cairo';
      flex-grow: 1;
      display: flex;
      align-items: center;
      color: var(--black);
    }
  }

}
</style>
