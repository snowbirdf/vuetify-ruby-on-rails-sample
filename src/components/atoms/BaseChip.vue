<template>
    <v-chip>
        <v-avatar left>
            <v-icon></v-icon>
        </v-avatar>
        {{ text }}
    </v-chip>
</template>
<script>
export default {
    name: 'BaseChip',
    props: text
}
</script>