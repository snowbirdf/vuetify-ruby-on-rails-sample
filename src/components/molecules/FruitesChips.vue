<template>
    <v-layout justify-space-between="">
        <BaseChip
        v-for="(Fruit, i) in displayFruits"
        :key="i"
        :text="Fruit.text"
        >
        </BaseChip>
        <BaseMoreLink v-on:showMore=showMore></BaseMoreLink>
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
        ]
    }),
    computed: {
        displayFruits: function () {
            return this.Fruits.filter((name, index) => {
                var breakpoint = this.$vuetify.breakpoint.name
                if(breakpoint != 'md' && breakpoint != 'sm' && breakpoint != 'xs'){
                    return true
                }

                 if (index > 3) {
                    return false
                }
                return true
            })
        }
    },
    methods: {
        isVisible: function(i) {
            var breakpoint = this.$vuetify.breakpoint.name
            if(breakpoint != 'md' && breakpoint != 'sm' && breakpoint != 'xs'){
                return true
            }
            if (i > 3) {
                return false
            }
            return true
        },
        showMore: function(){
            this.BaseChip.
            alert('showMore!')
        }
    },
    components: { BaseChip, BaseMoreLink }
}
</script>