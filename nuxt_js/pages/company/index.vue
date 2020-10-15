<template>
  <a-card>
    <slot name="title">
      <a-breadcrumb>
        <a-breadcrumb-item><a href="/">首页</a></a-breadcrumb-item>
        <a-breadcrumb-item>公司列表
        </a-breadcrumb-item>
      </a-breadcrumb>
    </slot>
    <a-list :grid="{ gutter: 16, column: 4 }"
            :data-source="rows"
            :loading="loading"
            :pagination="{total:count,current:query.page}"
            :locale="{emptyText:'没有数据'}">
      <a-list-item slot="renderItem" slot-scope="item, index">
        <a-card :title="item.name">
          Card content
        </a-card>
      </a-list-item>
    </a-list>
  </a-card>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    data () {
      return {
        loading: true,
        query: { page: 1 },
        rows: [] as any[],
        count: 0,
      }
    },
    methods: {
      async load () {
        this.loading = true
        const { rows, count } = await this.$axios.$get('/api/company',
          { params: this.query })
        this.rows.push(...rows)
        this.count = count
        this.loading = false
      },
    },
    mounted () {
      this.load()
    },
  })
</script>

<style scoped>

</style>
