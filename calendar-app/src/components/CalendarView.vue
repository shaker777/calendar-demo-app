<template>
  <div class="main_content">
  <el-config-provider :locale="locale === 'ru' ? ru : en">
    <el-calendar v-model="store.state.selectedDate"/>
  </el-config-provider>
  </div>
</template>

<script setup lang="ts">

import { useI18n } from 'vue-i18n';
import {onMounted, ref} from "vue";
import { ElConfigProvider } from 'element-plus'
import ru from 'element-plus/es/locale/lang/ru'
import en from 'element-plus/es/locale/lang/en'
import {useAppStore} from '@/state'

const props = defineProps({
  dateStringValue: String
})

const { locale } = useI18n()
const store = useAppStore()

onMounted(()=> {
  if (props['dateStringValue']) {
    store.setDate(props['dateStringValue']);
  }
})

</script>

<style scoped lang="scss">
.main_content {
  width: 70%;
  margin: auto;
}
</style>