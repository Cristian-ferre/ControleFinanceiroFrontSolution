<!-- 
<script setup>
import aside from '../../components/aside/aside.vue'

</script> -->

<script setup>
import asideNav from "@/components/MenuAside.vue"

    // import '@/styles/estilo.css'
    // import Menu from '@/components/Menu/Menu.vue'
</script>

<template>




    <div id="structure" >
        <asideNav/>
        <main id="container-main">
            <div class="structure-page col-md-12 col-lg-12">
                <div class="container-secoes">
                    <div class="secoes secao-saldo  col-md-5 col-lg-5">
                        <div class="secao-img-dl">
                            <img class="secao-img" src="/src/assets/icons/piggy-bank.png" alt="porquinhos">
                            <div>
                                <dl>
                                    <dt>Saldo Atual:</dt>
                                    <dd>R$ 40.000</dd>
                                </dl>
                            </div>
                        </div>
                        <div>
                            <img src="/src/assets/icons/view.png">
                        </div>
                    </div>
                    
                    <div class="secoes col-md-5 col-lg-5">
                        <P>ola</P>
                    </div>
                </div>
                <div>
                    <P>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, ipsam in accusamus eos, non, nihil
                        voluptatem ut deserunt ipsa labore odit quisquam. Ducimus saepe explicabo nulla veritatis
                        tempore quis hic.</P>
                </div>
            </div>

        </main>

        <!-- <div class="" id="container-main">
            <h1>Dashboard</h1>
            <h3 class="teste">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut erat sed risus commodo
                pretium. Curabitur ut varius magna, at faucibus purus. Nullam sit amet tristique leo. Quisque posuere
                imperdiet dolor, et rhoncus augue consequat ut. Nam arcu libero, lobortis euismod sapien eget, mattis ornare
                ligula. Cras eleifend odio vel diam vulputate cursus. Proin fermentum diam nulla, vel aliquet nulla pharetra
                porttitor. Praesent eleifend tempus risus, eu rutrum magna ultrices ac. Suspendisse at lorem velit. Ut eget
                est purus. Pellentesque sodales tellus nec sapien interdum tempus. Praesent semper odio sed maximus egestas.
                Suspendisse mollis pulvinar lectus, quis vehicula eros congue non.
            </h3>
          
        </div> -->
    </div>

</template>

<style scoped>
.structure-page {
    /* background-color: red; */
    padding: 40px 20px;
}

.container-secoes {
    /* background-color: blue; */
    /* width: 100%; */
    display: flex;
    gap: 20px;
    justify-content: center;

    .secoes {
        background-color: #fff;
        border-radius: 8px;

        .secao-img-dl {
            display: flex;
        }


        .secao-img {
            width: 35px;
            height: 35px;

            background-color: gainsboro;
            border-radius: 8px;

        }


    }

    .secao-saldo {
        display: flex;
        justify-content: space-between;
        padding: 20px;
    }
}




</style>