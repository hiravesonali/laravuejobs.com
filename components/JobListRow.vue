<template>
  <li class="border rounded-md bg-white mb-4 shadow-sm border-gray-200 hover:border-indigo-400 hover:bg-indigo-100 transition duration-150 ease-in-out">
    <a
      href="#"
      class=""
    >
      <div class="flex items-center px-3 py-3 sm:px-6">
        <div class="min-w-0 flex-1 flex items-center">
          <div class="flex-shrink-0">
            <img
              class="h-16 w-16 rounded"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt
            />
          </div>
          <div class="min-w-0 flex-initial px-4 md:grid md:grid-cols-2 md:gap-4">
            <div>
              <div class="text-xl leading-5 font-medium text-indigo-600 truncate">Job Name</div>
              <div class="mt-2 flex items-center text-medium leading-5 text-gray-500">
                <span class="truncate">Company name</span>
              </div>
            </div>
            <div class="hidden md:block">
              <div>
                <div class="mt-2 flex items-center text-sm leading-5 text-gray-500">
                  <span
                    class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-gray-100 text-gray-800"
                  >Badge</span>
                  <span
                    class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-red-100 text-red-800"
                  >Badge</span>
                  <span
                    class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-orange-100 text-orange-800"
                  >Badge</span>
                  <span
                    class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-yellow-100 text-yellow-800"
                  >Badge</span>
                  <span
                    class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-green-100 text-green-800"
                  >Badge</span>
                </div>
              </div>
            </div>
          </div>
        </div>
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
        <div class="text-sm leading-5 text-gray-900">2 days ago</div>
      </div>
    </a>
  </li>

</template>
