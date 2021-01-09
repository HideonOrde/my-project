<template>
    <div>
        <h2>我是欧洲新闻</h2>
        <ul>
            <li v-for="i in 8" :key="i">欧洲疫情日益严峻</li>
        </ul>
    </div>
</template>

<script>
export default {
};
</script>

<style lang="less" scoped>
    h2{
        padding: 10px 20px;
    }
    ul{
        padding: 20px 40px;
    }
</style>
