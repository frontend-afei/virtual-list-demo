<template>
  <div class="container">
    <my-virtual-scroller :items="list" />
  </div>
</template>

<script>
  import myVirtualScroller from '@/components/myVirtualScroller'
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
      myVirtualScroller
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
