<script setup>
import asideNav from "@/components/MenuAside.vue";
import navMeses from '@/components/calendarioNavegacao/NavegacaoMeses.vue';
import formReceita from '../components/modais/FormAdicionarReceita.vue'
import formDespesa from '../components/modais/FormAdicionarDespesa.vue'

</script>

<template>
    <div id="structure">
        <asideNav />
        <main id="container-main">
            <div class="structure-page col-12 col-sm-12 col-md-12 col-lg-12">
                <div class="container-primeira-secao">
                    <div class="secao secao-saldo col-11  col-sm-5 col-md-5 col-lg-5">
                        <div class="secao-img-dl">
                            <div class="secao-img b-saldo-atual">
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

                    <button class="secao secao-img botao-add col-4  col-sm-2 col-md-2 col-lg-2" data-bs-toggle="modal"
                        data-bs-target="#adicionarReceita">
                        <img src="/src/assets/icons/pra-cima-green.png" alt="">
                        <P>Adicionar <strong>Receita</strong></P>
                    </button>
                    <button class="secao secao-img botao-add col-4  col-sm-2 col-md-2 col-lg-2" data-bs-toggle="modal"
                        data-bs-target="#adicionarDespesa">
                        <img src="/src/assets/icons/pra-cima-red.png" alt="">
                        <P>Adicionar <strong>Despesa</strong></P>
                    </button>


                    <!-- Button trigger modal adicionarDespesa-->
                    <!-- <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus"
                    viewBox="0 0 16 16">
                    <path
                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                </svg>
                Adicionar
            </button> -->

                </div>
                <navMeses />

                <div class="container-segunda-secao">
                    <div class=" secao t col-5  col-sm-3 col-md-3">
                        <div class="secao-img b-total-receitas">
                            <img src="/src/assets/icons/dollar.png" alt="porquinhos">

                        </div>
                        <div>
                            <dl>
                                <dt>Receitas Recebidas:</dt>
                                <!-- <dd>R$ 40.000</dd> -->
                                <dd v-if="saldoAtual == null">R$ 0,00</dd>
                                <dd ifelse>{{ saldoAtual }}</dd>

                            </dl>
                        </div>
                    </div>
                    <div class=" secao t col-5 col-sm-3 col-md-3">
                        <div class="secao-img b-total-despesas">
                            <img src="/src/assets/icons/dollar.png" alt="porquinhos">

                        </div>
                        <div>
                            <dl>
                                <dt>Total Despesas:</dt>
                                <!-- <dd>R$ 40.000</dd> -->
                                <dd v-if="saldoAtual == null">R$ 0,00</dd>
                                <dd ifelse>{{ saldoAtual }}</dd>

                            </dl>
                        </div>
                    </div>
                    <div class=" secao t col-11 col-sm-3 col-md-3">
                        <div class="secao-img b-total-despesas">
                            <img src="/src/assets/icons/check.png" alt="porquinhos">

                        </div>
                        <div>
                            <dl>
                                <dt>A Pagar:</dt>
                                <!-- <dd>R$ 40.000</dd> -->
                                <dd v-if="saldoAtual == null">R$ 0,00</dd>
                                <dd ifelse>{{ saldoAtual }}</dd>

                            </dl>
                        </div>
                    </div>
                </div>
                <div class="container-segunda-secao container-terceira-secao">
                    <div class=" secao-proximas  ">
                        <h2>Proximas despesas</h2>
                        <div class="container-proxima-despesas">
                            <div class="img-descricao">
                                <div class="container-img">
                                    <img class="img" src="/src/assets/icons/dinheiro.png" alt="porquinhos">
                                </div>
                                <div class="descricao">
                                    <div>
                                        <div class="nome">
                                            <p>Cartão visa </p>
                                        </div>
                                        <p>Variavel</p>
                                    </div>
                                    <div>
                                        <div class="status-pagamento  nao-pago">
                                            <p>Não pago</p>
                                        </div>
                                        <div class="valor-despesas">
                                            <p>R$ 675,89</p>
                                        </div>

                                    </div>
                                    <div>
                                        <p>categoria</p>
                                        <p>10 de junho</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="container-proxima-despesas">
                            <div class="img-descricao">
                                <div class="container-img">
                                    <img class="img" src="/src/assets/icons/dinheiro.png" alt="porquinhos">
                                </div>
                                <div class="descricao">
                                    <div>
                                        <div class="nome">
                                            <p>Cartão visa </p>
                                        </div>
                                        <p>Variavel</p>
                                    </div>
                                    <div>
                                        <div class="status-pagamento  pago">
                                            <p>pago</p>
                                        </div>
                                        <div class="valor-despesas">
                                            <p>R$ 675,89</p>
                                        </div>

                                    </div>
                                    <div>
                                        <p>categoria</p>
                                        <p>10 de junho</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div class=" secao-proximas">
                        <h2>Proximas receitas</h2>
                        <div class="container-proxima-despesas">
                            <div class="img-descricao">
                                <div class="container-img">
                                    <img class="img" src="/src/assets/icons/dinheiro.png" alt="porquinhos">
                                </div>
                                <div class="descricao">
                                    <div>
                                        <p>Salario Bussiness</p>
                                        <p>Fixo</p>
                                    </div>
                                    <div>
                                        <div class="status-pagamento  nao-pago">
                                            <p>Não recebido</p>
                                        </div>
                                        <div class="valor-receitas">

                                            <p>R$ 5.670,00</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p></p>
                                        <p>5 de junho</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="container-proxima-despesas">
                            <div class="img-descricao">
                                <div class="container-img">
                                    <img class="img" src="/src/assets/icons/dinheiro.png" alt="porquinhos">
                                </div>
                                <div class="descricao">
                                    <div>
                                        <p>Salario Bussiness</p>
                                        <p>Fixo</p>
                                    </div>
                                    <div>
                                        <div class="status-pagamento  pago">
                                            <p>Recebido</p>
                                        </div>
                                        <div class="valor-receitas">

                                            <p>R$ 5.670,00</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p></p>
                                        <p>5 de junho</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <!-- Modal -->
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
                            <RouterLink data-dismiss="modal" class="btn btn-primary btn-confimacao-sair " type="button"
                                @click="limparlocalStorage()" to="/login">
                                Sair
                            </RouterLink>
                            <button type="button" class="btn btn-secondary btn-confimacao-fechar"
                                data-dismiss="modal">Fechar</button>

                        </div>
                    </div>
                </div>
            </div>

            <formReceita></formReceita>
            <formDespesa></formDespesa>




        </main>
    </div>


</template>

<style scoped>
dl,
dd,
p {
    margin: 0;
    padding: 0;
    color: #000;
}




.secao-img {
    background-color: gainsboro;
    border-radius: 8px;
    padding: 10px;

    img {
        width: 35px;
        height: 35px;
    }

    p {
        text-align: center !important;
        margin: 0;
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


.secao {
    background-color: #fff;
    border-radius: 8px;
    padding: 12px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    height: 80px;
    max-height: 90px;
    display: flex;
    align-items: center;

    .secao-img-dl {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    dl {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
}


.container-primeira-secao {
    display: flex;
    gap: 20px;
    justify-content: center;


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
    display: flex;
    justify-content: center;
    gap: 20px;


    .secao-img {
        margin-right: 10px;
    }

}

.container-terceira-secao {
    gap: 40px;
    margin-top: 20px;

    div {
        width: 37.5%;
    }

    p {
        margin: 3px;
        flex-wrap: nowrap;
        text-align: start;
        width: 100%;

    }




    .secao-proximas {
        background-color: #fff;
        border-radius: 8px;
        padding: 12px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        gap: 10px;

        h2 {
            margin-top: 0;
        }

        /* div{
            background-color: red;
        } */

        .container-proxima-despesas {
            display: flex;
            width: 100% !important;
            flex-direction: row;
            /* background-color: red; */

            .img-descricao {
                display: flex;
                width: 100%;

                .container-img {
                    flex: 1;

                }

                .container-img {
                    display: flex;
                    align-items: center;

                    .img {
                        width: 60px;
                        background-color: gainsboro;
                        border-radius: 8px;
                        padding: 10px;
                    }
                }
            }

            .descricao {
                flex: 4;

                div {
                    display: flex;
                    width: 100% !important;
                    justify-content: space-between;
                    gap: 10px;
                }

                .nome p {
                    font-weight: bold;
                }

                .valor-despesas p {
                    color: red;
                    font-weight: bold;

                }

                .valor-receitas p {
                    color: green;
                    font-weight: bold;

                }
            }


            .container-secao-img {
                display: flex;
                align-items: center;
                flex: 2;

            }


            .status-pagamento {
                border-radius: 50px;

                p {
                    padding: 0 5px;
                    font-weight: bold;
                }
            }

            .nao-pago {
                background-color: #FFEC5C;

            }

            .pago {
                background-color: #B4CF66;
            }

        }
    }
}

.t {
    background-color: #fff;
}

.b-saldo-atual {
    background-color: #D9D9D9 !important;
}

.b-total-receitas {
    background-color: #9EFFB6;
}

.b-total-despesas {
    background-color: #FEE6E6;
}

.btn-confimacao-sair {
    width: 100px;
    background-color: var(--primary-color);
}

.btn-confimacao-fechar {
    width: 100px;

    background-color: #fff;
    color: var(--primary-color);
    border-color: var(--primary-color);
}

@media screen and (max-width: 576px) {
    .container-primeira-secao {
        /* flex-direction: column; */
        align-items: center;
    }

    .botao-add {
        display: none;
    }

    .container-segunda-secao {
        flex-wrap: wrap;
        gap: 35px;
    }

    .container-terceira-secao {
        flex-direction: column;
        align-items: center;

        div {
            width: 91%;
        }
    }
}

@media screen and (max-width: 460px) {
    .secao-img {
        padding: 6px;

        img {
            width: 30px;
            height: 30px;
        }



    }

    .container-img {

        .img {
            width: 40px !important;
            padding: 6px !important;

        }

    }


    #container-main {
        padding: 20px 0;
    }



}
</style>