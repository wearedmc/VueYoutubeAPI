<template>
  <div id="app">
    <div class="search__wrapper"> <!-- Start on STEP 4 -->
      <!-- Search Component --> <!-- Replace with components on STEP 8 -->
      <search></search>
    </div>
    <div class="video__wrapper">
      <!-- Video Component -->
      <player></player>
    </div>
    <div class="list__wrapper">
      <!-- List Component -->
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
  // components: { ES5 equivalent
  //   Search: Search,
  //   Player: Player,
  //   List: List
  // }
}
</script>

<style lang="scss"> // lang="scss" will return an ERROR - make sure to install "npm install sass-loader node-sass --save-dev"

</style>

<!--
  INSTRUCTOR NOTES (Cont'd from main.js)
  2. Reference the balsamiq wires and explain that we will create the html wrappers and format them with flexbox
  3. Open up the wires and identify the search, video and list sections. Point out that the player and description are INSIDE the video wrapper, same with video item
  4. Write the HTML placing comments inside them
  5. Create a components folder, and create 3 files -> Player, List, Search, and ListItem || point out that we will not separate player and description inside of video
  6. Copy the basic scaffolding provided for each file.
  7. Add components to App.vue's scripts then...
  8. Replace the comments with the components generated
  9. End Lesson
-->
