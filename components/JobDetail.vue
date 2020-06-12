<template>
  <div class="mx-auto max-w-screen-xl pt-15">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="mt-5 md:mt-0 md:col-span-2 border-t-8 rounded-md border-green-300">
        <div class="shadow-md sm:rounded-t-md sm:overflow-hidden">
          <div class="px-4 bg-white sm:p-6 sm:pb-2">
            <h2 class="text-2xl font-bold text-gray-700">Job Description</h2>
            <div class="grid gap-6">
              <p class="text-md font-sm text-gray-500" v-html="job.description"></p>
            </div>
          </div>

          <div class="px-4 py-3 bg-indigo-50 text-right sm:px-6 rounded-b-md shadow-md">
            <span class="inline-flex rounded-md shadow-md">
              <a
                target="_blank"
                :href="job.apply_url"
                class="inline-flex justify-center py-2 px-20 border border-transparent text-lg leading-5 font-medium rounded-md text-white bg-indigo-500 hover:bg-green-500 focus:outline-none focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
              >Apply Now</a>
            </span>
          </div>
        </div>

        <div class="inline-flex py-6 text-right">
                  <span class="inline-flex rounded-md shadow-md">
                        <nuxt-link
                          to="/"
                          class="inline-flex py-2 px-7 border border-gray-300 text-lg leading-5 font-medium rounded-md text-gray-900 focus:outline-none focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                        >Back to list</nuxt-link>
                      </span>
            </div>
      </div>

      <div class="mt-5 md:mt-0 md:col-span-1 border-t-8 rounded-md border-green-300">
        <div class="shadow-md sm:rounded-md sm:overflow-hidden">
          <div class="px-4 bg-white text-center sm:p-6">
            <img
              class="h-16 w-16 rounded inline-flex"
              :src="job.company.image ? job.company.image : require('~/assets/images/company-placeholder.png')"
              :alt="job.company.name"
            />
            <div class="text-lg font-medium text-gray-700 pb-1">{{ job.company.name }}</div>
            <div class="inline-flex text-md font-sm text-indigo-600">
              <a  :href="'https://twitter.com/'+ job.company.twitter_handle" class="flex truncate" target="_blank">
                <svg class="h-6 w-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                  />
                </svg>
                {{ job.company.twitter_handle }}
              </a>
            </div>
            <div class="text-lg font-medium text-gray-800 pb-1">
                <a :href="job.company.website" target="_blank">{{ job.company.website }}</a>
            </div>

            <hr class="m-4 mx-16 border-gray-300" />
            <div class="text-lg font-medium text-gray-700 pb-1">Location</div>
            <div class="inline-flex text-md font-sm text-gray-500">
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
                </svg>
              </span>{{ job.location.name }}
            </div>
            <hr class="m-4 mx-16 border-gray-300" />

            <div v-if="job.salary">
              <div class="text-lg font-medium text-gray-700 pb-1">Salary</div>
              <div class="text-md font-sm text-gray-500">{{ job.salary }}</div>
              <hr class="m-4 mx-16 border-gray-300" />
            </div>

            <div v-if="job.type">
              <div class="text-lg font-medium text-gray-700 pb-1">Position type</div>
              <div class="text-md font-sm text-gray-500">{{ job.type }}</div>
              <hr class="m-4 mx-16 border-gray-300" />
            </div>

            <div v-if="job.published">
              <div class="text-lg font-medium text-gray-700 pb-1">Published</div>
              <div class="text-md font-sm text-gray-500">{{ job.published}}</div>
              <hr class="m-4 mx-16 border-gray-300" />
            </div>

            <div v-if="job.tags">
              <div class="mt-2 flex justify-center text-sm leading-5 text-gray-500">
                <span
                  v-for="tag in job.tags"
                  :key="tag.id"
                  class="inline-flex items-center px-4 py-1 mr-2 rounded text-medium font-bold leading-5 border-2 border-indigo-600 text-indigo-600"
                >{{ tag.name.en }}</span>
              </div>
              <hr class="m-4 mx-16 border-gray-300" />
            </div>

            <div class="inline-flex px-2 py-1 text-right sm:px-4 ">
              <span class="inline-flex rounded-md shadow-md">
                <a
                  target="_blank"
                  :href="job.apply_url"
                  class="inline-flex py-2 px-10 border border-transparent text-lg leading-5 font-medium rounded-md text-gray-50 bg-green-400 hover:bg-green-500 focus:outline-none focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                >Apply Now</a>
              </span>
            </div>
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
