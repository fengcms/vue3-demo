<template>
  <dl>
    <dt>{{state.name}}</dt>
    <dd>性别：{{state.sex}}</dd>
    <dd>地址：{{state.address}}</dd>
  </dl>
  <button @click="addressChange">更新地址</button>
</template>
<script>
// reactive 是 vue 3.0 的一个重大变化，其作用为创建响应式的对象或数组
import { reactive } from 'vue'
// 导出依然是个对象，不过对象中只有一个 setup 函数
export default {
  setup () {
    // 定义一个 state 的响应式对象数据，并赋值
    const state = reactive({
      name: 'FungLeo',
      sex: 'boy',
      address: '上海'
    })
    console.log(state)
    // 定义一个函数，修改 state 的值。
    const addressChange = () => {
      state.address += '浦东'
    }
    // 导出一些内容给上面的模板区域使用
    return {
      state,
      addressChange
    }
  }
}
</script>
