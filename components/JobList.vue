<template>
  <div>
    <div class="max-w-screen-xl mx-auto overflow-hidden sm:rounded-md">
      <ul>
        <job-list-row v-for="job of jobs.data" :key="job.id" :job="job" />
      </ul>
      <pagination :meta="jobs.meta" :links="jobs.links" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      jobs: {}
    }
  },
  async fetch () {
    this.jobs = await this.$http.$get('http://api.laravuejobs.test/api/jobs')
  }
}
</script>
