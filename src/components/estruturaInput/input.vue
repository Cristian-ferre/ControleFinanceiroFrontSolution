<script setup>
import { defineProps, defineEmits } from 'vue';

const InputType = {
    Text: 'text',
    Email: 'email',
    Password: 'password'
};


const props = defineProps({
    type: {
        type: String,
        required: true
    },
    forName: {
        type: String,
        required: true,
    },
    placeholder: {
        type: String,
        required: false,
    },
    label: {
        type: String,
        required: true,

    },
    value: {
        type: String,
        required: false,

    }
})



const emit = defineEmits();

const fieldValue = '';

const emitChange = (event) => {
    emit('change', event.target.value);
};




</script>


<template>
    <!-- Div que será exibida se forName for igual a 'CategoriaInput' -->
    <div v-if="forName === 'CategoriaInput'" class="form-elementos">
        <label :for="forName">{{ label }}</label>
        <div class="form-input-img">
            <select :id="forName">
                <option>Selecione</option>
            </select>

            <div class="form-img">
                <slot></slot>
            </div>
        </div>
    </div>

    <div v-else-if="forName === 'FormasPagamentoInput'" class="form-elementos">
        <label :for="forName">{{ label }}</label>
        <div class="form-input-img">
            <select :id="forName">
                <option>Selecione</option>
                <option value="1">Credito</option>

                <option value="2">Debito</option>
                <option value="3">Pix</option>
            </select>

            <div class="form-img">
                <slot></slot>
            </div>
        </div>
    </div>
    <!-- <div v-if="forName === 'FormasPagamentoInput'" class="form-elementos">
                <label :for="forName">{{ label }}</label>
                <div class="form-input-img">
                    <select :id="forName">
                        <option>Selecione</option>
                        <option value="0">Debito</option>
                        <option value="1">Credito</option>
                        <option value="3">Pix</option>
                    </select>

                    <div class="form-img">
                        <slot></slot>
                    </div>
                </div>
            </div> -->
    <div v-else>
        <div v-if="type != 'select'" class="form-elementos">
            <label :for="forName">{{ label }}</label>
            <div class="form-input-img">
                <!-- <input :type="type" :id="forName" :placeholder="placeholder"  required> -->
                <!-- <input :type="type" :id="forName" :placeholder="placeholder" v-model="fieldValue"  @input="emitChange" required> -->
                <input :type="type" :id="forName" :placeholder="placeholder" :value="value" @input="emitChange"
                    required>
                <div class="form-img">
                    <slot></slot>
                </div>
            </div>
        </div>

        <div v-else class="form-elementos">
            <label :for="forName">{{ label }}</label>
            <div class="form-input-img">
                <select :id="forName">
                    <!-- <option>Selecione</option> -->
                    <option value="0">Fixo</option>
                    <option value="1">Variavel</option>
                </select>
                <div class="form-img">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.form-elementos {
    /* background-color: red; */
    width: 100%;
    margin: 20px 0;

    label {
        color: var(--text-color);
        font-weight: 400;
    }


    .form-input-img {
        display: flex;
        width: 100%;
        margin: 10px 0;

        /* padding: 10px 0; */
        /* background-color: red; */
        background-color: var(--gray-bg);
        color: var(--text-color);
        border-radius: 5px 0 0 5px;


        input,
        select {
            width: 100%;
            border-radius: 5px 0 0 5px;
            border: none;
            background-color: var(--gray-bg);
            color: var(--text-color);



        }

        .form-img {
            background-color: var(--primary-color);
            padding: 10px 10px;
            border-radius: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
        }



    }
}
</style>