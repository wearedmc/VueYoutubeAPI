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
  body, html { height: 100%; margin: 0; } // if you wan't to fill the screen you gotta set height to 100% from the html on down

  #app {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start; //move things to the top
    height: 100%;
  }
  .search {
    &__wrapper {
      background: pink; // STEP 3

      min-height: 50px;
      flex: 1 100%; // flex is shorthand for ([flex-grow, flex-shrink], flex-basis). can also write as flex-grow: 1, flex-basis: 100%
    }
  }
  .video {
    &__wrapper {
      background: orange; // STEP 3

      flex: 2; // 2/3
      height: calc(100vh - 50px);
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

<!--
  INSTRUCTOR NOTES (Cont'd from main.js) 10min
  1. This lesson is about using flex. Open up this link and quickly walk the student through flexbox https://css-tricks.com/snippets/css/a-guide-to-flexbox/
  2. If they feel like they are still lacking there is an interactive tutorial they can check out here: http://flexboxfroggy.com/
  3. First we start by creating 1px outlines || color backgrounds for each div then we work on positioning.
  4. Review comp, we are trying to get one solid bar at the top then split the bottom to 2/3 and 1/3 while stretching the bottom half to the end
  5. After you get the correct layout end lesson, next we will position the video player, description and list items using flex and component nesting
-->
