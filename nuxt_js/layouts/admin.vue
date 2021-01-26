<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <left-menu></left-menu>
    <a-layout>
      <a-layout-content style="margin: 16px 16px 0 16px">
        <Nuxt/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
  import LeftMenu from '~/components/left-menu'

  export default {
    components: { LeftMenu },
  }
</script>
