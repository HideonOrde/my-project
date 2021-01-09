<template>
    <div>
        <ul>
            <li v-for="(item,index) in arr" :key="index">
                <a :href="item.link">
                    {{item.title}}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        { title: '特朗普访问韩国', link: 'aa' },
        { title: '普京访问中国', link: 'bb' },
        { title: '核弹爆炸新加坡', link: 'cc' },
        { title: '新冠病毒肆虐日本', link: 'dd' },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
    ul{
        padding: 20px 40px;
    }
</style>
