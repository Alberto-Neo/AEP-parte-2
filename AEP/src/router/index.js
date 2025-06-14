import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import FormReport from '../components/Forms.vue'
import MapView from '../components/Mapa.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/report', component: FormReport },
  { path: '/map', component: MapView }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
