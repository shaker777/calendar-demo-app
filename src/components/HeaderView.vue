<template>
  <header class="header_content">
    <h2 class="title">{{title}}</h2>
    <div class="date_picker">
      <el-config-provider :locale="locale === 'ru' ? ru : en">
    <el-date-picker
      v-model="store.state.selectedDate"
      type="date"
      :placeholder="$t('titles.date_picker_placeholder')"
      size="default"
    />
      </el-config-provider>
    </div>
    <div class="lang_picker">
      <div class="locale-changer">
        <el-select v-model="$i18n.locale" placeholder="Select" style="width: 60px">
          <el-option v-for="locale in $i18n.availableLocales"
                     :key="`locale-${locale}`"
                     :label="locale"
                     :value="locale">
            {{ locale }}
          </el-option>
        </el-select>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { ElConfigProvider } from 'element-plus'
import ru from 'element-plus/es/locale/lang/ru'
import en from 'element-plus/es/locale/lang/en'
import {useAppStore} from '@/state'
defineProps<{
  title: string
}>()

const { locale } = useI18n()
const store = useAppStore()

</script>

<style scoped lang="scss">
.header_content {
  background: rgb(45, 196, 143);
  color: #fff;
  padding: 1rem;
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-weight: bold;
  color: white;
}

.date_picker {
  margin: auto;
  margin-right: 20px;
}

.lang_picker {
  margin-right: 40px;
}

</style>