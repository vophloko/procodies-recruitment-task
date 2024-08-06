<script setup lang="ts">
const props = defineProps<Props>()

export interface Image {
  id: number
  src: string
  alt: string
  width: string
  height: string
}

interface Props {
  data: { images: Image[] }
}

const selected = ref(props.data.images[0])
const selectable = computed(() =>
  props.data.images.filter(image => image.id !== 0),
)
</script>

<template>
  <div>
    <NuxtImg
      class="aspect-square mb-4 w-full"
      :src="`/img/products/${selected.src}`"
      :alt="selected.alt"
      :width="selected.width"
      :height="selected.height"
    />
    <div v-if="selectable" class="flex justify-between">
      <button
        v-for="img in selectable"
        :key="img.src"
        class="block ring-offset-white rounded-[14px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-1 focus-visible:ring-offset-2"
        :aria-label="img.alt"
        @click="selected = img"
      >
        <NuxtImg
          class="border border-primary-3 rounded-[14px] h-[132px] w-[132px]"
          :src="`/img/products/${img.src}`"
          :alt="img.alt"
          :width="img.width"
          :height="img.height"
        />
      </button>
    </div>
  </div>
</template>
