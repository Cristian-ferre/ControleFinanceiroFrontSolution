<script setup>

import { useRouter } from "vue-router"
const router = useRouter();

const isActive = (routePath) => {
    console.log("router.currentRoute.value.path:",router.currentRoute.value.path);
    console.log("routePath:", routePath);
    return router.currentRoute.value.path === routePath;
}

</script>


<template>
    <aside class="container-aside">
        <div class="aside-margin">

            <span>
                <span class="perfil">
                    <div>
                        <img src="../../assets/img/cristian.jpeg" alt="">
                    </div>
                    <h2>Cristian Ferreira</h2>
                </span>
                <nav>
                    <ul class="navegacao">
                        <li :class="{ 'active': isActive('/home') }" class="dashboard">
                            <RouterLink to="/home" class="itens ">
                                <i class="fa-solid fa-chart-line"></i>
                                <p>Dashboard</p>
                            </RouterLink>
                        </li>
                        <li :class="{ 'active': isActive('/receita') }">
                            <RouterLink to="/receita" class=" itens">
                                <i class="fa-solid fa-money-bill-transfer"></i>
                                <p>Receitas</p>
                            </RouterLink>
                        </li>
                        
                    </ul>
                </nav>
            </span>


            <span class="sair">

                <RouterLink to="/login" class=" itens">

                    <i class="fa-solid fa-right-from-bracket"></i>
                    <p>Sair</p>
                </RouterLink>

            </span>
        </div>
    </aside>


</template>



<style   scoped >
@import '../../styles/variaveis.css';

a{

    text-decoration: none; /* Remover sublinhado padrão */

}


.container-aside {
    position: fixed;
    background-color: #fff;
    width: 235px;
    height: 100vh;
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
        font-size: 10px;
        font-family: 'Poppins', sans-serif;
        white-space: nowrap;

        img {
            width: 50px;
            height: 50px;
            object-fit: cover;
            border-radius: 20px;
        }

    }

    .navegacao {
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
            

            a{
                
                color: #fff !important;

            }
        }
    }

    .itens {
        display: flex;
        gap: 20px;
        padding: 15px 0;
        margin: 10px 10px;
        color:black;
        font-weight: 500;
    }

    .sair {
        position: relative;
        border-top: 1px solid #e3e9f7;
    }

    .active a {
        color:#FAC628 !important; 
        /* background-color: red  !important; */
    }



}


</style>