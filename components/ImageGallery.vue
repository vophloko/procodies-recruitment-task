<script setup lang="ts">
interface Image {
  id: number
  src: string
  alt: string
  width: string
  height: string
}

const images = ref<Image[]>([
  {
    id: 0,
    src: '0.webp',
    alt: '0',
    width: '1126',
    height: '1126',
  },
  {
    id: 1,
    src: '1.webp',
    alt: '1',
    width: '300',
    height: '300',
  },
  {
    id: 2,
    src: '2.webp',
    alt: '2',
    width: '890',
    height: '890',
  },
  {
    id: 3,
    src: '3.webp',
    alt: '2',
    width: '993',
    height: '978',
  },
])
const selected = ref(images.value[0])
const selectable = computed(() =>
  images.value.filter(image => image.id !== 0),
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
    <div class="flex justify-between flex-nowrap">
      <button
        v-for="img in selectable"
        :key="img.src"
        class="block ring-offset-white rounded-[14px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-1 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
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
