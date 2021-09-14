<template lang='pug'>
.page#index
  .quote
    .quote__background
    .quote__body
      .quote__corner
      | (مش عايز، مش حابب، لا، 🤐،😐) .. شوية تعبيرات يومية لمريض التوحد ، عدم رغبة لفعل اي شيء ، عدم رغبة للتحدث مع الناس او الاختلاط معاهم ، انطوائي .. وحيد ! 
      | مرض التوحد هو حالة بتأثر علي كيفية تمييز الشخص للناس اللي حواليه وبتغير طريقة تعامله معاهم .. العلاقات البشرية كابوس بالنسباله ! 
      | وبيأثر علي لغة المريض وسلوكه .. 
      | دا معناه انك لازم تتعاملي معته معاملة خاصة جداً عشان تقدري ذكاءه .. لأنه غالباً بيكون ذكاء خارق ! ، موقع heyspecial هيقدر يعرفك ازاي تعملي كدة عن طريق مجموعة اسألة وأجوبة .. ، لانه مش مجرد طفل عادي .. هو طفل special ♥️
    .quote__sign فريق HeySpecial
  .sections
    section.section#tests
      h2.section__title التقييمات
      NuxtLink(to="/tools/tests/giliam").item
        img( src='~/assets/images/pages/index/giliam.jpg' ).item__thumbnail
        .item__caption مقياس جيليام لتشخيص التوحدية
    section.section#games
      h2.section__title الألعاب
      NuxtLink(to="/tools/games/imitate").item
        img( src='~/assets/images/pages/index/imitate-game.jpg' ).item__thumbnail
        .item__caption لعبة التقليد
</template>
<script>
export default {}
</script> 
<style lang="scss">
.quote {
  width: 455px;
  height: 285px;
  padding: 1em;
  margin: auto;
  margin-top: 2.5em;
  margin-bottom: 4em;
  font-family: "Cairo";
  position: relative;
  &__corner {
    shape-outside: ellipse(110px 125px at 32em 20em);
    width: 100%;
    height: 100%;
    float: right;
  }
  &__sign {
    position: absolute;
    font-family: 'Pacifico', 'Cairo';
    left: 40px;
    bottom: -10px;
  }
  &__body {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    text-align: justify;

  }
  &__background {
    background-color: var(--white);
    width: 100%;
    border-right: 0.3em solid var(--primary-70);
    border-radius: 10em 0.5em;
    height: 100%;
    box-shadow: 0px 10px 15px var(--gray-90);
    transform: translate(3em, 2em);
  }
}

.sections {
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
}

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
