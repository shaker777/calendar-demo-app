<template>
  <footer id="footer">
    <p class="title">{{title}}</p>
  </footer>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<style scoped lang="scss">
#footer {
  background: dimgray;
  color: #fff;
  padding: 01rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  margin: 0;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.title {
  font-size: 12px;
}
</style>