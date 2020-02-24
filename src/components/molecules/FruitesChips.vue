<template>
    <v-layout justify-space-between="">
        <BaseChip
        v-for="(Fruit, i) in Fruits"
        :key="i"
        :text="Fruit.text"
        >
        </BaseChip>
        <BaseMoreLink displayClass="d-none d-md-flex d-lg-none"></BaseMoreLink>
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
    components: { BaseChip, BaseMoreLink }
}
</script>