import Vue from 'vue'
import App from './App'

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})

/**
 * INSTRUCTOR NOTES - 5min
  1. Show them the app in the browser and talk a bit about webpack, walk them through the configuration and a little bit about the folder structure + tests (we will cover that more later)
  2. Tell them it's your policy not to use any boilerplate code and delete everything inside the src folder
  3. start with the main.js file and rebuild it, talking about the import statement and creating a new Vue instance like in jsFiddle
  4. Create ./App.vue and copy what is there now (instructor copy) so they see what is the bare minimum and what most templates begin with
  5. Pull up the balsamiq diagram and begin talking about the app we will being to construct (bulk of conversation)
  6. Highlight the major components in the diagram and use that when you create your components inside of ./components/ (dont create them yet, end session)
 */
