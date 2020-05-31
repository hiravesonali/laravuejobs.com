<template>
  <div>
    <div class="relative bg-indigo-800 overflow-hidden">
      <div class="relative pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
        <div class="max-w-screen-xl mx-auto px-4 sm:px-6">
          <nav class="relative flex items-center justify-between sm:h-10 md:justify-center">
            <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
              <div class="flex items-center justify-between w-full md:w-auto">
                <logo />
                <div class="-mr-2 flex items-center md:hidden">
                  <button
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
              <a
                href="#"
                class="py-2 px-3 hover:text-white hover:bg-indigo-600 rounded-md focus:outline-none transition duration-150 ease-in-out"
              >Laravel Jobs</a>
              <a
                href="#"
                class="ml-7 py-2 px-3 hover:text-white hover:bg-indigo-600 rounded-md focus:outline-none transition duration-150 ease-in-out"
              >VueJs Jobs</a>
              <a
                href="#"
                class="ml-5 py-2 px-4 hover:text-white hover:bg-indigo-600 rounded-md focus:outline-none transition duration-150 ease-in-out"
              >About</a>
            </div>
            <div
              class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0"
            >
              <span class="inline-flex rounded-md shadow">
                <button
                  type="button"
                  class="relative inline-flex items-center px-6 py-3 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:shadow-outline-yellow focus:border-yellow-600 active:bg-yellow-400 transition duration-150 ease-in-out"
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
                </button>
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
        <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div class="rounded-lg shadow-md">
            <div class="rounded-lg bg-white shadow-xs overflow-hidden">
              <div class="px-5 pt-4 flex items-center justify-between">
                <div>
                  <logo />
                </div>
                <div class="-mr-2">
                  <button
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
                <a
                  href="#"
                  class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                >Product</a>
                <a
                  href="#"
                  class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                >Features</a>
                <a
                  href="#"
                  class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                >Marketplace</a>
                <a
                  href="#"
                  class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                >Company</a>
              </div>
              <div>
                <a
                  href="#"
                  class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out"
                >Log in</a>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
          <div class="text-center">
            <h2
              class="text-4xl tracking-tight leading-10 font-extrabold text-gray-200 sm:text-4xl sm:leading-none md:text-5xl"
            >
             Boost your career as
              <br class="xl:hidden" />
              <span class="text-green-300">Fullstack Developer</span>
            </h2>
            <p
              class="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
            >Curated list of worldwide jobs for Laravel, VueJs, NuxtJs and TailwindCSS stack. Subscribe here to get regular updates on the job postings.</p>
            <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div class="rounded-md shadow">
                <a
                  href="#"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                >Get started</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
