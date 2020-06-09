<template>
  <div>

        <div class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
          <div class="text-center">
            <h2
              class="text-2xl tracking-tight leading-10 font-medium text-indigo-600 sm:text-4xl sm:leading-none md:text-5xl"
            >
             {{ job.title }}
            </h2>
            <p
              class="mt-3 max-w-md mx-auto text-base text-gray-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
            >{{ job.company.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    job: [Object]
  }
}
</script>
