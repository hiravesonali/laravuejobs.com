<template>
  <li
    class="border-2 rounded-md bg-white mb-4 shadow-sm border-gray-200 hover:border-green-200 hover:bg-green-100 transition duration-150 ease-in-out"
  >
    <a href="#" class>
      <div class="flex items-center px-3 py-3 sm:px-6">
        <div class="min-w-0 flex-1 flex items-center">
          <div class="flex-shrink-0">
            <img
              class="h-16 w-16 rounded"
              src="https://images.unsplash.com/photo-1572059002053-8cc5ad2f4a38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
              alt
            />
          </div>
          <div class="min-w-0 flex-initial px-4 md:grid md:grid-cols-2 md:gap-4">
            <div>
              <div class="text-xl leading-5 font-medium text-indigo-600 truncate">Job Name</div>
              <div class="mt-2 flex items-center text-medium leading-5 text-gray-500">
                <span class="flex truncate">
                  <svg
                    class="w-5 h-5 mr-1"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>Company name
                </span>
              </div>
            </div>
            <div class="hidden md:block">
              <div>
                <div class="mt-2 flex items-center text-sm leading-5 text-gray-500">
                  <span
                    class="inline-flex items-center px-4 py-1 mr-2 rounded text-medium font-bold leading-5 border-2 border-indigo-700 text-indigo-700"
                  >Laravel</span>
                  <span
                    class="inline-flex items-center px-4 py-1 mr-2 rounded text-medium font-bold leading-5 border-2 border-indigo-700 text-indigo-700"
                  >PHP</span>
                  <span
                    class="inline-flex items-center px-4 py-1 mr-2 rounded text-medium font-bold leading-5 border-2 border-indigo-700 text-indigo-700"
                  >VueJs</span>
                  <span
                    class="inline-flex items-center px-4 py-1 mr-2 rounded text-medium font-bold leading-5 border-2 border-indigo-700 text-indigo-700"
                  >TailwindCSS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="flex items-center text-medium text-gray-800">
            <svg
              class="h-5 w-5 text-green-400 mr-2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
            Remote
          </div>
          <div class="text-sm leading-5 text-gray-500 float-right mt-1">2 days ago</div>
        </div>
      </div>
    </a>
  </li>
</template>
