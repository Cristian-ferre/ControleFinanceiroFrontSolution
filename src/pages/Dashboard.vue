<script setup>
import asideNav from "@/components/MenuAside.vue";
import navMeses from '@/components/calendarioNavegacao/NavegacaoMeses.vue';
</script>

<template>
    <div id="structure">
        <asideNav />
        <main id="container-main">
            <div class="structure-page col-md-12 col-lg-12">
                <div class="container-primeira-secao">
                    <div class="secao secao-saldo  col-md-5 col-lg-5">
                        <div class="secao-img-dl">
                            <div class="secao-img">
                                <img src="/src/assets/icons/piggy-bank.png" alt="porquinhos">

                            </div>
                            <div>
                                <dl>
                                    <dt>Saldo Atual:</dt>
                                    <!-- <dd>R$ 40.000</dd> -->
                                    <dd v-if="saldoAtual == null">R$ 0,00</dd>
                                    <dd ifelse>{{ saldoAtual }}</dd>

                                </dl>
                            </div>
                        </div>
                        <div>
                            <img src="/src/assets/icons/view.png">
                        </div>
                    </div>

                    <div class="secao secao-img botao-add col-md-2 col-lg-2">
                        <img src="/src/assets/icons/pra-cima-green.png" alt="">
                        <P>Adicionar <strong>Receita</strong></P>
                    </div>
                    <div class="secao secao-img botao-add col-md-2 col-lg-2">
                        <img src="/src/assets/icons/pra-cima-red.png" alt="">

                        <P>Adicionar <strong>Despesa</strong></P>
                    </div>
                </div>
                <navMeses />

                <div class="container-segunda-secao">
                    <div class=" t  col-md-3">
                        1
                    </div>
                    <div class="t  col-md-3">
                        2
                    </div>
                    <div class="t col-md-3">
                        3
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<style scoped>
dl,
dd,
p {
    margin: 0;
    padding: 0;
    text-align: center !important;
}

.secao-img {
    background-color: gainsboro;
    border-radius: 8px;
    padding: 10px;

    img {
        width: 35px;
        height: 35px;
    }
}

.botao-add {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.container-primeira-secao {
    /* border: 1px solid red;; */
    display: flex;
    gap: 20px;
    justify-content: center;

    .secao {
        background-color: #fff;
        border-radius: 8px;
        padding: 10px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        /* Sombra: horizontal, vertical, desfoque, cor */
        height: 75px;
        max-height: 90px;

        .secao-img-dl {
            display: flex;
            align-items: center;
            gap: 20px;
        }
    }

    .secao-saldo {
        display: flex;
        justify-content: space-between;

        align-items: center;

        img {
            cursor: pointer;
        }
    }
}

.container-segunda-secao {
    /* border: 1px solid blue; */
    display: flex;
    /* gap: 10px; */
    justify-content: center;

    div {
        margin: 10px;
    }
}

.t {
    background-color: #fff;
}
</style>