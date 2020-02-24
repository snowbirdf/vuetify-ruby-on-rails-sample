<template>
    <a :class="displayClass">もっと見る</a>
</template>
<script>
export default {
    name: 'BaseMoreLink',
    props: { displayClass: String}
}
</script>