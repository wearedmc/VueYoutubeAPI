import Vue from 'vue'
import App from './App'

import VueResource from 'vue-resource' // do this when prompted below
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})

/**
 * INSTRUCTOR NOTES - 15min or longer, make sure to split into separate videos after 10 ~ 12 min
  * Navigate https://developers.google.com/youtube/v3/code_samples/javascript#search_by_keyword
  * Go to player.vue to install the iframe player then come back here
  * Need to get google developer api key https://console.developers.google.com/apis/credentials?project=vue-youtube-api
  * Go ahead on top left create new project and name youtube api or something, go to library and click on youtube data api > enable > credentials > create > get key
  * NPM Install vue-resource and inject as plugin
  * Go to search.js and get vue-resource set up with API key
 */
