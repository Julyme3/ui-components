<template>
  <label class="checkbox-label">
    <input
      class="checkbox"
      type="checkbox"
      :name="name"
      :id="id"
      :value="value"
      :disabled="disabled"
      v-model="localState"
    />
    <span class="checkbox-mark"></span>
    {{ label }}
  </label>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'

interface Props {
  id: string
  value: string
  disabled?: boolean
  name: string
  modelValue: boolean
  label?: string
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  label: ''
})

const emit = defineEmits(['update:modelValue'])

const localState = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>

<style scoped lang="less">
.checkbox {
  display: none;
  &-label {
    display: inline-flex;
    gap: 8px;
    align-items: center;
    user-select: none;
  }
  &:checked + .checkbox-mark:after {
    content: '';
  }
  &-mark {
    position: relative;
    height: 24px;
    width: 24px;
    border: 1px solid #adb5bd;
    border-radius: 6px;
    background-color: #fff;

    &:after {
      display: block;
      position: absolute;
      left: 8px;
      top: 3px;
      width: 5px;
      height: 10px;
      border: solid #6979f8;
      border-width: 0 3px 3px 0;
      transform: rotate(45deg);
    }
  }

  &:disabled + .checkbox-mark {
    background-color: #e9ecef;
  }
}
</style>
