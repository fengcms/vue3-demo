// 你需要使用到什么生命周期，就引出来什么生命周期
import { onMounted, onUnmounted, reactive, toRefs } from 'vue'

export default () => {
  const position = reactive({
    x: 0,
    y: 0
  })
  const update = page => {
    position.x = page.pageX
    position.y = page.pageY
  }
  onMounted (() => {
    window.addEventListener('mousemove', update)
  })
  onUnmounted (() => {
    window.removeEventListener('mousemove', update)
  })
  return toRefs(position)
}
