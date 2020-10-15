<template>
  <a-layout-sider v-model="collapsed" collapsible v-if="admin">
    <div class="logo">{{admin}}</div>
    <a-menu theme="dark"
            :default-selected-keys="['/']"
            mode="inline"
            @click="handleClick"
    >
      <a-menu-item key="/">
        <a-icon type="home"/>
        <span>首页</span>
      </a-menu-item>
      <a-menu-item key="/company">
        <a-icon type="solution"/>
        <span>公司主体账号</span>
      </a-menu-item>
      <a-menu-item key="/project">
        <a-icon type="project"/>
        <span>项目情况</span>
      </a-menu-item>
      <a-menu-item key="/account">
        <a-icon type="team"/>
        <span>后台账号</span>
      </a-menu-item>
      <!--      <a-sub-menu key="sub1">
              <span slot="title"><a-icon type="user"/><span>User</span></span>
              <a-menu-item key="3">
                Tom
              </a-menu-item>
              <a-menu-item key="4">
                Bill
              </a-menu-item>
              <a-menu-item key="5">
                Alex
              </a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub2">
              <span slot="title"><a-icon type="team"/><span>Team</span></span>
              <a-menu-item key="6">
                Team 1
              </a-menu-item>
              <a-menu-item key="8">
                Team 2
              </a-menu-item>
            </a-sub-menu>
            <a-menu-item key="9">
              <a-icon type="file"/>
              <span>File</span>
            </a-menu-item>-->
    </a-menu>
  </a-layout-sider>
</template>

<script>
  export default {
    name: 'left-menu',
    data () {
      return {
        collapsed: false,
      }
    },
    methods: {
      handleClick ({ key }) {
        console.log('click', key)
        this.$router.push(key)
      },
    },
    computed: {
      admin () {
        return this.$store.state.admin
      },
    },
  }
</script>

<style scoped>
  .logo {
    visibility: visible;
    height: 32px;
    margin: 16px;
    color: white;
  }

  @media (max-width: 500px) {
    .logo {
      visibility: hidden;
    }
  }
</style>
