<template>
  <div>
    <div v-if="$fetchState.pending">
      <content-placeholders
          v-for="p in 10"
          :key="p"
          rounded
        >
          <content-placeholders-text :lines="3" />
        </content-placeholders>
      </div>
      <div v-else>
      <job-description-header :job="job.data" />
      <job-detail :job="job.data" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      job: {}
    }
  },
  async fetch () {
    await this.$http.$get(process.env.apiBaseUrl + 'jobs/' + this.$route.params.slug)
      .then((result) => {
        this.job = result
      })
  }
}
</script>
