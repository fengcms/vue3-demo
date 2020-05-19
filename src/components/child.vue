<template>
  <table>
    <tr>
      <th>默认插槽：</th>
      <td><slot /></td>
    </tr>
    <tr>
      <th>具名插槽：</th>
      <td><slot name="footer" /></td>
    </tr>
    <tr>
      <th>传参插槽：</th>
      <td><slot name="bottom" :color="color" /></td>
    </tr>
    <tr>
      <th>传对象参插槽：</th>
      <td><slot name="object" v-bind="{ old, name }" /></td>
    </tr>
    <tr>
      <th>换个语法传参：</th>
      <!-- 这个语法我个人不推荐 -->
      <td><slot name="object" :="{ old, name }" /></td>
    </tr>
  </table>
</template>
<script>
export default {
  setup () {
    return {
      color: 'red',
      old: 34,
      name: 'FungLeo'
    }
  }
}
</script>
