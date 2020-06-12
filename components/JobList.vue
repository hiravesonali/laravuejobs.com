<template>
  <div class="mt-10 max-w-screen-xl mx-auto overflow-hidden sm:rounded-md">
    <div v-if="$fetchState.pending">
    <content-placeholders
          v-for="p in 10"
          :key="p"
          rounded
          class="article-card-block"
        >
          <content-placeholders-text :lines="3" />
        </content-placeholders>
    </div>
    <div v-else>
      <ul>
        <job-list-row v-for="job of jobs.data" :key="job.id" :job="job" />
      </ul>
      <!--pagination :meta="jobs.meta" :links="jobs.links" @paginate="onPaginate" /-->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      url: process.env.apiBaseUrl + 'jobs',
      jobs: {}
    }
  },
  async fetch () {
    this.jobs = await this.$http.$get(this.url)
  },
  methods: {
    onPaginate (direction) {
      if (direction === 'Next') {
        this.url = this.jobs.links.next
      } else {
        this.url = this.jobs.links.prev
      }
      this.$fetch()
    }
  }
}
</script>
