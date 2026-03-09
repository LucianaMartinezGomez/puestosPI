// javascript
// File: js/app.js
import { initRouter, navigateTo } from './router.js';
import { Sidebar, bindSidebarEvents } from './components/sidebar.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  app.innerHTML = `<div id="wrapper" class="d-flex">${Sidebar()}</div>`;

  const wrapper = document.getElementById('wrapper');
  const overlay = document.getElementById('sidebar-overlay');
  const closeBtn = document.getElementById('sidebar-close');

  // Inicializar estado según ancho de ventana
  function setInitialState() {
    if (window.innerWidth < 768) {
      wrapper.classList.add('toggled'); // cerrado en móviles
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    } else {
      wrapper.classList.remove('toggled'); // abierto en escritorio
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }
  setInitialState();

  // Función para abrir menú
  function openMenu() {
    wrapper.classList.remove('toggled');
    if (window.innerWidth < 768) {
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden'; // prevenir scroll
    } else {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // Función para cerrar menú
  function closeMenu() {
    wrapper.classList.add('toggled');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Toggle con botón hamburguesa
  wrapper.addEventListener('click', (e) => {
    if (e.target.closest('#menu-toggle')) {
      if (wrapper.classList.contains('toggled')) {
        openMenu();
      } else {
        closeMenu();
      }
    }
  });

  // Cerrar con overlay
  overlay.addEventListener('click', closeMenu);

  // Cerrar con botón X
  closeBtn.addEventListener('click', closeMenu);

  // Cerrar al seleccionar una opción del menú en móviles
  document.addEventListener('click', (e) => {
    const navBtn = e.target.closest('.nav-link-custom[data-view]');
    if (navBtn && window.innerWidth < 768) {
      closeMenu();
    }
  });

  // Sincronizar estado al cambiar tamaño de ventana
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      // escritorio: sidebar visible, quitar overlay
      wrapper.classList.remove('toggled');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    } else {
      // móvil: por defecto cerrado
      wrapper.classList.add('toggled');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // bind navigation events from sidebar (delegation)
  bindSidebarEvents((view) => navigateTo(view));

  // start router
  const pageEl = document.getElementById('main-view') || document.getElementById('page');
  initRouter(pageEl);
});