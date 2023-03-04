<template>
  <div v-for="option in options" :key="option">
    <Checkbox v-model="localState" :name="name" :value="option" />
  </div>
</template>

<script setup lang="ts">
import Checkbox from './Checkbox.vue'
import { computed } from 'vue'

interface Props {
  name: string
  options: string[]
  selectedValues: string[]
}
const props = withDefaults(defineProps<Props>(), {
  options: () => [],
  selectedValues: () => []
})
const emit = defineEmits(['update:selectedValues'])

const localState = computed({
  get() {
    return props.selectedValues
  },
  set(value) {
    emit('update:selectedValues', value)
  }
})
</script>

<style scoped></style>
