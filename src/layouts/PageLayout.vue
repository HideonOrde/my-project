<template>
    <div>
        <header>
            <ul>
                <li>
                    <!-- router-link 可以实现跳转，也就是能够翻译成a标签 -->
                    <router-link to="/Page/news">新闻</router-link>
                </li>
                <li>
                    <router-link to="/Page/music">音乐</router-link>
                </li>
            </ul>
        </header>
        <main>
            <router-view></router-view>
        </main>
        <footer></footer>
    </div>
</template>

<script>
export default {
};
</script>

<style lang="less" scoped>
    header{
        width: 100%;
        height: 60px;
        background: #333;
    }
    header ul{
        float: right;
    }
    header ul li{
        float: left;
        width: 100px;
        line-height: 60px;
        color: white;
    }
    footer{
        width: 100%;
        height: 60px;
        background: rgb(146, 145, 145);
    }
    main{
        height: 300px;
    }
</style>
