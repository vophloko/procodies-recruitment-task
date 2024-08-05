<script setup lang="ts">
const images = ref([
  {
    src: '0.webp',
    alt: '0',
    width: '1126',
    height: '1126',
  },
  {
    src: '1.webp',
    alt: '1',
    width: '300',
    height: '300',
  },
  {
    src: '2.webp',
    alt: '2',
    width: '890',
    height: '890',
  },
])
const selectedIndex = ref(0)
const selected = computed(() => images.value[selectedIndex.value])
</script>

<template>
  <div>
    <NuxtImg
      class="aspect-square mb-4 w-full"
      :src="`/img/${selected.src}`"
      :alt="selected.alt"
      preload
      :width="selected.width"
      :height="selected.height"
    />
    <div class="flex justify-between flex-nowrap">
      <button
        v-for="(img, index) in images"
        :key="img.src"
        class="block ring-offset-white rounded-[14px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-1 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        :aria-label="img.alt"
        @click="selectedIndex = index"
      >
        <NuxtImg
          class="border border-primary-3 rounded-[14px] aspect-square h-[132px]"
          :src="`/img/${img.src}`"
          :alt="img.alt"
          :width="img.width"
          :height="img.height"
        />
      </button>
    </div>
  </div>
</template>
