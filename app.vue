<script setup lang="ts">
const value = ref("dsadsa");
</script>

<template>
  <main class="mx-auto my-4 container text-primary-1">
    <section class="flex items-center gap-4 mb-12">
      <div class="bg-gray-200 w-[300px] h-[600px] relative">
        <PriceLabel class="absolute top-0 right-0" />
      </div>
      <div class="text-primary-2">
        <h1 class="text-3xl font-extrabold mb-2">
          Chance to win a StockX Mystery Box today!
        </h1>
        <p class="text-xl mb-[23px]">
          Unleash the Excitement of Mystery Electronics
        </p>
        <div
          class="rounded-[20px] border border-brand-gray-1 p-6 flex flex-col gap-6"
        >
          <h3 class="text-xxl font-medium text-primary-1 text-center">
            Enter details
          </h3>

          <div class="bg-gray-200 h-[300px]"></div>
          <button
            class="bg-primary-3 rounded-[10px] px-4 py-3 uppercase font-semibold text-white"
          >
            Proceed to payment
          </button>
          <div class="flex gap-4 mx-auto h-[40px]">
            <img
              class="object-contain w-[93.33px]"
              src="~/assets/img/_1.png"
              alt=""
            />
            <img
              class="object-contain w-[93.33px]"
              src="~/assets/img/_2.png"
              alt=""
            />
            <img
              class="object-contain w-[93.33px]"
              src="~/assets/img/_3.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
    <section class="mb-8">
      <div class="text-center">
        <h2 class="text-2xxl font-bold mb-2">
          Top Tech Mystery Box <br />at Unbeatable Prices
        </h2>
        <p class="text-xl font-medium text-primary-3">
          Fast shipping | Easy returns | Special discounts for students
        </p>
      </div>
    </section>
    <section class="grid grid-cols-2 gap-8 items-center mb-12">
      <img src="~/assets/img/4.png" alt="" />
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
    <section class="grid grid-cols-2 gap-8 items-center mb-12">
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
      <img src="~/assets/img/5.png" alt="" />
    </section>
    <Faq class="mb-8" />
    <section>
      <p class="text-xs text-center mb-1">
        We accept the following credit cards
      </p>
      <img
        class="max-h-[40px] object-contain mx-auto"
        src="~/assets/img/accepted-cards.png"
        alt=""
      />
    </section>
  </main>
</template>
