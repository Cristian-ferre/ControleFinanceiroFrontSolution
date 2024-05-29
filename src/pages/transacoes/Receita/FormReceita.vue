<template>

    <!-- Button trigger modal -->
    <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
        </svg>
        Adicionar
    </button>
    <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Adicionar Receita</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
          </div>
          <div class="modal-body">
            <inputDefault
               type="text"
               forName="receitaNomeInput"
               placeholder="Nome da Receita"
               label="Nome">
              <img src="@/assets/img/icons8-asterisk-48.png" width="16" height="16"/>
            </inputDefault>
      
          <inputDefault
                   type="text"
                   forName="receitaDescricaoInput"
                   placeholder="Descrição da Receita"
                   label="Descricao">
            <img src="@/assets/img/icons8-reticências-48.png" width="16" height="16"/>
          </inputDefault>

          <inputDefault
                   type="number"
                   forName="receitaValorInput"
                   placeholder="Valor da receita"
                   label="Valor">
            <img src="@/assets/img/icons8-reticências-48.png" width="16" height="16"/>
          </inputDefault>

          <inputDefault
                   type="date"
                   forName="receitaDataFimInput"
                   placeholder="Valor da receita"
                   label="Data Fim">
            <img src="@/assets/img/icons8-reticências-48.png" width="16" height="16"/>
          </inputDefault>

          <inputDefault
                   type="select"
                   forName="TipoValorInput"
                   placeholder="Valor da receita"
                   label="Tipo">
            <img src="@/assets/img/icons8-reticências-48.png" width="16" height="16"/>
          </inputDefault>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button @click="adicionarReceita()" type="button" class="btn btn-primary">Adicionar</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import inputDefault from '@/components/estruturaInput/input.vue'
import axiosIntance from '@/services/http.js';
import { toast } from 'vue3-toastify';

const formReceita = async _ =>{
  var selectTipo = TipoValorInput
  
  var tiposValor = await axiosIntance.get('/Receita/TipoReceita')
  
  tiposValor.data.forEach((t, index) => 
  {
    let option = document.createElement('option')
    option.setAttribute('value', index)
    option.innerText = t
    selectTipo.appendChild(option)
  })  
}

onMounted(() => {
    formReceita()
})

const adicionarReceita = async _ =>{
  const receitaNome = receitaNomeInput.value
  const receitaDescricao = receitaDescricaoInput.value
  const receitaValor = receitaValorInput.value
  const receitaDataFim = receitaDataFimInput.value

  if(receitaNome == ""){
    toast.error('Informe o nome da receita', {
      containerId: 'A',
            autoClose: 8000,
            onClose: () => {}      
        });
    return
  }

  const data ={
    receitaName: receitaNome, 
    receitaDescricao: receitaDescricao, 
    receitaValor: receitaValor, 
    receitaData: receitaDataFim,
    receitaQuantidadeMeses: 0, 
    tipoValor : 0
  }

  let response = await axiosIntance.post(`/Receita/Adicionar`, 
    data,
    {
      headers:{
        'Authorization' : `Bearer ${localStorage.getItem('token')}`
      }
    }
  )

  console.log(response)
  if(response.status == 200){
    toast.success('Receita incluída  com sucesso', {
      containerId: 'A',
            autoClose: 2000,
            onOpen: () => {
                setTimeout(() =>{
                    document.querySelector('.modal.fade.show').click()
                    document.querySelector('.modal-backdrop.fade.show').style.display = 'none'
                }, 1000)
        }      
        });
  }
}
</script>