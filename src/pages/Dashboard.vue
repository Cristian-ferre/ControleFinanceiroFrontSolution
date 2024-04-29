<script setup>
import asideNav from "@/components/MenuAside.vue"
import { ref, onMounted } from "vue";

onMounted(() => {
    generateCalendar();
});
var currentMonth = new Date().getMonth();
const mesAtualNumber = ref();
const months = ref([]);
const saldoAtual = ref();

const generateCalendar = (p) => {
console.log("currentMonth", currentMonth)
    const monthsToShow = [currentMonth - 1, currentMonth, currentMonth + 1];
    monthsToShow.forEach(monthIndex => {
        const date = new Date();
        date.setMonth(monthIndex);
        const month = {
            name: getMonthName(date.getMonth()),
            // days: getDaysInMonth(date.getFullYear(), date.getMonth())
        };
        months.value.push(month.name);

    });
    const mesAtualNumber = {
        mesValue: getMonthName(currentMonth),
    };
    atualizarDados(mesAtualNumber.mesValue.number);
};

const getMonthName = (monthIndex) => {
    const months = [
        { name: 'Janeiro', number: 1 },
        { name: 'Fevereiro', number: 2 },
        { name: 'Março', number: 3 },
        { name: 'Abril', number: 4 },
        { name: 'Maio', number: 5 },
        { name: 'Junho', number: 6 },
        { name: 'Julho', number: 7 },
        { name: 'Agosto', number: 8 },
        { name: 'Setembro', number: 9 },
        { name: 'Outubro', number: 10 },
        { name: 'Novembro', number: 11 },
        { name: 'Dezembro', number: 12 }
    ];
    return months[monthIndex];
};


const atualizarDados = (mes) => {
    console.log("mes", mes)
    var jsonData ;
    switch (mes) {
        case 3:
            jsonData = {
                "saldoAtual": "R$ 1500,00",
                "aPagar": "R$ 500,00",
                "totalDespesas": "R$ 1000,00",
                "totalReceita": "R$ 2500,00"
            };
            saldoAtual.value = jsonData.saldoAtual;

            console.log(jsonData.saldoAtual);
            break;
        case 4:
            jsonData = {
                "saldoAtual": "R$ 1200,00",
                "aPagar": "R$ 600,00",
                "totalDespesas": "R$ 1100,00",
                "totalReceita": "R$ 2800,00"
            };
            saldoAtual.value = jsonData.saldoAtual;

            console.log(jsonData.saldoAtual);
            break;
        case 5:
            jsonData = {
                "saldoAtual": "R$ 1700,00",
                "aPagar": "R$ 400,00",
                "totalDespesas": "R$ 900,00",
                "totalReceita": "R$ 2700,00"
            };
            saldoAtual.value = jsonData.saldoAtual;

            console.log(jsonData.saldoAtual);
            break;
        default:
            console.error("Mês inválido");
            return;
    }
// console.log("currentMonth", currentMonth)
// console.log("fim", mes)

//     currentMonth = mes;
//     // console.log("currentMonth.valueOf = mes;", mes)
//     generateCalendar();

}



// const getDaysInMonth = (year, month) => {
//     const date = new Date(year, month, 1);
//     const days = [];
//     while (date.getMonth() === month) {
//         days.push(date.getDate());
//         date.setDate(date.getDate() + 1);
//     }
//     return days;
// };


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
                                    <dd>{{ saldoAtual }}</dd>

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
                <div class="calendar ">
                    <div class="month" v-for="(month, index) in months" :key="index">
                        <h2 @click="atualizarDados(month.number)">{{ month.name }}</h2>
                        <ul>
                            <li v-for="day in month.days" :key="day">{{ day }}</li>
                        </ul>
                    </div>
                </div>

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
.structure-page {
    /* background-color: red; */
    /* padding: 40px 20px; */
}

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



.calendar {
    display: flex;
    justify-content: space-between;
    align-items: center;
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