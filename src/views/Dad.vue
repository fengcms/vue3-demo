<template>
  <Child>
    这些文字将显示在组件默认插槽内
    <template v-slot:footer>
      这里的文字会显示在组件的具名插槽内
    </template>
    <template v-slot:bottom="scope">
      文字右边会有个颜色值 >>> {{scope.color}}
    </template>
    <template v-slot:object="scope">
      文字右边会有多个数据 >>> 名字：{{scope.name}}，年龄：{{scope.old}}
    </template>
  </Child>
</template>
<script>
import Child from '@/components/child.vue'
export default {
  components: { Child }
}
</script>
