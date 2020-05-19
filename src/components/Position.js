// 函数式组件， 该组件会返回鼠标在屏幕上的坐标值
// toFefs 是将 reactive 对象的所有 key 都转化为 ref 值
// 这样，在引入使用的组件中，就可以 用 const { x, y } = xx 来使用这些 key 对应的 value 了
import { onMounted, onUnmounted, reactive, toRefs } from 'vue'

// 这里导出，就不是对象，而是一个函数了。
export default () => {
  // 定义一个准备导出的对象数据
  const position = reactive({
    x: 0,
    y: 0
  })
  // 定义一个会改变数据的函数
  const update = page => {
    position.x = page.pageX
    position.y = page.pageY
  }
  // 使用生命周期，绑定和移除事件
  onMounted (() => {
    window.addEventListener('mousemove', update)
  })
  onUnmounted (() => {
    window.removeEventListener('mousemove', update)
  })
  // 将 reactive 对象 转化为 ref 响应式的值，并返回
  return toRefs(position)
}
