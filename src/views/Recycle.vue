<template>
  <div class="container">
    <virtual-recycle-scroller :items="list" />
  </div>
</template>

<script>
  import virtualRecycleScroller from '@/components/virtualRecycleScroller'
  // 模拟一个长列表
  const list = []
  for (let i = 0; i < 10000; i++) {
    list.push({
      id: i,
      label: `virtual-list ${i}`
    })
  }
  export default {
    components: {
      virtualRecycleScroller
    },
    data() {
      return {
        list: list
      }
    }
  }
</script>

<style scoped>
  .container {
    height: 300px;
    border: 1px solid #ccc;
  }
</style>
``
