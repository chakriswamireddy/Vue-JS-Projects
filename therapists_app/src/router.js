// router.js

import { createRouter, createWebHistory } from 'vue-router';

// Import your Vue components to be used as pages
import MainBody from './components/MainBody.vue'

const routes = [
  {
    path: '/therapists',
    name: 'Therapist',
    component: MainBody,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
