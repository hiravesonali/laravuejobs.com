<template>
  <nav class="px-4 py-3 flex items-center justify-between sm:px-6">
  <div class="hidden sm:block">
    <p class="text-sm leading-5 text-green-500">
      Showing
      <span class="font-medium">{{ meta.from }}
      </span>
      to
      <span class="font-medium">{{ meta.to }}
      </span>
      of
      <span class="font-medium">{{ meta.total }}
      </span>
      results
    </p>
  </div>
  <div class="flex-1 flex justify-between sm:justify-end">
    <a href="#" class="relative inline-flex items-center px-4 py-2 border-2 border-green-400 text-sm leading-5 font-semibold rounded-md text-green-600 bg-white hover:text-indigo-600 hover:border-indigo-400 transition ease-in-out duration-150">
      Previous
    </a>
    <a href="#" class="ml-3 relative inline-flex items-center px-4 py-2 border-2 border-green-400 text-sm leading-5 font-semibold rounded-md text-green-600 bg-white hover:text-indigo-600 hover:border-indigo-400 transition ease-in-out duration-150">
      Next
    </a>
  </div>
</nav>
</template>

<script>
export default {
  props: {
    links: Object,
    meta: Object
  }
}
</script>
