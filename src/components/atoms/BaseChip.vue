<template>
    <v-chip>
        <v-avatar left>
            <v-icon>mdi-plus-thick</v-icon>
        </v-avatar>
        {{ text }}
    </v-chip>
</template>
<script>
export default {
    name: 'BaseChip',
    props:{ text: String}
}
</script>