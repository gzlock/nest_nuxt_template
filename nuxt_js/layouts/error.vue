<template>
  <!--  <div>错误页面，错误码：{{status}}</div>-->
  <login v-if="status === 403"/>
  <div v-else>{{error}}</div>
</template>

<script>
  import Login from '~/components/login'

  export default {
    components: { Login },
    props: ['error'],
    computed: {
      status () {
        return this.error?.statusCode ?? 500
      },
    },
  }
</script>

<style scoped>

</style>
