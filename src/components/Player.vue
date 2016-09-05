<template>
  <div class="video__player">
    <div id="player-iframe"></div>
  </div>
</template>

<script>
// First go to https://developers.google.com/youtube/iframe_api_reference, or navigate there from developers.google.com
// You can get the same stuff from a npm package https://www.npmjs.com/package/youtube-iframe
// NPM install youtube-iframe

import YouTubeIframeLoader from 'youtube-iframe'

export default {
  ready () { // mounted () for 2.0
    YouTubeIframeLoader.load(YT => {
      /*eslint-disable no-new*/
      new YT.Player('player-iframe', {
        height: '360',
        width: '640',
        videoId: 'M7lc1UVf-VE'
      })
    })
  }
}
</script>


<style lang="scss">
// little trick to keep videos in aspect ratio (https://css-tricks.com/NetMag/FluidWidthVideo/Article-FluidWidthVideo.php)
// also need to add a few styles back in App.vue to center the video and add padding
.video__player {
	position: relative;
  padding: 25px;
	padding-bottom: 56.25%; /* 16:9 */
	height: 0;
  width: 100%;
  min-width: 1px;

  #player-iframe {
  	position: absolute;
  	top: 0;
  	left: 0;
  	width: 100%;
  	height: 100%;
  }
}
</style>
