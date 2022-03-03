<template>
  <RecycleScroller class="scroller" :items="items" :item-size="50" key-field="id" v-slot="{ item }">
    <div class="desc">
      {{ item.label }}
    </div>
  </RecycleScroller>
  <!-- items: 需要渲染的列表，itemSize: 列表项的高度，keyField: 列表循环的key值 -->
</template>

<script>
  import { RecycleScroller } from 'vue-virtual-scroller'
  import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
  export default {
    components: {
      RecycleScroller
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
    height: 50px;
    line-height: 50px;
    text-align: center;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }
</style>
