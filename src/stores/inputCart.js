import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useInputCartStore = defineStore('inputCart', () => {

  const inputValue = ref(0)


  return { inputValue, }
})
