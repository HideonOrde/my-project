<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1"
                @on-select="selectHan">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <MenuItem name="pageindex">
                            <Icon type="ios-navigate"></Icon>
                            首页
                        </MenuItem>
                        <MenuItem name="orderindex">
                            <Icon type="ios-keypad"></Icon>
                            订单
                        </MenuItem>
                        <MenuItem name="finance">
                            <Icon type="ios-analytics"></Icon>
                            财务
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Layout>
                <router-view></router-view>
            </Layout>
        </Layout>
    </div>
</template>

<script>
export default {
  methods: {
    selectHan(name) {
      // console.log(name);
      this.$router.push({
        name,
      });
    },
  },
};
</script>

<style lang="less" scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
        margin-right: 20px;
    }
    .ivu-menu-dark.ivu-menu-horizontal .ivu-menu-item-active{
      background: gold;
      color: red;
    }
    .ivu-menu-horizontal{
      line-height: 64px;
    }
    i .ivu-icon-ios-arrow-down:before{
    content: '';
    }
</style>
