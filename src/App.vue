<script setup>
// import login from '../src/pages/login/login.vue'
 import login from '../src/pages/home/home.vue'
 import aside from '../src/components/aside/aside.vue'


</script>

<template>
  <div>

    <login/>
    <aside/>
    <!-- <RouterLink to="/login">
      login
    </RouterLink>

    <RouterLink to="/cadastrar">
      cadastrar
    </RouterLink> -->

    <RouterView/>
  </div>
</template>


<style scoped>

</style>
