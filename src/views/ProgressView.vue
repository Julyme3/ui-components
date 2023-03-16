<template>
  <h1 class="heading-1">Progress</h1>
  <h2 class="heading-2">Progress Bar</h2>
  <div class="line-block">
    <ProgressBar :percent="state[ProgressType.bar].percent" max-width="400px" />
    <Button
      label="increase progress"
      @click="increaseProgress(ProgressType.bar)"
      :disabled="state[ProgressType.bar].limitActive"
    />
  </div>
  <h2 class="heading-2">Progress Circle</h2>
  <div class="line-block">
    <ProgressCircle :percent="state[ProgressType.circle].percent" />
    <Button
      label="increase progress"
      @click="increaseProgress(ProgressType.circle)"
      :disabled="state[ProgressType.circle].limitActive"
    />
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { ProgressType } from '@/components/progress/types'
import ProgressBar from '@/components/progress/ProgressBar.vue'
import ProgressCircle from '@/components/progress/ProgressCircle.vue'
import Button from '@/components/button/Button.vue'

const state = reactive({
  [ProgressType.bar]: {
    percent: 0,
    limitActive: false
  },
  [ProgressType.circle]: {
    percent: 0,
    limitActive: false
  }
})

const increaseProgress = (type: ProgressType) => {
  if (state[type].percent >= 100) {
    state[type].limitActive = true

    return
  }

  state[type].percent += 10
}
</script>

<style scoped></style>
