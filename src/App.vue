<template>
  <HeaderView :title="$t('titles.header_title')" />
  <RouterView />
  <FooterView :title="$t('titles.footer_title')"/>
</template>

<script setup lang="ts">
import HeaderView from './components/HeaderView.vue'
import FooterView from './components/FooterView.vue'

</script>

