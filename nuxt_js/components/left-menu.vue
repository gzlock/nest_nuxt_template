<template>
  <a-layout-sider v-model="collapsed" collapsible v-if="admin">
    <div class="logo">{{admin}}</div>
    <a-menu theme="dark"
            :default-selected-keys="['/']"
            mode="inline"
            @click="handleClick">
      <a-menu-item key="/admin">
        <a-icon type="home"/>
        <span>首页</span>
      </a-menu-item>
      <a-menu-item key="/admin/account">
        <a-icon type="team"/>
        <span>后台账号</span>
      </a-menu-item>
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
