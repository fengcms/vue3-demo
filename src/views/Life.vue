<template>
  <div class="home">
    这里是一个计数器 >>> <span class="red">{{count}}</span> <br>
    <button @click="countAdd">点击加数字</button>
  </div>
</template>
<script>
// 你需要使用到什么生命周期，就引出来什么生命周期
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  ref
} from 'vue'

export default {
  // setup 函数，就相当于 vue 2.0 中的 created
  setup () {
    const count = ref(0)
    // 其他的生命周期都写在这里
    onBeforeMount (() => {
      count.value++
      console.log('onBeforeMount', count.value)
    })
    onMounted (() => {
      count.value++
      console.log('onMounted', count.value)
    })
    // 注意，onBeforeUpdate 和 onUpdated 里面不要修改值，会死循环的哦！
    onBeforeUpdate (() => {
      console.log('onBeforeUpdate', count.value)
    })
    onUpdated (() => {
      console.log('onUpdated', count.value)
    })
    onBeforeUnmount (() => {
      count.value++
      console.log('onBeforeUnmount', count.value)
    })
    onUnmounted (() => {
      count.value++
      console.log('onUnmounted', count.value)
    })
    // 定义一个函数，修改 count 的值。
    const countAdd = () => {
      count.value++
    }
    return {
      count,
      countAdd
    }
  }
}
</script>
