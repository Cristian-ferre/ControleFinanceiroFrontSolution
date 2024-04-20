<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const isActive = (routePath) => {
  console.log("router.currentRoute.value.path:", router.currentRoute.value.path);
  console.log("routePath:", routePath);
  return router.currentRoute.value.path === routePath;
}

const limparlocalStorage = ()=>{
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

            </ul>
          </nav>
        </span>
        <span class="sair">
          <RouterLink @click="limparlocalStorage()" to="/login" class=" itens">
            <i class="fa-solid fa-right-from-bracket"></i>
            Sair
          </RouterLink>
        </span>
      </div>
    </aside>
    <!-- <div id="container-main">
      <RouterView />
    </div> -->
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

    h2{
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
      background-color: #4f46e5 !important;
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
}

#structure {
  display: flex;
  height: 100%;
}
</style>