<script setup lang="ts">
interface Props {
  data: {
    value: number
    originalValue: number
  }
}

defineProps<Props>()
</script>

<template>
  <div
    class="rounded-full aspect-square bg-primary-3 text-white flex justify-center items-center shadow-[0px_20px_30px_0px_#00000026] max-w-max p-5"
  >
    <div class="text-center">
      <span class="block font-bold text-3xl mb-2">{{
        $n(data.value, "currency")
      }}</span>
      <span class="block text-sm">{{
        $t("priceLabel.originalValue", [
          $n(data.originalValue, "currency", {
            maximumFractionDigits: 0,
          }),
        ])
      }}</span>
    </div>
  </div>
</template>
