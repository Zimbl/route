<template>
    <div class="detail">
        123detail  {{this.$route.params.id}} {{this.$route.query.title}}
    </div>
</template>
<style>

</style>
<script>
export default {
    mounted(){
        console.log(this.$route.query.title  ,this)
    }
}
</script>
