<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { useVModel } from '@vueuse/core'

import { cn } from '@/lib/utils'

const props = defineProps<{
  defaultValue?: string | number
  modelValue?: string | number
  class?: HTMLAttributes['class']
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})
</script>

<template>
  <input
    v-model="modelValue"
    :class="
      cn(
        'flex h-12 w-full transition-colors rounded-[10px] border border-brand-gray-3 bg-white px-4 py-3 ring-offset-white file:border-0 file:bg-transparent placeholder:text-brand-gray-3 text-primary-1 focus-visible:outline-none focus-visible:border-primary-1 focus-visible:placeholder:text-primary-1 disabled:cursor-not-allowed disabled:opacity-50',
        props.class,
      )
    "
  >
</template>
