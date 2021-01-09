<template>
    <div>
        <Row>
            <i-col :span="3" class="side">
              <!-- 左侧菜单是共享的，每个栏目都用一个，所以用v-if进行区分 -->
              <h2>{{culumnName}}</h2>
              <ul v-if="culumnName === '新闻'">
                <li>
                  <router-link to="/Page/news/asia">今日非洲</router-link>
                </li>
                <li>
                  <router-link to="/Page/news/europe">今日欧洲</router-link>
                </li>
              </ul>
              <ul v-if="culumnName === '音乐'">
                <li :class="{'cur' : smallculumnName == '易烊千玺'}">
                  <router-link to="/Page/music/yyqx">易烊千玺</router-link>
                </li>
                <li>
                  <router-link to="/Page/music/jayzhou">周杰伦</router-link>
                </li>
              </ul>
            </i-col>
            <i-col :span="21">
                面包屑导航：{{mianbaoxie}}
                <router-view></router-view>
            </i-col>
        </Row>
    </div>
</template>

<script>
export default {
  data() {
    return {
      culumnName: '',
      smallculumnName: '',
    };
  },
  created() {
    this.culumnName = this.$router.currentRoute.matched[1].meta.chinese;
    this.smallculumnName = this.$router.currentRoute.matched[2].meta.chinese;
  },
  updated() {
    this.culumnName = this.$router.currentRoute.matched[1].meta.chinese;
    this.smallculumnName = this.$router.currentRoute.matched[2].meta.chinese;
  },
  computed: {
    mianbaoxie() {
      return `首页/${this.culumnName}${this.smallculumnName === undefined ? '' : `/${this.smallculumnName}`}`;
    },
  },
};
</script>

<style lang="less" scoped>
    .side{
        height: 300px;
        background: orange;
    }
    h2{
      padding: 10px 20px;
    }
    ul{
      padding: 10px 20px;
    }
    ul li{
      color:white;
      &.cur{
        background: white;
      }
    }
</style>
