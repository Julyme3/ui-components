<template>
  <input
    type="radio"
    class="radio"
    :id="value"
    v-model="localState"
    :value="value"
    :name="name"
    :disabled="disabled"
  />
  <label :for="value" class="radio-label">
    <span class="radio-mark"></span>
    {{ label || value }}
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  value: string
  name: string
  modelValue: string
  label?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
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
.radio {
  display: none;

  &-label {
    display: inline-flex;
    gap: 8px;
    align-items: center;
    user-select: none;
    cursor: pointer;
  }

  &-mark {
    position: relative;
    height: 25px;
    width: 25px;
    border: 2px solid var(--grey);
    border-radius: 50%;

    &:after {
      position: absolute;
      display: block;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 60%;
      height: 60%;
      border-radius: 50%;
      background-color: var(--blue);
    }
  }

  &:checked + .radio-label .radio-mark:after {
    content: '';
  }

  &:disabled + .radio-label {
    cursor: not-allowed;
  }

  &:disabled + .radio-label .radio-mark {
    opacity: 0.7;
  }
}
</style>
