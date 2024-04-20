<script setup>
import asideNav from "@/components/MenuAside.vue"


</script>

<template>
    <div id="structure">
        <asideNav />

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