<template>
  <div
    class="my-button"
    :class="[
        type ? `my-button-type-${type}` : '',
        size ? `my-button-size-${size}` : '',
        disabled ? 'my-button-disabled' : ''
      ]"
    :style="width ? `width: ${width};` : ''"
    @click="handleClick"
    >
    <slot />
  </div>
</template>
<script>
export default {
  name: 'MyButton',
  // 定义 props 入参的数据类型以及默认值，和 vue 2.0 是一致的
  props: {
    type: {
      type: String,
      default: 'default' // default primary
    },
    size: {
      type: String,
      default: 'default' // default medium small mini
    },
    disabled: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: ''
    }
  },
  // 拿 props, 可以从函数入参里面拿
  // emit 可以从第二个参数中展开获取
  setup (props, ctx) {
    const { disabled } = props
    const { emit } = ctx
    // 将点击事件 emit 给父组件
    const handleClick = () => {
      !disabled && emit('onClick')
    }
    return {
      handleClick
    }
  }
}
</script>
<style lang="scss">
.my-button {
  display: inline-block;text-align: center;
  box-sizing: border-box;line-height: 1;
  cursor: pointer;user-select:none;
  border: 1px solid;border-radius: 5px;color: #fff;
  & + & {
    margin-left: 5px;
  }
  &-type {
    &-default {
      border-color: #ddd;background: #f0f0f0;color: #555;
    }
    &-primary {
      border-color: #409eff;background: #409eff;
    }
  }
  &-size {
    &-default {
      padding: 12px 15px;font-size: 16px;
    }
    &-medium {
      padding: 8px 12px;font-size: 14px;
    }
    &-small {
      padding: 5px 8px;font-size: 12px;border-radius: 3px;
    }
    &-mini {
    	padding: 3px 5px;font-size: 12px;border-radius: 3px;
    }
  }
  &-disabled {
    opacity: .7;
  }
  &:hover {
    opacity: .8;
  }
}
</style>
