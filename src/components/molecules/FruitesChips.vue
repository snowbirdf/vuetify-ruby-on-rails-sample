<template>
    <v-layout justify-space-between="">
        <BaseChip
        v-for="(Fruit, i) in Fruits"
        :key="i"
        :text="Fruit.text"
        >
        </BaseChip>
    </v-layout>
</template>

<script>
import BaseChip from '../atoms/BaseChip';

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
    components: { BaseChip }
}
</script>