<template lang="pug">
    a.card( :href="link" :style="{ 'background-image': `url(${ thumbnail.src })` }" target='_blank' )
        .card__header: slot( name='header' )
        .card__footer: slot( name='footer' )
</template>
<script>
export default {
    props: {
        link: {
            type: String,
            default: "/undefined"
        },
        caption: {
            type: String,
            default: "undefined"
        },
        thumbnail: {
            type: Object,
            default: () => ({ src: "/undefined", alt: "undefined" })
        }
    }
}
</script>
<style lang='scss'>
.page#index {
    
    .section {

        .card {

            text-decoration: none;
            width: 11.5em;
            height: 15em;
            margin: 1em;
            overflow: hidden;
            display: inline-flex;
            flex-direction: column;
            border-radius: 0.5em;
            box-shadow: 0px 10px 15px var(--gray-90);
            background-position: center;
            position: relative;
            align-items: center;
            background-size: 120%;
            transition: background-size 0.2s ease-in-out;
            background-repeat: no-repeat;
            background-color: var(--white);

            &:hover {
                
                background-size: 100%;
                
                &:after {

                    opacity: 0.5;

                }

                & > .card__footer {
                    
                    bottom: 1em;

                }

                & > .card__header {
                    
                    top: 1em;

                }

            }

            &__footer, &__header {
                position: absolute;
                width: 90%;
                min-height: 3em;
                z-index: 2;
                border-radius: .5em;
                padding: 0.5em;
                color: var(--black);
                transition: bottom 0.2s ease-in-out;
            }

            &__header {
                top: -100%;
                color: var(--white);
                white-space: break-spaces;
                font-weight: bold;
            }

            &__footer {
                background-color: var(--white);
                bottom: -100%;
            }

            &:after {
                content: "";
                background-color: var(--black);
                width: 100%;
                height: 100%;
                position: absolute;
                opacity: 0;
                transition: opacity 0.2s ease-in-out;
            }

        }

    }

}</style>