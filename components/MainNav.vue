<template>
  <div>
    <nav class="bg-purple-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-60">
          <div class="flex">
            <div class="-ml-2 mr-2 flex items-center md:hidden">
              <!-- Mobile menu button -->
              <button
                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
                aria-label="Main menu"
                aria-expanded="false"
              >
                <!-- Icon when menu is closed. -->
                <!-- Menu open: "hidden", Menu closed: "block" -->
                <svg class="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <!-- Icon when menu is open. -->
                <!-- Menu open: "block", Menu closed: "hidden" -->
                <svg class="hidden h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div class="flex-shrink-0 flex items-center">
              <img
                class="block lg:hidden h-8 w-auto"
                src="~/assets/images/LaraVueJobs.png"
                alt="Workflow logo"
              />
              <img
                class="hidden lg:block h-8 w-auto"
                src="~/assets/images/LaraVueJobs.png"
                alt="Workflow logo"
              />
            </div>
          </div>
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <span class="rounded-md shadow-sm">
                <button
                  type="button"
                  class="relative inline-flex items-center px-8 py-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-yellow-400 hover:bg-indigo-400 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-600 active:bg-indigo-600 transition duration-150 ease-in-out"
                >
                  <svg class="-ml-1 mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="font-semibold text-xl">Post a Job</span>
                </button>
              </span>
            </div>
            <div class="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
              <a
                href="https://twitter.com/ShonaDesign"
                target="https://twitter.com/ShonaDesign"
                class="ml-6 text-purple-300 hover:text-white"
              >
                <span class="sr-only">Twitter</span>
                <svg fill="currentColor" viewBox="0 0 24 24" class="h-14 w-14">
                  <path
                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                  />
                </svg>
              </a>
              <a
                href="https://github.com/hiravesonali"
                target="_blank"
                class="ml-6 mt-4 text-purple-300 hover:text-white"
              >
                <span class="sr-only">Github</span>
                <svg fill="currentColor" viewBox="0 0 24 24" class="h-15 w-15">
                  <path
                    fill-rule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
