<template>
  <div class="container">
    <div class="vd-padding-20">
      <nav class="vd-margin-top-large">
        <router-link :to="{name: 'Home'}">Home</router-link>
      </nav>
      <div class="vd-margin-top-large">
        <video width="100%" height="auto" controls>
          <source src="https://dqdl6z7leoa92.cloudfront.net/production/Visual+Domain/68218-76804-65332-142524_1080p.mp4" type="video/mp4">
          <source src="https://dqdl6z7leoa92.cloudfront.net/production/Visual+Domain/68218-76804-65332-142524_1080p.webm" type="video/webm">
          Your browser does not support the video tag.
        </video> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'View'
}
</script>

<style>

</style>
