<template>
  <div class="wrapper">
  <el-config-provider :locale="locale === 'ru' ? ru : en">
    <el-calendar v-model="value" />
  </el-config-provider>
  </div>
</template>

<script setup lang="ts">

import { useI18n } from 'vue-i18n';
import {ref} from "vue";
import { ElConfigProvider } from 'element-plus'
import ru from 'element-plus/es/locale/lang/ru'
import en from 'element-plus/es/locale/lang/en'
import {useAppStore} from '@/state'

const value = ref(new Date())
const { locale } = useI18n()
const store = useAppStore()

</script>

<style scoped lang="scss">
.wrapper {
  background-color: yellow;
  height: 100%;
  width: 100%;
  position: fixed;
}
</style>