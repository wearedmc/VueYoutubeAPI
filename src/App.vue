<template>
  <div id="app">
    <div class="search__wrapper">
      <search></search>
    </div>
    <div class="video__wrapper">
      <player></player>
    </div>
    <div class="list__wrapper">
      <list></list>
    </div>
  </div>
</template>

<script>
// Start on STEP 7 //

import Search from 'components/Search'
import Player from 'components/Player'
import List from 'components/List'

export default {
  components: { Search, Player, List }
}
</script>

<style lang="scss">
  //reset
  body, html { height: 100%; margin: 0; }

  #app {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    height: 100%;
  }
  .search {
    &__wrapper {
      background: pink;

      min-height: 50px;
      flex: 1 100%;
    }
  }
  .video {
    &__wrapper {
      background: orange;

      flex: 2; // 2/3
      height: calc(100vh - 50px);

      display: flex; //start here
      align-items: center;
      padding: 25px; //end here
    }
  }
  .list {
    &__wrapper {
      background: green; // STEP 3

      flex: 1; // 1/3
      height: calc(100vh - 50px);
      min-width: 300px;
    }
  }

</style>
