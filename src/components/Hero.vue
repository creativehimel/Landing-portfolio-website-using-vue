<script setup></script>
<template>
  <section class="relative">
    <div class="bg-hero-pattern h-screen bg-no-repeat object-cover"></div>
    <div class="absolute top-14 right-0 left-0">
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse items-center">
          <div class="md:w-1/2">
            <img
              src="../assets/images/profile.svg"
              class="md:w-4/5 rounded-lg lg:ml-28 p-5 mx-auto"
            />
          </div>
          <div class="md:w-1/2 space-y-3 mt-8 md:mt-0">
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
              <h5 class="text-primary pl-5 absolute top-2">Welcome</h5>
            </div>
            <h1 class="text-5xl font-bold md:w-3/4 leading-[60px]">
              I have <span class="text-primary">Creative Design</span> Experience
            </h1>
            <p class="py-6">
              I’m Tanvir, a creative Product Designer. I’ve been helping businesses to solve their
              problems with my design for 2 years.
            </p>
            <div class="space-x-3">
              <button class="btn bg-primary text-white hover:bg-green-600">Contact Me</button>
              <button class="btn btn-ghost">
                View Portfolio<svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.9176 10.6522L24.1715 11.3746M24.1715 11.3746L23.4491 16.6285M24.1715 11.3746L9.82858 22.2503"
                    stroke="#0DB760"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute hidden xl:block md:right-6 top-1/2">
      <div>
        <p class="text-primary rotate-90 mb-5">Follow me on:</p>
        <div class="bg-primary w-[2px] h-20 mx-auto mt-14"></div>
        <div class="w-6 mt-6 mx-auto space-x-1.5">
          <a href="/">
            <img src="../assets/images/facebook.svg" alt="" />
          </a>
          <a href="/">
            <img src="../assets/images/instagram.svg" alt="" />
          </a>
          <a href="/">
            <img src="../assets/images/linkedin.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
