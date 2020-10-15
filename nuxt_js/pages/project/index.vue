<template>
  <a-list :grid="{ gutter: 16, column: 4 }" :data-source="list">
    <a-list-item slot="renderItem" slot-scope="item, index">
      <a-card :title="item.name">
        Card content
      </a-card>
    </a-list-item>
  </a-list>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { Context } from '@nuxt/types'

  export default Vue.extend({
    data () {
      return {
        list: [],
      }
    },
    async asyncData (ctx: Context): Promise<object | void> {
      ctx.route.query
      await ctx.$axios.$get('/api/project', { params: ctx.route.query })
    },
  })
</script>

<style scoped>

</style>
