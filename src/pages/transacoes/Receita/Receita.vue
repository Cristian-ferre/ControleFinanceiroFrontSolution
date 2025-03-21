<script setup>
import asideNav from "@/components/MenuAside.vue"
import "@/styles/global.css"
import navMeses from "@/components/calendarioNavegacao/NavegacaoMeses.vue"

import formReceita from '@/components/modais/FormAdicionarReceita.vue'
import formDespesa from '@/components/modais/FormAdicionarDespesa.vue'

// import formReceita from './FormReceita.vue'
import tabelaReceita from '@/components/tabelas/TabelaReceita.vue'
import tabelaDespesa from '@/components/tabelas/TabelaDespesa.vue'

import cards from '@/components/resumoFinanceiro/CardsPrincipal.vue'

import { ref, onUpdated, watch } from 'vue';

const selecao = ref('1')
const event = ref('')
const adicionarDespesa = async (event) => {
  event = event
  console.log(event.target.value)
  selecao.value = event.target.value;;
  console.log(selecao)

}

const data = ref('valor');

const acao = async (t) => {


  console.log("entrei");
  console.log(t);
  data.value = t;


}


</script>

<template>
  <div id="structure">

    <asideNav style="display: none !important;" />
    <main id="container-main">
      <div class="container-navegacao-trasacao">
        <div>
          <select @change="adicionarDespesa" id="FormasPagamentoInput" class="form-select"
            aria-label="Default select example">
            <option value="1">Receita</option>
            <option value="2">Despesa</option>
          </select>
        </div>
        <div v-if="selecao === '1'">
          <button data-bs-toggle="modal" data-bs-target="#adicionarReceita">+ Receita</button>
        </div>
        <div v-if="selecao === '2'">
          <button data-bs-toggle="modal" data-bs-target="#adicionarDespesa">+ Despesa</button>
        </div>
      </div>
      <cards />

      <navMeses v-on:customChange="acao($event)" />



      <div v-if="selecao === '1'">
        <tabelaReceita :data="data" />
      </div>


      <div v-if="selecao === '2'">
        <tabelaDespesa />
      </div>

    </main>


    <formReceita></formReceita>
    <formDespesa></formDespesa>
  </div>
</template>


<style scoped>
.container-navegacao-trasacao {
  display: flex;
  justify-content: space-between;
}
</style>