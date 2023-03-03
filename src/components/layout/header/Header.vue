<template>
  <header class="header">
    <router-link to="/">UI Kit</router-link>
  </header>
</template>

<script setup></script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  font-weight: bold;
  padding: 0 20px;
  height: 62px;
  z-index: 1;
  background: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
}
</style>
