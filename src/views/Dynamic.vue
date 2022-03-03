<template>
  <div class="container">
    <virtual-dynamic-scroller :items="list" />
  </div>
</template>

<script>
  import virtualDynamicScroller from '@/components/virtualDynamicScroller.vue'
  // 模拟一个长列表
  const list = []
  for (let i = 0; i < 10000; i++) {
    list.push({
      id: i,
      label: `virtual-scroller ${i}`
    })
  }
  // 模拟一个内容不同的列表项
  list[2].label = `virtual-scroller 2 前端阿飞 前端阿飞 前端阿飞 前端阿飞 前端阿飞 前端阿飞 前端阿飞
前端阿飞 前端阿飞 前端阿飞 前端阿飞 前端阿飞 前端阿飞 前端阿飞 前端阿飞 前端阿飞 前端阿飞 前端阿飞 
前端阿飞 前端阿飞 前端阿飞 前端阿飞 前端阿飞 前端阿飞 前端阿飞 前端阿飞 前端阿飞 前端阿飞 `
  export default {
    components: {
      virtualDynamicScroller
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
