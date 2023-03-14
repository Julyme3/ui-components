<template>
  <input
    class="checkbox"
    type="checkbox"
    :id="value"
    :name="name"
    :value="value"
    :disabled="disabled"
    v-model="localState"
  />
  <label
    :for="value"
    class="checkbox-label"
    :class="{
      'checkbox-switch': type === CheckboxType.switch
    }"
  >
    <span
      :class="{
        'checkbox-mark': type === CheckboxType.checkbox,
        'checkbox-slider': type === CheckboxType.switch
      }"
    ></span>
    {{ label || value }}
  </label>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
import { CheckboxType } from '@/components/checkbox/types'

interface Props {
  value: string
  disabled?: boolean
  name: string
  modelValue: boolean | string[]
  label?: string
  type?: CheckboxType
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  label: '',
  type: CheckboxType.checkbox
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
  &:checked + .checkbox-label .checkbox-mark {
    box-shadow: 0px 7px 20px rgba(0, 0, 0, 0.07);

    &:after {
      content: '';
    }
  }
  &-mark {
    position: relative;
    height: 24px;
    width: 24px;
    border: 1px solid var(--grey);
    border-radius: 6px;
    background-color: #fff;

    &:after {
      display: block;
      position: absolute;
      left: 8px;
      top: 3px;
      width: 5px;
      height: 10px;
      border: solid var(--blue);
      border-width: 0 3px 3px 0;
      transform: rotate(45deg);
    }
  }

  &:disabled + .checkbox-label .checkbox-mark {
    background-color: var(--grey-dark);
    border-color: var(--grey-dark);
  }
}

.checkbox-slider {
  position: relative;
  display: block;
  width: 48px;
  height: 28px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  cursor: pointer;
  box-shadow: 0px 7px 20px rgba(0, 0, 0, 0.07);
  border-radius: 16px;

  &:after {
    position: absolute;
    content: '';
    display: block;
    height: 24px;
    width: 24px;
    left: 2px;
    bottom: 2px;
    background-color: var(--grey);
    transition: 0.4s;
    border-radius: 50%;
  }
}

.checkbox:checked + .checkbox-switch .checkbox-slider:after {
  background-color: var(--blue);
  transform: translateX(20px);
}
</style>
