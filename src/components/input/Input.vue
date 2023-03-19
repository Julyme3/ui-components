<template>
  <div class="input-container">
    <input
      :type="type"
      class="input-text"
      :value="value"
      :placeholder="placeholder"
      :name="name"
      :id="name"
    />
    <label v-if="label" :for="name" class="input-label">{{ label }}</label>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  type: String
  label?: String
  value: String
  name: String
  placeholder?: String
}>()
</script>

<style scoped lang="less">
.input {
  &-container {
    margin-bottom: 30px;
    position: relative;
  }
  &-error {
    background: var(--danger);
    border-radius: 7px;
    font-size: 13px;
    color: #fff;
    padding: 5px;
  }
  &-text {
    position: relative;
    padding: 0 10px;
    height: 40px;
    font-size: 15px;
    width: 100%;
    z-index: 1;
    border: 1px solid var(--primary);
    border-radius: 7px;

    &:not(:placeholder-shown) + .input-label {
      z-index: 1;
      opacity: 1;
      top: -20px;
    }

    &:focus + .input-label {
      z-index: 1;
      opacity: 1;
      top: -20px;
    }
  }
  &-label {
    display: block;
    position: absolute;
    top: 20px;
    opacity: 0;
    z-index: -1;
    transition: opaity 0.3s, top 0.3s;
    font-size: 13px;
    color: var(--primary);
    font-weight: bold;
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
