import type {AppState} from './AppState'
import { defineStore } from 'pinia'
import {computed, reactive} from 'vue'

export const useAppStore = defineStore('appStore', () => {
    const state = reactive<AppState>({
        selectedDate: '',
    }) as AppState

    const getSelectedDate = computed((): string | null => state.selectedDate)

    function setSelectedDate (value:string): void {
        console.log('banana: ', value)
        state.selectedDate = value
    }

    return {
        getSelectedDate,
        setSelectedDate
    }
})