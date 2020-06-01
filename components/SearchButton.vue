<template>
  <div class="flex-1 px-20 flex w-full pt-10 pb-5 justify-between">
    <div class="flex-1 flex">
      <div class="w-80 flex md:ml-0">
        <label for="search_field" class="sr-only">Search</label>
        <div class="relative w-full text-gray-700 focus-within:text-gray-600">
          <div class="absolute px-2 inset-y-0 left-0 flex items-center pointer-events-none">
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              />
            </svg>
          </div>
          <input
            id="search_field"
            class="block w-full border-2 border-gray-400 h-full pl-8 pr-3 py-2 rounded-md text-gray-700 placeholder-gray-500 focus:outline focus:placeholder-gray-400 sm:text-sm"
            placeholder="Search"
            type="search..."
          />
        </div>
      </div>
    </div>
  </div>
</template>
