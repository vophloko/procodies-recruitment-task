<script setup lang="ts">
const { t } = useI18n()

const faqs = ref(
  Array.from({ length: 3 }).map((_, index) => ({
    question: t(`faqSection.${index}.question`),
    answer: t(`faqSection.${index}.answer`),
  })),
)
</script>

<template>
  <section class="bg-[#F5F5F5] py-6">
    <div class="container grid grid-cols-3 gap-8">
      <article v-for="{ answer, question } in faqs" :key="question">
        <h3 class="text-xs font-semibold mb-1">
          {{ question }}
        </h3>
        <p class="text-2xs">
          {{ answer }}
        </p>
      </article>
    </div>
  </section>
</template>
