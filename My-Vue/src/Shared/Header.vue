<template>
  <div class="jk-nav">
    <router-link class="jk-nav-item" data-href='Home' to='/'>
        <i class="fas fa-home jk-icon"></i>
    </router-link>
    <router-link class="jk-nav-item" data-href='My hobbies' to='/hobbies'>
        <i class="fas fa-gamepad jk-icon"></i>
    </router-link>
    <router-link class="jk-nav-item" data-href='My Job History' to='/jobs'>
        <i class="fas fa-briefcase jk-icon"></i>
    </router-link>
    <router-link class="jk-nav-item" data-href='What I am Learning' to='/learning'>
        <i class="fas fa-graduation-cap jk-icon"></i>
    </router-link>
    <router-link class="jk-nav-item" data-href='My certifications' to='/certifications'>
        <i class="fas fa-user-check jk-icon"></i>
    </router-link>
    <router-link class="jk-nav-item" data-href='My projetcts' to='/projects'>
        <i class="fas fa-project-diagram jk-icon"></i>
    </router-link>
  </div>
</template>

<script>
</script>

<style>

a:link {
  text-decoration: none;
  color: #42b884;
}

a:visited {
  color: #42b884;
}

a:hover {
  color: #355061;
}

a:active {
  color: #f9a900;
}
</style>
