<template>
  <div>
    <!-- <list-item v-for="video in list" :video="video"></list-item> -->
    List Group
  </div>
</template>

<script>
  import ListItem from './ListItem'
  export default {
    components: { ListItem }
    // components: { 'list-item': ListItem }, // can also write like this but will already default to kebab-case
  }
</script>

<style scoped lang="scss">

</style>
