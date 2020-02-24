<template>
    <v-layout justify-space-between="">
        <BaseChip
        v-for="(Fruit, i) in Fruits"
        :key="i"
        :text="Fruit.text"
        :class=isVisible(i)
        >
        </BaseChip>
        <BaseMoreLink></BaseMoreLink>
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
    methods: {
        isVisible: function(i) {
            var breakpoint = this.$vuetify.breakpoint.name
            if(breakpoint != 'md' && breakpoint != 'sm' && breakpoint != 'xs'){
                return 'd-flex'
            }
            if (i > 3) {
                return 'd-none'
            }
            return 'd-flex'
        }
    },
    components: { BaseChip, BaseMoreLink }
}
</script>