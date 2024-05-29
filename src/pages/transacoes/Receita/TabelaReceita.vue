<template>
    <div id="conteudo">
        <img v-if="receitas.length == 1" id="carregando" src="@/assets/img/carregando.gif" />
    </div>
</template>
<script setup>
import { ref } from 'vue';
import axiosIntance from '../../../services/http.js';

const receitas = ref<Array>([]);

const getReceitas = async _ =>{
    let response = await axiosIntance.get(`/Receita/ObterTodas`,{
      headers:{
        'Authorization' : `Bearer ${localStorage.getItem('token')}`
      }
    }
  )
  response.data.forEach(d => {
      receitas.value.push(d)    

  })
}
getReceitas()

</script>
<style scoped>
#conteudo{
    /* border:1px solid black; */
}
#conteudo #carregando{
    display: block;
    margin:0 auto;
    width: 40px;
    padding-top: 10%;
}
</style>