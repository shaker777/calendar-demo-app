<template>
  <footer class="footer_content">
    <p class="title">{{title}}</p>
  </footer>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<style scoped lang="scss">
.footer_content {
  padding: 01rem;
  width: 100%;
  margin: 0;
  height: 40px;
}
.title {
  font-size: 12px;
}
</style>