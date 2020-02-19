Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@FilaMarek 
Learn Git and GitHub without any code!
Using the Hello World guide, you’ll start a branch, write comments, and open a pull request.


FilaMarek
/
Vue-CV
1
00
 Code Issues 0 Pull requests 0 Actions Projects 1 Wiki Security Insights Settings
Vue-CV/My-Vue/src/Shared/Footer.vue
@FilaMarek FilaMarek Fixed current year
be05dce 5 hours ago
14 lines (12 sloc)  167 Bytes
  
<template>
  <div class="menu">
    <p>&copy; {{ currYear }}</p>
  </div>
</template>

<script>
export default {
  props: ["currYear"]
};
</script>

<style >
</style>
