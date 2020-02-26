<template>
    <v-chip small v-on:click="chipClick">
        <v-icon left small>mdi-plus-thick</v-icon>
        {{ text }}
    </v-chip>
</template>
<script>
export default {
    name: 'BaseChip',
    methods:{
        chipClick: function() {
        this.$emit("chipClick")
      },
    },
    props:{ text: String}
}
</script>