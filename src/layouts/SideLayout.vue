<template>
  <div>
    <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
            <Menu :active-name="$store.state.routerStore.Samllc_e" theme="light" width="auto"
            v-if="$store.state.routerStore.Bigc_c == '订单'"
            @on-select="selectHan">
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-navigate"></Icon>
                        订单栏目
                    </template>
                    <MenuItem name="allorder">全部订单</MenuItem>
                    <MenuItem name="newsorder">新建订单</MenuItem>
                    <MenuItem name="delorder">订单回收站</MenuItem>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-analytics"></Icon>
                        系统
                    </template>
                </Submenu>
            </Menu>
            <Menu :active-name="$store.state.routerStore.Samllc_e" theme="light" width="auto"
            v-if="$store.state.routerStore.Bigc_c == '财务'"
            @on-select="selectHan">
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-navigate"></Icon>
                        财务
                    </template>
                    <MenuItem name="finance-index">财务概览</MenuItem>
                    <MenuItem name="finance-analysis">财务分析</MenuItem>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-analytics"></Icon>
                        系统
                    </template>
                </Submenu>
            </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
            <Breadcrumb :style="{margin: '24px 0'}">
                <BreadcrumbItem :to="{ name: 'pageindex'}">
                  首页
                </BreadcrumbItem>
                <BreadcrumbItem :to="{ name: $store.state.routerStore.Bigc_e}">
                  {{$store.state.routerStore.Bigc_c}}
                </BreadcrumbItem>
                <BreadcrumbItem :to="{ name: $store.state.routerStore.Samllc_e}">
                  {{$store.state.routerStore.Samllc_c}}
                </BreadcrumbItem>
            </Breadcrumb>
            <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                <router-view></router-view>
            </Content>
        </Layout>
    </Layout>
  </div>
</template>

<script>
export default {
  methods: {
    selectHan(name) {
      this.$router.push({
        name,
      });
    },
  },
};
</script>

<style lang="less" scoped>
  .ivu-icon-ios-arrow-down:before{
    content: '';
  }
</style>
