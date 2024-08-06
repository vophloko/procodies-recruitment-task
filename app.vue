<script setup lang="ts">
import { ConfigProvider } from 'radix-vue'
import type { Image } from '@/components/ImageGallery.vue'

const useIdFunction = () => useId()

const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true,
})

const { t } = useI18n()

useLocaleHead({
  title: 'StockX',
  meta: [
    {
      name: 'description',
      content: 'Chance to win a StockX Mystery Box today!',
    },
  ],
})

const images = ref<Image[]>([
  {
    id: 0,
    src: '0.webp',
    alt: t('img.products.0'),
    width: '1126',
    height: '1126',
  },
  {
    id: 1,
    src: '1.webp',
    alt: t('img.products.1'),
    width: '300',
    height: '300',
  },
  {
    id: 2,
    src: '2.webp',
    alt: t('img.products.2'),
    width: '890',
    height: '890',
  },
  {
    id: 3,
    src: '3.webp',
    alt: t('img.products.3'),
    width: '993',
    height: '978',
  },
])
</script>

<template>
  <ConfigProvider :use-id="useIdFunction">
    <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
      <Head>
        <Title>{{ $t("meta.title") }}</Title>
        <Meta name="description" :content="$t('meta.description')" />
        <template v-for="link in head.link" :key="link.id">
          <Link
            :id="link.id"
            :rel="link.rel"
            :href="link.href"
            :hreflang="link.hreflang"
          />
        </template>
        <template v-for="meta in head.meta" :key="meta.id">
          <Meta
            :id="meta.id"
            :property="meta.property"
            :content="meta.content"
          />
        </template>
      </Head>
      <Body>
        <slot />
      </Body>
    </Html>
    <main
      class="mx-auto grid grid-cols-[1fr_auto_1fr] my-4 text-primary-1 whitespace-pre-line"
    >
      <section
        class="container col-start-2 flex flex-auto items-center gap-4 mb-12"
      >
        <div class="relative">
          <PriceLabel
            :data="{
              value: 1.99,
              originalValue: 500,
            }"
            class="absolute -top-4 -right-[5px]"
          />
          <ImageGallery :data="{ images }" class="w-[480px]" />
        </div>
        <div class="text-primary-2 w-full">
          <h1 class="text-5xl font-extrabold mb-2">
            {{ $t("app.title") }}
          </h1>
          <p class="text-xl mb-[23px]">
            {{ $t("app.subtitle") }}
          </p>
          <DetailsForm />
        </div>
      </section>
      <section class="container col-start-2 mb-8">
        <div class="text-center">
          <h2 class="text-4xl font-bold mb-2">
            {{ $t("app.section0.title") }}
          </h2>
          <p class="text-xl font-medium text-primary-3">
            {{ $t("app.section0.subtitle") }}
          </p>
        </div>
      </section>
      <section
        class="container col-start-2 grid grid-cols-2 gap-8 items-center mb-12"
      >
        <NuxtImg
          class="rounded-[30px]"
          src="/img/featured/0.webp"
          alt=""
          width="1120"
          height="1120"
        />
        <div>
          <h2 class="text-4xl font-bold mb-6">
            <i18n-t keypath="app.section1.title.content" scope="global">
              <template #highlighted>
                <span class="text-primary-3">{{
                  $t("app.section1.title.highlighted")
                }}</span>
              </template>
            </i18n-t>
          </h2>
          <div class="space-y-2">
            <p>
              {{ $t("app.section1.content.p0") }}
            </p>
            <p>
              {{ $t("app.section1.content.p1") }}
            </p>
          </div>
        </div>
      </section>
      <section
        class="container col-start-2 grid grid-cols-2 gap-8 items-center mb-12"
      >
        <div>
          <h2 class="text-4xl font-bold mb-6">
            {{ $t("app.section2.title") }}
          </h2>
          <div class="space-y-2">
            <p>
              {{ $t("app.section2.content.p0") }}
            </p>
            <p>
              {{ $t("app.section2.content.p1") }}
            </p>
          </div>
        </div>
        <NuxtImg
          class="rounded-[30px]"
          src="/img/featured/1.webp"
          alt=""
          loading="lazy"
          width="1120"
          height="1120"
        />
      </section>
      <FaqSection class="mb-8 col-start-1 -col-end-1" />
      <section class="container col-start-2">
        <p class="text-xs text-center mb-1">
          {{ $t("app.section3.title") }}
        </p>
        <NuxtImg
          class="max-h-[40px] object-contain mx-auto"
          src="/img/accepted-cards.webp"
          :alt="$t('img.acceptedCards')"
          loading="lazy"
          width="688"
          height="64"
        />
      </section>
    </main>
  </ConfigProvider>
</template>
