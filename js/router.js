// javascript
// File: js/router.js
import { renderHome } from './view/home.js';
import { renderSala1 } from './view/sala1.js';
import { renderInventario } from './view/inventario.js';
import { renderChat } from './view/chat.js';

const routes = {
  'inicio': renderHome,
  'sala1': renderSala1,
  'inventario': renderInventario,
  'chat': renderChat
};

export function parseHash() {
  return (location.hash.replace(/^#/, '') || 'inicio').toLowerCase();
}

export function navigateTo(view) {
  location.hash = `#${view}`;
}

export function initRouter(targetEl) {
  function render() {
    const view = parseHash();
    const factory = routes[view] || routes['inicio'];
    const viewObj = factory();

    // 1. Inyectar HTML puro
    targetEl.innerHTML = viewObj.render();

    // 2. Cargar toda la lógica (selectores, eventos, estado)
    viewObj.cargarRender();

    // opcional: set title
    const titleEl = document.getElementById('current-view-title');
    if (titleEl) titleEl.innerText = view.charAt(0).toUpperCase() + view.slice(1);
  }

  window.addEventListener('hashchange', render);
  render();
}