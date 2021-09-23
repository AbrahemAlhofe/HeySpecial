<template lang="pug">
.game#imitate( :class='`--${status}`')

    .dialog(v-if='status === "idle"')
        h1.dialog__title لعبة التقليد
        .dialog__body
            h2 الهدف
            p هدف اللعبة هو أن يقوم الطفل بتقليد الصور التي تعرض أمامه
            h2 المطلوب
            ol
                li يطلب المدرب أو الأم من الطفل أن يعمل الشيء المراد التدريب عليه باسمه  مثال التصفيق ( فنقول "اعمل كدة . . . اصفق" ثم تقوم بالتصفيق ) 
                li نعطي الطفل مهلة حتي نلاحظ مدى استجابته إذا ما أبدى اي نوع من الاستجابة نبدأ بتقديم المساعدات. نبدأ من المساعدة الجسدية يدك بيده إلي ما تنتهي بإتقان الطفل للمهارة

        vs-button(@click='start' gradient) إبدأ اللعبة

    .slider(v-if='status === "pending"')
        .slide
            img( :src='currentSlide.pathLong' ).slide__image
        .slider__control
            v-button#prev( @click='prev' ) السابق
            button( @click='party' ).slider__button#party 🥳
            v-button#next( @click='next' ) التالي

    .result(v-if='status === "finished"')
        h1 أحسنت
        v-button( @click='start' ) إعادة اللعب


</template>
<script>
import party from 'party-js';

export default {
    data: vm => ({
        images: require.context( '~/assets/images/pages/tools/games/imitate' , true, /\.png$/ ),
        currentSlideIndex: 0,
        status: 'idle'
    }),
    computed : {
        slides () {
            return this.images.keys().map(key => ({ pathLong: this.images(key), pathShort: key }))
        },
        currentSlide () {
            return this.slides[ this.currentSlideIndex ]
        }
    },
    methods: {
        start () {
            this.status = "pending"
        },
        party () {
            party.confetti(this.$el.querySelector('.slider__button#party'), { count: party.variation.range(20, 80) })
        },
        next () {
            if ( this.currentSlideIndex >= this.slides.length - 1 ) return this.finish()
            this.currentSlideIndex += 1
        },
        prev () {
            if ( this.currentSlideIndex <= 0 ) return this.currentSlideIndex = 0
            this.currentSlideIndex -= 1
        },
        finish () {
            this.status = "finished"
            this.currentSlideIndex = 0
        }
    }
}
</script>
<style lang="scss">
.game#imitate {

    min-height: 90vh;

    display: flex;
    justify-content: center;
    align-items: center;

    .dialog {
        width: 30em;
        background-color: var(--white);
        padding: 0.5em;
        border-radius: 0.5em;
        text-align: center;
        box-shadow: 0px 10px 15px var(--gray-90);
        font-family: 'Cairo';
        &__body {
            text-align: justify;
            padding: 0.5em;
        }
        &__title {
            margin: 0;
        }
        .vs-button {
            margin: auto;
        }
    }

    .slide {

        text-align: center;

        &__image {
            width: 20em;
            margin: 1em;
            border-radius: 0.5em;
        }

        &__caption {
            font-family: 'Cairo';            
        }

    }

    .slider {

        &__control {

            display: flex;
            justify-content: space-between;

        }

        &__button {
            background-color: var(--white);
            border: none;
            box-shadow: 0px 10px 15px var(--gray-90);
            border-radius: 0.5em;
            font-size: 1.5em;
            padding: 0.5em;
            cursor: pointer;
        }

    }

}
</style>