<template>
  <div id="app">
    <app-header>Header</app-header>
    <router-view/>
  </div>
</template>
<script>
import AppHeader from '@/components/AppHeader'

export default {
  components: {
    AppHeader
  }  
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

* {
  box-sizing: border-box;
  &:not([class*="vd-margin-"]) {
    margin: 0;
  }

  &:not([class*="vd-padding-"]) {
    padding: 0;
  }
}

body {
  font-family: "Lato", sans-serif;
}

.container {
  margin: 0 auto;
}

.grid {
  &__item {
    padding: 30px 0;
  }
}

@media (min-width: 768px) {
  
.container {
  max-width: 1024px;
}

.grid {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 -30px;
  
  &__item {
    flex: 1 1 auto;
    padding: 0 30px;
  }

  &__item--4 {
		max-width: 33%;
  }
}
  
}
</style>
