<script setup lang="ts">
const images = ref([
  {
    src: "0.png",
  },
  {
    src: "1.jpg",
  },
  {
    src: "2.png",
  },
]);
const selectedIndex = ref(0);
const selected = computed(() => images.value[selectedIndex.value]);
</script>

<template>
  <div>
    <img
      class="aspect-square mb-4 w-full"
      :src="`/img/${selected.src}`"
      alt=""
    />
    <div class="flex justify-between flex-nowrap">
      <button
        @click="selectedIndex = index"
        class="block ring-offset-white rounded-[14px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        v-for="(img, index) in images"
        :key="img.src"
      >
        <img
          class="border border-primary-3 rounded-[14px] aspect-square h-[132px]"
          :src="`/img/${img.src}`"
          alt=""
        />
      </button>
    </div>
  </div>
</template>
