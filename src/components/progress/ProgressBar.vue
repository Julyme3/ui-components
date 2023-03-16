<template>
  <div class="progress-container" :style="[{ 'max-width': maxWidth }]">
    <span class="progress-percent">{{ percent }}%</span>
    <div class="progress">
      <div class="progress-bar" :style="[{ width: `${percent}%` }]"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  maxWidth?: String
  percent: Number
}>()
</script>

<style scoped lang="less">
.progress {
  height: 10px;
  border-radius: 4px;
  background-color: var(--primary-hover);
  &-container {
    margin-bottom: 20px;
    overflow: hidden;
  }
  &-bar {
    background-color: var(--primary);
    height: 100%;
    border-radius: 4px;
    transition: width 0.5s;
  }
  &-percent {
    display: block;
    text-align: center;
    color: var(--primary);
    font-weight: bold;
    font-size: 17px;
    margin-bottom: 10px;
  }
}
</style>
