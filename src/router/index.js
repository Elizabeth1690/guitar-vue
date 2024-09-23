import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'; // Importamos la vista principal

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView, // Ruta para la vista principal
  },
  // Aquí puedes agregar más rutas según sea necesario
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Usamos el historial HTML5
  routes,
});

export default router;
