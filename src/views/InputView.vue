<template>
  <h1 class="heading-1">Input</h1>
  <Input
    name="Your name"
    label="Your name"
    :value="nameField"
    type="text"
    placeholder="Input your name"
  />
</template>

<script setup lang="ts">
import Input from '@/components/input/Input.vue'
import { ref } from 'vue'

const nameField = ref('')
</script>

<style scoped></style>
