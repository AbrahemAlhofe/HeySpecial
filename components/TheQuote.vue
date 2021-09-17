<template lang='pug'>
   #quote
    #quote__body
      | (مش عايز، مش حابب، لا، 🤐،😐) .. شوية تعبيرات يومية لمريض التوحد ، عدم رغبة لفعل اي شيء ، عدم رغبة للتحدث مع الناس او الاختلاط معاهم ، انطوائي .. وحيد ! 
      | مرض التوحد هو حالة بتأثر علي كيفية تمييز الشخص للناس اللي حواليه وبتغير طريقة تعامله معاهم .. العلاقات البشرية كابوس بالنسباله ! 
      | وبيأثر علي لغة المريض وسلوكه .. 
      | دا معناه انك لازم تتعاملي معته معاملة خاصة جداً عشان تقدري ذكاءه .. لأنه غالباً بيكون ذكاء خارق ! ، موقع heyspecial هيقدر يعرفك ازاي تعملي كدة عن طريق مجموعة اسألة وأجوبة .. ، لانه مش مجرد طفل عادي .. هو طفل special ♥️
    #quote__sign فريق HeySpecial
</template>

<script>
export default {}
</script>

<style lang='scss'>
@import '@/styles/mixins/screen.scss';
#quote {

    width: 95vw;
    padding: 1em;
    margin: auto;
    margin-top: 2.5em;
    margin-bottom: 4em;
    position: relative;
    background-color: var(--white);
    border-inline: 0.3em solid var(--primary-70);
    border-radius: 10em 0.5em;
    box-shadow: 0px 10px 15px var(--gray-90);
    
    &__body {
        text-align: justify;
        padding: 2em;
    }
    
    &__sign {
        position: absolute;
        font-family: 'Pacifico', 'Cairo';
        left: 1em;
        bottom: 1em;
    }

    @include screen("sm") { width: 75vw }

    @include screen("md") { width: 65vw }

    @include screen("xl") { width: 45vw }

}

</style>