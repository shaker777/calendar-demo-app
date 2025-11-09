<template>
  <CalendarView date-string-value="2025-11-27" />
</template>

<script setup lang="ts">
import CalendarView from '@/components/CalendarView.vue'
import {watch} from "vue";
import {useAppStore} from '@/state'
import { useI18n } from 'vue-i18n';
import { ElNotification } from 'element-plus'

const store = useAppStore()

const { locale } = useI18n()

const dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};

function showNotification () {
  const loc:any = locale;
  ElNotification({
    title: store.state.selectedDate.toLocaleDateString(loc.value, dateOptions),
    duration: 1000,
    position: 'bottom-right'
  })
}

watch(() => store.state.selectedDate, (newValue, oldValue) => {
  if (oldValue !== undefined) {
    showNotification();
  }
});

</script>
