<template>
    <v-layout justify-space-between="">
        <BaseChip
        v-for="(Fruit, i) in displayFruits"
        :key="i"
        :text="Fruit.text"
        >
        </BaseChip>
        <BaseMoreLink v-if=displayShoWMoreLink v-on:showMore=showMore></BaseMoreLink>
    </v-layout>
</template>

<script>
import BaseChip from '../atoms/BaseChip';
import BaseMoreLink from '../atoms/BaseMoreLink'
export default {
    name: 'FruitesChips',
    data: () => ({
        Fruits:[
            {
                text: 'Apple'
            },
            {
                text: 'Strawberry'
            },
            {
                text: 'Orange'
            },
            {
                text: 'Grape'
            },
            {
                text: 'Pear'
            },
            {
                text: 'Banana'
            },
            {
                text: 'Kiwi'
            }
        ],
        hiddenIndex: 3,
        showMoreLink: true
    }),
    computed: {
        displayFruits: function () {
            return this.Fruits.filter((name, index) => {
                var breakpoint = this.$vuetify.breakpoint.name
                if(breakpoint != 'md' && breakpoint != 'sm' && breakpoint != 'xs'){
                    return true
                }

                 if (index > this.hiddenIndex) {
                    return false
                }
                return true
            })
        },
        displayShoWMoreLink: function() {
            return this.showMoreLink
        }
    },
    methods: {
        showMore: function(){
            this.hiddenIndex = this.Fruits.length
            this.showMoreLink = false
        },
    },
    components: { BaseChip, BaseMoreLink }
}
</script>