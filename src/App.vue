<template>
  <div id="app">
    <app-header class="vd-margin-bottom-40">
      {{ $route.name }}
    </app-header>
    <router-view />
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

.text-nowrap {
  white-space: nowrap;
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
      padding: 0 30px;
    }

    &__item--4 {
      flex: 1 1 33%;
      max-width: 33%;
    }

    &:after {
      content: '';
      display: block;
      flex: 1 1 auto;
    }
  }
  
}
</style>
