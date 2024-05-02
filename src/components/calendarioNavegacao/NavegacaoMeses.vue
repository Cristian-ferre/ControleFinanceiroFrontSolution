<script setup>
import { ref, watch } from "vue";

const currentDate = ref(new Date());
const selectedMonth = ref(new Date());
const saldoAtual = ref();
const monthsToShow = 3;

const months = ref([]);

const updateMonths = () => {

    const firstMonth = new Date(selectedMonth.value);
    firstMonth.setMonth(selectedMonth.value.getMonth() - Math.floor(monthsToShow / 2));

    months.value = [];
    for (let i = 0; i < monthsToShow; i++) {
        const month = new Date(firstMonth);
        month.setMonth(firstMonth.getMonth() + i);
        console.log("month", month)

        months.value.push(month.toLocaleString("default", { month: "long", year: "numeric" }));
    }
    console.log("months", months.value)
    //   atualizarDados()
};

const prevMonth = () => {
    selectedMonth.value.setMonth(selectedMonth.value.getMonth() - 1);
    updateMonths();
};

const nextMonth = () => {
    selectedMonth.value.setMonth(selectedMonth.value.getMonth() + 1);
    updateMonths();
};

const selectMonth = (index) => {
    const selected = new Date(selectedMonth.value);
    selected.setMonth(selected.getMonth() - Math.floor(monthsToShow / 2) + index);
    selectedMonth.value = new Date(selected);
};

const teste = (p) => {
    console.log("p", p)
}

const atualizarDados = (mes) => {
    var jsonData;
    switch (mes) {
        case 3:
            jsonData = {
                "saldoAtual": "R$ 1500,00",
                "aPagar": "R$ 500,00",
                "totalDespesas": "R$ 1000,00",
                "totalReceita": "R$ 2500,00"
            };
            // saldoAtual.value = jsonData.saldoAtual;

            // console.log(jsonData.saldoAtual);
            break;
        case 4:
            jsonData = {
                "saldoAtual": "R$ 1200,00",
                "aPagar": "R$ 600,00",
                "totalDespesas": "R$ 1100,00",
                "totalReceita": "R$ 2800,00"
            };

            break;
        case 5:
            jsonData = {
                "saldoAtual": "R$ 1700,00",
                "aPagar": "R$ 400,00",
                "totalDespesas": "R$ 900,00",
                "totalReceita": "R$ 2700,00"
            };

            break;
        default:
            console.error("Mês inválido");
            return;
    }


}

watch(selectedMonth, updateMonths);

updateMonths(); // Chamada inicial para atualizar os meses exibidos
</script>

<template>
    <div class="calendar">
        <div class="header">
            <button @click="prevMonth"><img src="/src/assets/icons/seta-esquerda.png" class="botao-navegacao" alt="botão navegação esquerda"> </button>
            <div v-for="(month, index) in months" :key="index" @click="selectMonth(index)"
                :class="{ 'selected': index === Math.floor(monthsToShow / 2) }">
                <h2 @click=" teste(month)">{{ month }}</h2>
            </div>
            <button @click="nextMonth"> <img src="/src/assets/icons/seta-direita.png" class="botao-navegacao" alt="botão navegação direita"> </button>
        </div>
    </div>
</template>
<style scoped>
button{
    all: initial;
}

.calendar {
    margin: 20px 0;

    .header {
        background-color: #EEEEEE;
        padding: 10px 10px;
        border-radius: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .botao-navegacao{
            width: 25px;
            cursor: pointer;
        }
    }

    h2 {
        cursor: pointer;
        font-size: 16px;
        font-weight: 500;

padding: 0;
margin: 0;
    }

    .selected {
        /* background-color: red; */
        font-weight: bold;
        h2{
            font-size: 20px;
            font-weight: 800;

        }
    }
}
</style>