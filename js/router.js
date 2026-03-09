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
    const renderer = routes[view] || routes['inicio'];
    targetEl.innerHTML = renderer();
    // dispatch an event so view modules can bind post-render handlers
    try {
      document.dispatchEvent(new CustomEvent('view-rendered', { detail: { view } }));
    } catch (e) {
      // fail silently if CustomEvent not supported
    }
    // opcional: set title
    const titleEl = document.getElementById('current-view-title');
    if (titleEl) titleEl.innerText = view.charAt(0).toUpperCase() + view.slice(1);
  }

  window.addEventListener('hashchange', render);
  render();
}