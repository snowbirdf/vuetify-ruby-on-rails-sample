<template>
    <a class="d-none d-md-flex d-lg-none" v-on:click=showMore >もっと見る</a>
</template>
<script>
export default {
    name: 'BaseMoreLink',
    methods: {
        showMore: function(){
            this.$emit("showMore")
        }
    }
}
</script>