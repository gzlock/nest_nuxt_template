<template>
  <div class="container">
    <a-card class="login" title="请登录">
      <a-form :form="form" @submit="submit">
        <a-form-item label="账号">
          <a-input
            v-decorator="['username', { rules: [{ required: true, message: '请输入账号' }] }]"
          />
        </a-form-item>
        <a-form-item label="密码">
          <a-input
            v-decorator="['password', { rules: [{ required: true, message: '请输入密码' }] }]"
          />
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit">登录</a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { Form } from 'ant-design-vue'

  Vue.prototype.$form = Form

  export default Vue.extend({
    name: 'login',
    data () {
      return {
        form: this.$form.createForm(this),
      }
    },
    methods: {
      async submit (e: Event): Promise<void> {
        e.preventDefault()
        const data = await new Promise(resolve => {
          this.form.validateFields((err, values) => {
            resolve(err ? null : values)
          })
        })
        if (!data) return
        await this.$axios.$post('/api/login', data).then(() => {
          window.location.reload()
        }).catch((err) => {
          this.$message.error(err.response?.data?.message ?? '登录失败')
        })
      },
    },
  })
</script>

<style scoped lang="scss">
  .container {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;


    .login {
      width: 300px;
    }
  }
</style>
