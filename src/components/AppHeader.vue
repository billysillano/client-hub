<template>
  <div class="main-header vd-border-darker-grey vd-box-shadow vd-text-align-center">
    <h1 class="vd-h3 vd-padding-large">
		<slot />
    </h1>
  </div>
</template>

<script>
export default {
	name: "AppHeader"
}
</script>