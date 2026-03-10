// File: js/view/home.js
// Patrón obligatorio: render() = HTML puro | cargarRender() = toda la lógica

export function renderHome() {
  return {
    render() {
      return `<div id="main-view"><h1>Inicio</h1><p>Bienvenido a el Inicio de la aplicación.</p></div>`;
    },

    cargarRender() {
      // Sin lógica adicional para la vista de inicio
    }
  };
}