<template>
  <button
    :class="[
      `btn btn-${color}`,
      {
        'btn-rounded': rounded,
        'btn-outlined': outlined,
        'btn-icon': icon,
        'btn-large': size === 'large'
      }
    ]"
    type="button"
    :disabled="disabled"
    @click="onClickBtn"
  >
    <span v-if="icon"><font-awesome-icon :icon="`fa-regular fa-${icon}`" /></span>
    <span v-else>{{ label }}</span>
  </button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { Size } from './types'
interface Props {
  label?: string
  color: string
  disabled?: boolean
  rounded?: boolean
  outlined?: boolean
  icon?: string
  size?: Size
}
const props = withDefaults(defineProps<Props>(), {
  label: 'Button',
  color: 'primary',
  disabled: false,
  rounded: false,
  outlined: false,
  size: Size.normal
})

const emit = defineEmits(['click'])
const onClickBtn = () => {
  emit('click')
}
</script>

<style scoped lang="less">
.btn {
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 0 20px;
  height: 40px;
  color: #fff;
  border-radius: 7px;
  border: none;
  cursor: pointer;
  font-size: 15px;
  transition: 0.2s background-color;

  &-primary {
    background-color: var(--primary);
    border: 1px solid var(--primary);

    &:enabled:hover {
      background-color: var(--primary-hover);
    }
  }

  &-second {
    background-color: var(--second);
    border: 1px solid var(--second);

    &:enabled:hover {
      background-color: var(--second-hover);
    }
  }

  &-success {
    background-color: var(--success);
    border: 1px solid var(--success);

    &:enabled:hover {
      background-color: var(--success-hover);
    }
  }

  &-info {
    background-color: var(--info);
    border: 1px solid var(--info);

    &:enabled:hover {
      background-color: var(--info-hover);
    }
  }

  &-warning {
    background-color: var(--warning);
    border: 1px solid var(--warning);

    &:enabled:hover {
      background-color: var(--warning-hover);
    }
  }

  &-danger {
    background-color: var(--danger);
    border: 1px solid var(--danger);

    &:enabled:hover {
      background-color: var(--danger-hover);
    }
  }

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }

  &-rounded {
    border-radius: 15px;
  }
  &-outlined {
    background: transparent;
    color: #000;
    &:hover {
      color: #fff;
    }
  }
  &-icon {
    padding: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  &-large {
    height: 48px;
    padding: 0 30px;
  }
}
</style>
