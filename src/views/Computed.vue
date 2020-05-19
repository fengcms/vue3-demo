<template>
  <div class="home">
    这里是一个计数器 >>> <span class="red">{{count}}</span> <br>
    右边的数字是上面的数字的十倍 >>> <span class="red">{{bigCount}}</span> <br>
    右边的数字是上面的数字的一百倍 >>> <span class="red">{{computeCount['100x']}}</span> <br>
    右边的数字是上面的数字的一千倍 >>> <span class="red">{{computeCount['1000x']}}</span> <br>
    <button @click="countAdd">点这个按钮上面的数字会变</button>
  </div>
</template>

<script>
// 需要使用计算属性，也需要从 vue 中导出引入
import { ref, computed } from 'vue'
// 导出依然是个对象，不过对象中只有一个 setup 函数
export default {
  setup () {
    // 定义一个 count 的响应式数据，并赋值为 0
    const count = ref(0)
    // 定义一个函数，修改 count 的值。
    const countAdd = () => {
      count.value++
    }
    // 计算属性，使用计算函数并命名，然后在 return 中导出即可
    const bigCount = computed(() => {
      return count.value * 10
    })
    // 计算多个属性，可以通过返回一个对象的方式来实现
    const computeCount = computed(() => {
      return {
        '100x': count.value * 100,
        '1000x': count.value * 1000,
      }
    })
    // 导出一些内容给上面的模板区域使用
    return {
      count,
      countAdd,
      bigCount,
      computeCount
    }
  }
}
</script>
