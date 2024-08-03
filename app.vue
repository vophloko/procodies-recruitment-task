<script setup lang="ts">
const value = ref("dsadsa");
</script>

<template>
  <main class="mx-auto grid grid-cols-[1fr_auto_1fr] my-4 text-primary-1">
    <section class="container col-start-2 flex items-center gap-4 mb-12">
      <div class="relative">
        <PriceLabel class="absolute -top-4 -right-[5px]" />
        <UiGalleria class="w-[480px]" />
      </div>
      <div class="text-primary-2">
        <h1 class="text-3xl font-extrabold mb-2">
          Chance to win a StockX Mystery Box today!
        </h1>
        <p class="text-xl mb-[23px]">
          Unleash the Excitement of Mystery Electronics
        </p>
        <DetailsForm />
      </div>
    </section>
    <section class="container col-start-2 mb-8">
      <div class="text-center">
        <h2 class="text-2xxl font-bold mb-2">
          Top Tech Mystery Box <br />at Unbeatable Prices
        </h2>
        <p class="text-xl font-medium text-primary-3">
          Fast shipping | Easy returns | Special discounts for students
        </p>
      </div>
    </section>
    <section
      class="container col-start-2 grid grid-cols-2 gap-8 items-center mb-12"
    >
      <img class="rounded-[30px]" src="/img/4.png" alt="" />
      <div>
        <h2 class="text-2xxl font-bold mb-6">
          Curious about the <span class="text-primary-3">StockX</span> Mystery
          Box?
        </h2>
        <div class="space-y-2">
          <p>
            Experience the thrill of unboxing cutting-edge gadgets with Stockx
            Mystery Boxes. Each box is a treasure trove of high-quality
            electronics, handpicked to elevate your tech game.
          </p>
          <p>
            Expect the unexpected! Our boxes are packed with the latest gadgets,
            from smartphones to gaming consoles, ensuring you get the best tech
            surprises every time.
          </p>
        </div>
      </div>
    </section>
    <section
      class="container col-start-2 grid grid-cols-2 gap-8 items-center mb-12"
    >
      <div>
        <h2 class="text-2xxl font-bold mb-6">
          Why is everyone buzzing about these boxes?
        </h2>
        <div class="space-y-2">
          <p>
            StockX Mystery Boxes are not just about products; they’re about the
            experience. Imagine the excitement of unveiling top-tier electronics
            at a fraction of the cost.
          </p>
          <p>
            Our boxes include a variety of premium tech items, making it a
            must-have for every tech enthusiast. Join the buzz and see why
            everyone is raving about the unbeatable value and surprise factor of
            Stockx Mystery Boxes!
          </p>
        </div>
      </div>
      <img class="rounded-[30px]" src="/img/5.png" alt="" />
    </section>
    <Faq class="mb-8 col-start-1 -col-end-1" />
    <section class="container col-start-2">
      <p class="text-xs text-center mb-1">
        We accept the following credit cards
      </p>
      <img
        class="max-h-[40px] object-contain mx-auto"
        src="/img/accepted-cards.png"
        alt=""
      />
    </section>
  </main>
</template>
