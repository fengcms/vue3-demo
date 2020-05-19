<template>
  <div class="home">
    鼠标 x 轴 坐标 >>> <span class="red">{{ x }}</span> <br>
    鼠标 y 轴 坐标 >>> <span class="red">{{ y }}</span> <br>
  </div>
</template>
<script>
// 引用我们开发的子组件
import Position from '@/components/Position.js'
export default {
  setup () {
    // 引用函数子组件并展开它的值
    const { x, y } = Position()
    // 将他的值 return 出去
    return { x, y }
  }
}
</script>
