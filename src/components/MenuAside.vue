<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const isActive = (routePath) => {
  return router.currentRoute.value.path === routePath;
}

const limparlocalStorage = () => {
  console.log("limpar")
  localStorage.clear()
}

</script>


<template>
  <div id="" class="container-aside ">
    <aside class="">
      <div class="aside-margin">
        <span>
          <span class="perfil">
            <div>
              <img src="../assets/img/cristian.jpeg" alt="">
            </div>
            <h2>Cristian Ferreira</h2>
          </span>
            

          <nav>
            <ul class="navegacao">
              <li :class="{ 'active': isActive('/dashboard') }" class="dashboard">
                <RouterLink to="/dashboard" class="itens ">
                  <i class="fa-solid fa-chart-line"></i>
                  Dashboard
                </RouterLink>
              </li>
              <li :class="{ 'active': isActive('/receita') }">
                <RouterLink to="/transacoes/despesa" class=" itens">
                  <i class="fa-solid fa-money-bill-transfer"></i>
                  transações
                </RouterLink>
              </li>
              <li :class="{ 'active': isActive('/receita') }">
                <RouterLink to="/transacoes/receita" class=" itens">
                  <i style="width: 20px;text-align: center;" class="fas fa-dollar-sign"></i>
                  Receitas
                </RouterLink>
              </li>
            </ul>
          </nav>
        </span>
        <span class="sair">
          <!-- <RouterLink @click="limparlocalStorage()" to="/login" class=" itens">
            <i class="fa-solid fa-right-from-bracket"></i>
            Sair
          </RouterLink> -->

            <!-- Botão para acionar modal -->
            <button class="itens" type="button" data-toggle="modal" data-target="#confirmacao-sair" style="border: 0; background-color: #fff;">
              <i class="fa-solid fa-right-from-bracket"></i>
              Sair            
            </button>
        </span>
      </div>


    </aside>
    <!-- <div id="container-main">
      <RouterView />
    </div> -->
  </div>

  <div id="container-aside-mobile" style="display: none;">
    <ul class="aside-mobile">


      <li :class="{ 'active': isActive('/receita') }">
        <RouterLink to="/transacoes/despesa" class=" itens">

          <!-- <img src="/src/assets/icons/dinheiro.png" /> -->
          <i class="fa-solid fa-money-bill-transfer"></i>

          <p>transacões</p>
        </RouterLink>
      </li>
<!-- 

      <li class="botao-add-mobile" style="display: none;">
        <img src="/src/assets/icons/pra-cima-green.png" alt="">
        <P>Adicionar <strong>Receita</strong></P>
      </li> -->


      <li :class="{ 'active': isActive('/dashboard') }">
        <RouterLink to="/dashboard" class="itens ">

          <i class="fa-solid fa-chart-line"></i>
          <p>Dashboard</p>
        </RouterLink>

      </li>
<!-- 
      <li class="botao-add-mobile" style="display: none;" >
        <img src="/src/assets/icons/pra-cima-red.png" alt="">
        <P>Adicionar <strong>Despesa</strong></P>
      </li> -->

      <li>
        <i class="fa-solid fa-user"></i>
        <p>Perfil</p>
      </li>


    </ul>
  </div>

  <!-- Modal SAIR -->
  <div class="modal fade" id="confirmacao-sair" tabindex="-1" role="dialog"
                aria-labelledby="TituloModalLongoExemplo" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="TituloModalLongoExemplo">Sair</h5>

                        </div>
                        <div class="modal-body">
                            Você tem certeza que deseja sair?
                        </div>
                        <div class="modal-footer">
                            <RouterLink data-dismiss="modal" class="btn btn-primary botao-confirmar" type="button"
                                @click="limparlocalStorage()" to="/login">
                                Sair
                            </RouterLink>
                            <button type="button" class="btn btn-secondary botao-cancelar"
                                data-dismiss="modal">Fechar</button>

                        </div>
                    </div>
                </div>
            </div>

</template>


<style>
.container-aside {
  width: 20%;
  position: fixed;
  background-color: white;
  border-radius: 0 15px 15px 0;

  .aside-margin {
    margin: 10px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
  }

  .perfil {
    display: flex;
    align-items: center;
    gap: 10px;
    /* font-size: 10px; */
    font-family: 'Poppins', sans-serif;

    img {
      width: 50px;
      height: 50px;
      object-fit: cover;
      border-radius: 20px;
    }

    h2 {
      font-size: 20px;
      margin: 0;
    }

  }

  .navegacao {
    padding: 0;

    li {
      list-style: none;
      border-radius: 8px;
    }

    li:hover {
      background-color: #e3e9f7;

    }

    .dashboard {
      /* background-color: #4f46e5 !important; */
      background-color: var(--primary-color) !important;
      z-index: 1000;

      a {

        color: #fff !important;

      }
    }
  }

  .itens {
    display: flex;
    gap: 20px;
    padding: 15px 0;
    margin: 10px 10px;
    color: black;
    font-weight: 500;
    align-items: center;
  }

  .sair {
    position: relative;
    border-top: 1px solid #e3e9f7;
  }

  .active a {
    color: #FAC628 !important;
  }

}

#container-main {
  margin-left: 21%;
  width: 100%;
  height: 100vh;
  border: 1px solid red;
}

#structure {
  display: flex;
  height: 100%;
}

@media screen and (max-width: 820px) {
  .container-aside {
    background-color: red;
    display: none;
  }

  #container-main {
    margin: 0;
    /* width: 100vw;
    padding: 100%; */
  }

  #container-aside-mobile {
    display: block !important;
    background-color: #fff;
    box-shadow: 10px -4px 8px rgba(0, 0, 0, 0.1);


    z-index: 1000;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: auto;

    .aside-mobile {
      display: flex;
      justify-content: space-around;
      margin-bottom: 0;
      padding-left: 0;

      li {
        padding: 10px;
        text-align: center;
        list-style: none;


        p {
          margin: 0;
          color: #000;
        }

      }

      li i, img {
        width: 40px;
        color: #000;

      }

      li img{
        width: 20px;

      }

    }

  }

}

/* @media screen and (max-width: 576px){
.botao-add-mobile{
  display: block !important;
}
} */
</style>