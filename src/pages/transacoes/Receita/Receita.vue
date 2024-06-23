<template>
<div id="structure">
  <asideNav />

  <main id="container-main">
    <h1>Receitas</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam aut dolor nemo deleniti voluptatibus ipsam
      quaerat. Natus soluta laboriosam ad, provident libero, quos aliquid impedit minus ratione quidem ipsam illo.
    </p>

    <formReceita></formReceita>
    <br>
    <br>
    <tabelaReceita></tabelaReceita>


    <table>

    </table>
  </main>
</div>



</template>

<script setup>
import asideNav from "@/components/MenuAside.vue"
import axiosIntance from '../../../services/http.js';
import "@/styles/global.css"

import formReceita from './FormReceita.vue'
import tabelaReceita from './TabelaReceita.vue'

</script>