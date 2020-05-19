<template>
  <div class="home">
    这里是一个计数器 >>> <span class="red">{{count}}</span> <br>
    <!-- 使用子组件，并传一些值进去 -->
    <MyButton :type="btnType" size="medium" width="300px" @onClick="countAdd">
      点这个按钮上面的数字会变
    </MyButton>
  </div>
</template>
<script>
import { ref } from 'vue'
// 引用我们开发的子组件
import MyButton from '@/components/MyButton.vue'
export default {
  // 注册我们的子组件，这两步操作和 vue 2.0 一致。
  components: { MyButton },
  setup () {
    const count = ref(0)
    // 定义按钮默认 type 为 primary
    const btnType = ref('primary')
    const countAdd = () => {
      count.value++
      // 让按钮 type 在 primary 和 default 之前切换
      const types = ['primary', 'default']
      btnType.value = types[count.value % 2]
    }
    return {
      count,
      btnType,
      countAdd
    }
  }
}
</script>
