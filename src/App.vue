<template>
  <!-- 菜单 -->
  <ul>
    <li v-for="item in menus">
      <router-link :to="item.link">{{ item.name }}</router-link>
    </li>
  </ul>
  <hr>
  <!-- 路由视图 -->
  <router-view />
</template>
<script>
// 引入 Menu 组件
import Menu from '@/components/Menu.js'

export default {
  setup () {
    // 获取菜单数据并返回
    const menus = Menu()
    return {
      menus
    }
  }
}
</script>
