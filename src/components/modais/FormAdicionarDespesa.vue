<template>


    <div class="modal fade" id="adicionarDespesa" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
      tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalToggleLabel">Adicionar Despesa</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <inputDefault type="text" forName="despesaNomeInput" placeholder="Nome da Despesa" label="Nome">
              <img src="@/assets/img/icons8-asterisk-48.png" width="16" height="16" />
            </inputDefault>
  
            <inputDefault type="text" forName="despesaDescricaoInput" placeholder="Descrição da Despesa"
              label="Descricao">
              <img src="@/assets/img/icons8-reticências-48.png" width="16" height="16" />
            </inputDefault>
  
            <inputDefault type="number" forName="despesaValorInput" placeholder="Valor da Despesa" label="Valor">
              <img src="@/assets/img/icons8-reticências-48.png" width="16" height="16" />
            </inputDefault>
  
            <inputDefault type="date" forName="despesaDataVencimentoInput" placeholder="Valor da despesa"
              label="Data de vencimento">
              <img src="@/assets/img/icons8-reticências-48.png" width="16" height="16" />
            </inputDefault>
  
          </div>
          <div class="modal-footer">
            <button class="btn btn-primary botao-confirmar" data-bs-target="#avancarAdicionardespesa" data-bs-toggle="modal"
              data-bs-dismiss="modal">Avançar</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="avancarAdicionardespesa" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2"
      tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalToggleLabel2">Adicionar Despesa</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <inputDefault type="select" forName="despesaTipoValorInput" placeholder="Valor da receita" label="Tipo">
              <img src="@/assets/img/icons8-reticências-48.png" width="16" height="16" />
            </inputDefault>

            <inputDefault type="number" forName="despesaQuantidadeMesesInput" placeholder="Meses" label="quantidade recorrencia mensal">
            <img src="@/assets/img/icons8-reticências-48.png" width="16" height="16" />
          </inputDefault>

            <inputDefault type="select" forName="CategoriaInput" placeholder="Categoria Despesa" label="Categoria Despesa">
              <img src="@/assets/img/icons8-reticências-48.png" width="16" height="16" />
            </inputDefault>

            
            <inputDefault type="select" forName="FormasPagamentoInput" placeholder="forma de pagamento" label="Formas de pagamento">
              <img src="@/assets/img/icons8-reticências-48.png" width="16" height="16" />
            </inputDefault>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary botao-cancelar" data-bs-dismiss="modal">Cancelar</button>
            <button @click="adicionarDespesa()" type="button" class="btn btn-primary botao-confirmar">Adicionar</button>
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
  
  const formDespesa = async _ => {
    var selectTipo = CategoriaInput
  let categorias = await axiosIntance.get(`/Categoria/ObterTodas`,
      
      {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }
    )
    console.log("categorias ",categorias);

    categorias.data.forEach((t, index) => {
      let option = document.createElement('option')
      option.setAttribute('value', t.categoriaId)
      console.log("categoriaId", t.categoriaId)
      option.innerText = t.categoriaNome
      selectTipo.appendChild(option)
    })


    // let formasPagamento = await axiosIntance.get( '/')
  }
  
  onMounted(() => {
    formDespesa()
  })
  
  const adicionarDespesa = async _ => {
    const despesaNome = despesaNomeInput.value
    const despesaDescricao = despesaDescricaoInput.value
    const despesaValor = despesaValorInput.value
    const despesaDataVencimento = despesaDataVencimentoInput.value
    const tipoValor = parseInt(despesaTipoValorInput.value)
    const categoriaId = parseInt(CategoriaInput.value)
    const formaPagamentoId = parseInt(FormasPagamentoInput.value)
    const despesaQuantidadeMeses = parseInt(despesaQuantidadeMesesInput.value)

  console.log("tipoValor", tipoValor)
    if (despesaNome == "") {
      toast.error('Informe o nome da receita', {
        containerId: 'A',
        autoClose: 400,
        onClose: () => { }
      });
      return
    }
  
    const data = {
      despesaName: despesaNome,
      despesaDescricao: despesaDescricao,
      despesaValor: despesaValor,
      despesaDataVencimento: despesaDataVencimento,
      despesaQuantidadeParcelas: despesaQuantidadeMeses,
      tipoValor: tipoValor,
      categoriaId: categoriaId,
      formaPagamentoId: formaPagamentoId
    }
  
    let response = await axiosIntance.post(`/Despesa/Adicionar`,
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