import { createRouter, createWebHistory } from 'vue-router'

import Login from '../pages/auth/Login.vue'
import Signup from '@/pages/auth/Signup.vue'
import dashboard from '@/pages/Dashboard.vue'
import receita from '@/pages/transacoes/Receita.vue'
import despesa from '@/pages/transacoes/Despesa.vue'

// import { isAuthenticated } from '@/services/auth'; // Função para verificar se o usuário está autenticado


const routes = [
  { path: '/login', component: Login },
  { path: '/cadastrar', component: Signup },


  { path: '/transacoes/receita', component: receita },
  { path: '/transacoes/despesa', component: despesa },
  {path: '/dashboard', component: dashboard },

  //Com autenticação
  // { path: '/transacoes/receita', component: receita, meta: { requiresAuth: true } },
  // { path: '/transacoes/despesa', component: despesa, meta: { requiresAuth: true } },
  // {path: '/dashboard', component: dashboard, name:'dashboard',   meta: { requiresAuth: true }  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  
  // Verifique se a rota requer autenticação e se há um token no localStorage
  if (to.meta.requiresAuth && !localStorage.getItem('token')) {
    // Se não houver token, redirecione para a página de login
    console.log("localStorage.getItem('token')")
    next('/login');
  } else {
    // Caso contrário, prossiga para a próxima rota
    next();
  }
});
export default router;
