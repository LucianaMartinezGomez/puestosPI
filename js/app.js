// javascript
// File: js/app.js
import { initRouter, navigateTo } from './router.js';
import { Sidebar, bindSidebarEvents } from './components/sidebar.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  app.innerHTML = `<div id="wrapper" class="d-flex">${Sidebar()}</div>`;

  // toggle sidebar
  document.getElementById('wrapper').addEventListener('click', (e) => {
    if (e.target.closest('#menu-toggle')) {
      document.getElementById('wrapper').classList.toggle('toggled');
    }
  });

  // bind navigation events from sidebar (delegation)
  bindSidebarEvents((view) => navigateTo(view));

  // start router
  const pageEl = document.getElementById('main-view') || document.getElementById('page');
  initRouter(pageEl);
});