<template>
    <div class="">
        <autenticacao title="Entre com sua conta" primaryBtnText="Entrar" secundaryBtnText="Cadastrar" rota="/cadastrar"  @formSubmitted="login"  >
            <form >
               <inputDefault
               type="email"
               forName="email"
               placeholder="cferreira@gmail.com.br"
               label="Email"
               @input="updateEmail" 
              
               >
               <img src="../../assets/email.svg" />
               </inputDefault>

               <inputDefault
               type="password"
               forName="senha"
               placeholder="Entre com a senha"
               label="Senha"
               @input="updatePassword" 
               >
               <img src="../../assets/senha.svg" />
               </inputDefault>
               

            </form>
        </autenticacao  >
    </div>
</template>


<script setup>
import 'vue3-toastify/dist/index.css'

import autenticacao from '../../components/autenticacaoLayout/UsuarioAutenticacao.vue'
import inputDefault from '../../components/estruturaInput/input.vue'
// import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { toast } from 'vue3-toastify';
import axiosIntance from '../../services/http.js';

const router = useRouter();

const email = ref('');
const password = ref('');

const updateEmail = (value) => {
    // email.value = value; // Atualiza a variável de e-mail
    email.value = value.target.value; 
};

const updatePassword = (value) => {
    // password.value = value; // Atualiza a variável de senha
    password.value = value.target.value;
};

const login = async () => {
  try {
    // let response = await axios.post(`https://localhost:44318/ControleFinanceiro/Usuario/Auth?email=${email.value}&senha=${senha.value}`)
    let response = await axiosIntance.post(`/Usuario/Auth?email=${email.value}&senha=${senha.value}`)

    

    if(response == null){
      console.log("vaziooo")
    }

    localStorage.setItem("token", response.data.token.token)
    // Lidar com a resposta de login
    // console.log('Resposta de login:',  response.data.token.token);
   
    toast.success('Login feito com sucesso', {
      containerId: 'A',
            autoClose: 200,
            onClose: () => {
              router.push("/dashboard");
        }      
        });
    
  } catch (error) {
    // Exibir mensagem de erro para o usuário
    toast.error(error.response.data, {
      containerId: 'A',
            autoClose: 400,
           
        });
    console.log(error)
    // alert(error.response.data)
  }

  
};
</script>

<style>

form{
    width: 100%;
}
</style>