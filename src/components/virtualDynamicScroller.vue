<template>
  <DynamicScroller class="scroller" :items="items" :min-item-size="50">
    <template v-slot="{ item, index, active }">
      <DynamicScrollerItem :item="item" :active="active" :size-dependencies="[item.label]" :data-index="index">
        <div class="desc">{{ item.label }}</div>
      </DynamicScrollerItem>
    </template>
  </DynamicScroller>
  <!-- minItemSize: 列表项初次渲染使用的最小高度-->
  <!-- active: 保持视图，防止不必要的重新计算 -->
  <!-- sizeDependencies: 影响高度的值，如果发生变化，则重新计算 -->
</template>

<script>
  import { DynamicScroller, DynamicScrollerItem } from 'vue-virtual-scroller'
  import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
  export default {
    components: {
      DynamicScroller,
      DynamicScrollerItem
    },
    props: {
      items: Array
    }
  }
</script>

<style scoped>
  .scroller {
    height: 100%;
  }
  .desc {
    padding: 12px;
    text-align: center;
    border: 1px solid #ccc;
  }
</style>
