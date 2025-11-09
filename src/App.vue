<template>
  <HeaderView :title="$t('titles.header_title')" />
  <ContentView />
  <FooterView :title="$t('titles.footer_title')"/>
</template>

<script setup lang="ts">
import HeaderView from './components/HeaderView.vue'
import ContentView from '@/components/ContentView.vue'
import FooterView from './components/FooterView.vue'

</script>

