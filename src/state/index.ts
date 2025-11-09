import type {AppState} from './AppState'
import { defineStore } from 'pinia'
import {reactive} from 'vue'

export const useAppStore = defineStore('appStore', () => {
    const state = reactive<AppState>({
        selectedDate: undefined,
    }) as AppState

    function setDate (value:string): void {
        try {
            const date = new Date(value);
            if (isNaN(date.valueOf())) {
                state.selectedDate = new Date();
            } else {
                state.selectedDate = date;
            }
        } catch (error) {
            console.error("An unexpected error occurred:", error);
            state.selectedDate = new Date();
        }
    }

    return {
        state,
        setDate
    }
})