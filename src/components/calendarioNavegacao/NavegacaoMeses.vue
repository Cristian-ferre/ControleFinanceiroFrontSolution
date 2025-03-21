<script setup>
import { ref, watch } from "vue";
const emit = defineEmits({
  unvalidatedEvent: null, // if we want an event without validation
  customChange: (s) => {
    if (s && typeof s === 'string') {
      return true
    } else {
      console.warn(`Invalid submit event payload!`)
      return false
    }
  },
})
const currentDate = ref(new Date());
const selectedMonth = ref(new Date());
const saldoAtual = ref();
const monthsToShow = 3;

const months = ref([]);
const data = ref([])
const updateMonths = () => {

    const firstMonth = new Date(selectedMonth.value);
    firstMonth.setMonth(selectedMonth.value.getMonth() - Math.floor(monthsToShow / 2));
    data.value = []; // Inicializa 'data' como um array vazio

    months.value = [];
    for (let i = 0; i < monthsToShow; i++) {
        const month = new Date(firstMonth);
        month.setMonth(firstMonth.getMonth() + i);
        console.log("month", month)

        months.value.push(month.toLocaleString("default", { month: "long", year: "numeric" }));
        data.value.push({
            ano: month.getFullYear(),
            mes: month.getMonth() + 1, // getMonth() retorna de 0 a 11
            dia: month.getDate()
        });
    }
    console.log("data", data);

    console.log("months", months)
    //   atualizarDados()

    emit('customChange', data.value[1])
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



watch(selectedMonth, updateMonths);

updateMonths(); // Chamada inicial para atualizar os meses exibidos
</script>

<template>
    <div class="calendar">
        <div class="header">
            <button @click="prevMonth"><img src="/src/assets/icons/seta-esquerda.png" class="botao-navegacao"
                    alt="botão navegação esquerda"> </button>
            <div class="dd-mes" v-for="(month, index) in months" :key="index" @click="selectMonth(index)"
                :class="{ 'selected': index === Math.floor(monthsToShow / 2) }">
                <h2 @click=" teste(month)">{{ month }}</h2>
            </div>
            <button @click="nextMonth"> <img src="/src/assets/icons/seta-direita.png" class="botao-navegacao"
                    alt="botão navegação direita"> </button>
        </div>
    </div>
</template>
<style scoped>
button {
    all: initial;
}

.calendar {
    margin: 20px 0;

    .header {
        background-color: #F2F2F2;
        padding: 10px 10px;
        border-radius: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .botao-navegacao {
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

        h2 {
            font-size: 20px;
            font-weight: 800;

        }
    }
}

@media screen and (max-width: 576px) {
    .dd-mes {
        text-align: center;
        width: 100px;
        h2 {
            font-size: 15px;

        }
    }

    .selected h2 {
        font-size: 15px;

    }
}


</style>