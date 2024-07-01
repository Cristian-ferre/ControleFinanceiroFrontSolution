<template>


  <div class="modal fade" id="adicionarReceita" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
    tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalToggleLabel">Adicionar Receita</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <inputDefault type="text" forName="receitaNomeInput" placeholder="Nome da Receita" label="Nome">
            <img src="@/assets/img/icons8-asterisk-48.png" width="16" height="16" />
          </inputDefault>

          <inputDefault type="text" forName="receitaDescricaoInput" placeholder="Descrição da Receita"
            label="Descricao">
            <img src="@/assets/img/icons8-reticências-48.png" width="16" height="16" />
          </inputDefault>

          <inputDefault type="number" forName="receitaValorInput" placeholder="Valor da receita" label="Valor">
            <img src="@/assets/img/icons8-reticências-48.png" width="16" height="16" />
          </inputDefault>

       

          <inputDefault type="select" forName="TipoValorInput" placeholder="Valor da receita" label="Tipo">
            <img src="@/assets/img/icons8-reticências-48.png" width="16" height="16" />
          </inputDefault>


        </div>
        <div class="modal-footer">
          <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal"
            data-bs-dismiss="modal">Avançar</button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2"
    tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalToggleLabel2">Adicionar Receita</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <inputDefault type="date" forName="receitaDataVencimentoInput" placeholder="Valor da receita"
            label="Data de vencimento">
            <img src="@/assets/img/icons8-reticências-48.png" width="16" height="16" />
          </inputDefault>

          <inputDefault type="number" forName="receitaQuantidadeMesesInput" placeholder="Meses" label="quantidade recorrencia mensal">
            <img src="@/assets/img/icons8-reticências-48.png" width="16" height="16" />
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
import { ref, onMounted } from 'vue'
import inputDefault from '@/components/estruturaInput/input.vue'
import axiosIntance from '@/services/http.js';
import { toast } from 'vue3-toastify';

// const formReceita = async _ => {
//   var selectTipo = TipoValorInput

//   var tiposValor = await axiosIntance.get('/Receita/TipoReceita')

//   tiposValor.data.forEach((t, index) => {
//     let option = document.createElement('option')
//     option.setAttribute('value', index)
//     option.innerText = t
//     selectTipo.appendChild(option)
//   })
// }

// onMounted(() => {
//   formReceita()
// })

const adicionarReceita = async _ => {
  const receitaNome = receitaNomeInput.value
  const receitaDescricao = receitaDescricaoInput.value
  const receitaValor = receitaValorInput.value
  const receitaDataVencimento = receitaDataVencimentoInput.value
  const tipoValor = parseInt(TipoValorInput.value)
  const receitaQuantidadeMeses = parseInt(receitaQuantidadeMesesInput.value)

  console.log("TipoValorInput", tipoValor )

  if (receitaNome == "") {
    toast.error('Informe o nome da receita', {
      containerId: 'A',
      autoClose: 400,
      onClose: () => { }
    });
    return
  }

  const data = {
    receitaName: receitaNome,
    receitaDescricao: receitaDescricao,
    receitaValor: receitaValor,
    receitaDataVencimento: receitaDataVencimento,
    receitaQuantidadeMeses: receitaQuantidadeMeses,
    tipoValor: tipoValor
  }

  let response = await axiosIntance.post(`/Receita/Adicionar`,
    data,
    {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }
  )

  console.log(response)
  if (response.status == 200) {
    toast.success('Receita incluída  com sucesso', {
      containerId: 'A',
      autoClose: 400,
      onOpen: () => {
        setTimeout(() => {
          document.querySelector('.modal.fade.show').click()
          document.querySelector('.modal-backdrop.fade.show').style.display = 'none'
        }, 1000)
      }
    });
  }
}
</script>