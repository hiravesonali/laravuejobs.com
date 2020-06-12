<template>
  <div>
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6">
      <nav class="relative flex items-center justify-between sm:h-10 md:justify-center">
        <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
          <div class="flex items-center justify-between w-full md:w-auto">
            <logo />
            <div class="-mr-2 flex items-center md:hidden">
              <button
                @click="showMobileMenu = true"
                type="button"
                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              >
                <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="hidden md:block font-medium text-lg text-gray-200">
          <nuxt-link
            to="/"
            class="py-2 px-3 hover:text-white hover:bg-indigo-600 rounded-md focus:outline-none transition duration-150 ease-in-out"
          >Top Jobs</nuxt-link>
          <nuxt-link
            to="/about"
            class="ml-5 py-2 px-4 hover:text-white hover:bg-indigo-600 rounded-md focus:outline-none transition duration-150 ease-in-out"
          >About</nuxt-link>
        </div>
        <div
          class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0"
        >
          <span class="inline-flex rounded-md shadow">
            <nuxt-link
              to="/post-a-job"
              class="relative inline-flex items-center px-6 py-3 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-green-400 hover:bg-green-500 focus:outline-none transition duration-150 ease-in-out"
            >
              <svg
                class="h-7 w-7 mr-3"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                />
              </svg>
              <span class="font-semibold text-xl">Post a Job</span>
            </nuxt-link>
          </span>
        </div>
      </nav>
    </div>

    <!--
      Mobile menu, show/hide based on menu open state.

      Entering: "duration-150 ease-out"
        From: "opacity-0 scale-95"
        To: "opacity-100 scale-100"
      Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
    -->
    <div v-show="showMobileMenu" class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
      <div class="rounded-lg shadow-md">
        <div class="rounded-lg bg-white shadow-xs overflow-hidden">
          <div class="px-5 pt-4 flex items-center justify-between">
            <div>
              <nuxt-link to="/">
                <img class="h-8 w-auto sm:h-8 justify-center" src="~/assets/images/logo01.png" alt="laravuejobs.com logo" />
              </nuxt-link>
            </div>
            <div class="-mr-2">
              <button
                @click="showMobileMenu = false"
                type="button"
                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              >
                <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="px-2 pt-2 pb-3">
            <nuxt-link
              to="/"
              @click.native="showMobileMenu = false"
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-300 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
            >Top Jobs</nuxt-link>
            <nuxt-link
              to="/about"
              @click.native="showMobileMenu = false"
              class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-300 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
            >About</nuxt-link>
          </div>
          <div>
            <nuxt-link
              to="/post-a-job"
              @click.native="showMobileMenu = false"
              class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-green-100 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out"
            >Post a Job</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      showMobileMenu: false
    }
  }
}
</script>
