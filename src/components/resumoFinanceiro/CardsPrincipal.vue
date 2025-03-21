<script setup>
</script>

<template>
    <div class="container-card">
        <div class=" secao t ">
            <div class="secao-img b-total-receitas">
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
        <div class=" secao t ">
            <div class="secao-img b-total-receitas">
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
        <div class=" secao t ">
            <div class="secao-img b-total-receitas">
                <img src="/src/assets/icons/dollar.png" alt="porquinhos">

            </div>
            <div>
                <dl>
                    <dt>Total de Receitas:</dt>
                    <!-- <dd>R$ 40.000</dd> -->
                    <dd v-if="saldoAtual == null">R$ 0,00</dd>
                    <dd ifelse>{{ saldoAtual }}</dd>

                </dl>
            </div>
        </div>
        <div class=" secao t ">
            <div class="secao-img b-total-receitas">
                <img src="/src/assets/icons/dollar.png" alt="porquinhos">

            </div>
            <div>
                <dl>
                    <dt>Total de Despesas:</dt>
                    <!-- <dd>R$ 40.000</dd> -->
                    <dd v-if="saldoAtual == null">R$ 0,00</dd>
                    <dd ifelse>{{ saldoAtual }}</dd>

                </dl>
            </div>
        </div>
    </div>
</template>


<style setup>

.container-card{
/* background-color: red; */
display: flex;
gap: 20px;
.secao{
    display: flex;
    background-color: #fff;
    flex: 1;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);


}
    .secao-img {
   

   img {
       width: 35px;
       height: 35px;
   }
   }
}


</style>