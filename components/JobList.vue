<template>
  <div>
    <div class="max-w-screen-xl mx-auto overflow-hidden sm:rounded-md">
      <ul>
        <job-list-row v-for="job in jobs.data" :key="job.id" />
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      jobs: []
    }
  },
  async fetch () {
    this.jobs = await this.$http.$get('http://api.laravuejobs.test/api/jobs')
    console.log(this.jobs)
  }
}
</script>
