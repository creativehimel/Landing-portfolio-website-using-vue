<script setup></script>
<template>
  <section class="relative" id="skills">
    <div class="absolute left-0-0 top-0">
      <img src="../assets/images/left-dots.svg" alt="" />
    </div>
  </section>
  <section id="portfolio" class="max-w-7xl mx-auto md:my-40 px-5">
    <div class="flex flex-col sm:flex-row justify-between items-center gap-5">
      <div class="md:w-2/5 space-y-2 mb-5">
        <div class="relative">
          <svg
            width="99"
            height="42"
            viewBox="0 0 99 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M98.75 21C98.75 23.814 97.4068 26.5164 94.933 28.9976C92.4582 31.4799 88.8647 33.7268 84.4042 35.6191C75.4841 39.4034 63.1438 41.75 49.5 41.75C35.8562 41.75 23.5159 39.4034 14.5959 35.6191C10.1354 33.7268 6.54176 31.4799 4.067 28.9976C1.59324 26.5164 0.25 23.814 0.25 21C0.25 18.186 1.59324 15.4836 4.067 13.0024C6.54176 10.5201 10.1354 8.27324 14.5959 6.3809C23.5159 2.59664 35.8562 0.25 49.5 0.25C63.1438 0.25 75.4841 2.59664 84.4042 6.3809C88.8647 8.27324 92.4582 10.5201 94.933 13.0024C97.4068 15.4836 98.75 18.186 98.75 21Z"
              stroke="#0DB760"
              stroke-width="0.5"
            />
          </svg>
          <h5 class="text-primary pl-5 absolute top-2">Portfolio</h5>
        </div>
        <h1 class="text-5xl font-bold leading-[60px] pr-5 mt-5">
          My Creative Works Latest <span class="text-primary">Projects</span>
        </h1>
        <p class="py-5 md:w-2/3">
          I have selected and mentioned here some of my latest projects to share with you.
        </p>
        <button class="btn bg-primary text-white hover:bg-green-600 py-4 px-">Show More</button>
      </div>
      <div class="w-full pl-16">
        <div class="carousel w-full">
          <div id="item1" class="carousel-item w-2/5">
            <img src="../assets/images/project-1.svg" class="w-full md:h-[512px]" />
          </div>
          <div id="item2" class="carousel-item w-2/5">
            <img src="../assets/images/project-2.svg" class="w-full md:h-[512px]" />
          </div>
          <div id="item3" class="carousel-item w-2/5">
            <img src="../assets/images/project-3.svg" class="w-full md:h-[512px]" />
          </div>
          <div id="item4" class="carousel-item w-2/5">
            <img src="../assets/images/project-1.svg" class="w-full md:h-[512px]" />
          </div>
          <div id="item5" class="carousel-item w-2/5">
            <img src="../assets/images/project-2.svg" class="w-full md:h-[512px]" />
          </div>
          <div id="item6" class="carousel-item w-2/5">
            <img src="../assets/images/project-3.svg" class="w-full md:h-[512px]" />
          </div>
        </div>
        <div class="flex justify-center w-full py-2 gap-2">
          <a href="#item1" class="bg-primary px-2 h-2.5"></a>
          <a href="#item2" class="bg-primary px-2 h-2.5"></a>
          <a href="#item3" class="bg-primary px-2 h-2.5"></a>
          <a href="#item4" class="bg-primary px-2 h-2.5"></a>
          <a href="#item5" class="bg-primary px-2 h-2.5"></a>
          <a href="#item6" class="bg-primary px-2 h-2.5"></a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
