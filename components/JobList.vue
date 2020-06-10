<template>
  <div>
    <div class="mt-10 max-w-screen-xl mx-auto overflow-hidden sm:rounded-md">
      <ul>
        <job-list-row v-for="job of jobs.data" :key="job.id" :job="job" />
      </ul>
      <pagination :meta="jobs.meta" :links="jobs.links" @paginate="onPaginate" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      url: 'http://api.laravuejobs.test/api/jobs',
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
