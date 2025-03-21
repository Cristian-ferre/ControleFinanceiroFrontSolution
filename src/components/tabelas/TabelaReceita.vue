<script setup>
import "@/styles/global.css"
import { ref, onMounted,onUpdated, watch } from 'vue'
import axiosIntance from '@/services/http';
import { useStore } from 'vuex';
let store = useStore();


const props = defineProps({
    data: {
        type: String,
        required: true
    },
  });

watch(() => store.state.atualizar, (novoValor) => {
  console.log("new teste", novoValor)

  if (novoValor) {
    console.log('Componente foi atualizado!');
    // Sua lógica para carregar dados

    carregarDados();
    store.commit('setAtualizar', false);
  }
});
// beforeUnmount(()=>{
// console.log("teste ola")
// });

// Hook onUpdated
onUpdated(() => {
  console.log("testeollapp2222")
  carregarDados();

});

const destroyDataTable = async _ => {
  if ($.fn.DataTable.isDataTable('#receita')) {
    $('#receita').DataTable().destroy()
  }

}

const carregarDados = async _ => {
  console.log("carregarDadosttt")
  // console.log(props.data.ano)
  const ano = props.data.ano;
  const mes = props.data.mes;
  const dia = props.data.dia;
  // let receitas = await axiosIntance.get(`/Receita/ObterTodas?data=2024-06-05 `,
  let receitas = await axiosIntance.get(`/Receita/ObterTodas?data=${ano}-${mes}-${dia}`,


    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }
  )
  const data = receitas.data
  tabela(data)
}
let table = null;
const data = null;
const tabela = async (data) => {
  console.log(data)
  destroyDataTable()

  // Inicializar o DataTable
   table = $('#receita').DataTable({
    lengthMenu: [  100],
    // lengthMenu: [5, 10, 15, 20, 50, 100],
    paging: true,
    searching: true,
    ordering: false,
    language: {
      lengthMenu: '_MENU_ linhas',
      zeroRecords: 'Nenhum comunicado para exibir',
      info: '_PAGE_ de _PAGES_',
      infoEmpty: 'Nenhum comunicado para exibir',
      infoFiltered: '(Filtrando de _MAX_ registros)',
      paginate: {
        next: '<img src="../../assets/img/carregando.gif" alt="">',
        previous: '<img src="icons/arrowLeftOrange.png" alt="">'
      }
    },
    data,
    columns: [
     
      { data: 'receitaName' },
      { data: 'tipoValor' },
      {
        data: 'status'
      },    
      {
        data: 'receitaValor'
      },
      {
        data: 'receitaDataVencimento',
        render: function (data) {
          // Formatar a data
          const date = new Date(data)
          const year = date.getFullYear()
          const month = (date.getMonth() + 1).toString().padStart(2, '0')
          const day = date.getDate().toString().padStart(2, '0')
          return day + '/' + month + '/' + year
        }
      },
      {
        data: 'receitaParcelaId'
      }
    ],
    
  })
}
</script>


<template>
 
     


      
      <table class="container-table">
        <div class="tabelas hiden">
          <div class="tabela">
            <table id="receita" class="display">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Tipo valor</th>
                  <th>Status</th>
                  <th>Valor</th>
                  <th>Data de vencimento</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
              </tbody>
            </table>
          </div>
        </div>
      </table>
 
</template>



<style scoped>
.container-table{
  width: 100%;

  table{
    width: 100% !important;

  }
}
</style>