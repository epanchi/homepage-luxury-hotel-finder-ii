<script setup lang="ts"></script>

<template>
  <main class="min-h-screen bg-cream">
    <!-- Hero Section: Luxury Hotel Finder -->
    <section class="flex flex-col lg:flex-row min-h-screen">

      <!-- Left: Text Content -->
      <div class="flex-1 flex items-center justify-center bg-cream py-24 lg:py-0 px-6 sm:px-10 lg:px-0">
        <div class="w-full max-w-[612px] lg:max-w-none lg:w-[612px] flex flex-col gap-8 lg:pl-16 xl:pl-24 2xl:pl-32">

          <!-- Headline -->
          <div class="pb-4">
            <h1
              class="font-headline font-normal text-forest leading-[120%] tracking-headline"
              style="font-size: clamp(40px, 5vw, 64px)"
            >
              Luxury Hotel Finder
            </h1>
          </div>

          <!-- Body paragraph -->
          <div class="pl-10 sm:pl-14">
            <p class="font-body text-forest text-[16px] leading-[150%] tracking-body">
              As a PrivateUpgrades Member, our hand-curated 5 Star Luxury Hotels will
              roll out the red carpet for you.
            </p>
          </div>

          <!-- Feature overlines -->
          <div class="pl-10 sm:pl-14 flex flex-col gap-2">
            <p class="font-body font-medium text-forest text-[16px] leading-[150%] tracking-overline uppercase">
              free membership
            </p>
            <p class="font-body font-medium text-forest text-[16px] leading-[150%] tracking-overline uppercase">
              VIP perks
            </p>
            <p class="font-body font-medium text-forest text-[16px] leading-[150%] tracking-overline uppercase">
              Swiss reliability
            </p>
          </div>

          <!-- CTA Button -->
          <div class="pl-10 sm:pl-14 pt-10 sm:pt-14">
            <button
              class="h-16 px-6 bg-forest text-cream font-body font-normal text-[16px] leading-[150%] tracking-button uppercase transition-opacity hover:opacity-90 active:opacity-100 cursor-pointer"
            >
              Discover the best luxury hotels
            </button>
          </div>

        </div>
      </div>

      <!-- Right: Image -->
      <div class="w-full lg:flex-1 h-[50vh] lg:h-auto">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/0fc2c83b1da98730c834607432bdb998122bd90d?width=1563"
          alt="Luxury hotel interior"
          class="w-full h-full object-cover object-center"
        />
      </div>

    </section>
  </main>
</template>

<style scoped></style>
