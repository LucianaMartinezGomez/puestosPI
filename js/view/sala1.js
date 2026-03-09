// javascript
// File: js/views/sala1.js
// Sala 1 view: markup + event binding
export function renderSala1() {
  return `
    <div id="main-view">
      <div class="sala1-container">
        <h2>Sala 1</h2>
        <div class="container">

          <div class="row justify-content-center mb-2">
            <div class="col-md-3 puesto" data-puesto="TL">
              <h5>Puesto TL</h5>
              <img src="assets/TomaCorriente.jpeg" alt="Toma corriente" title="Toma corriente">
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="fila-puestos">
                <div class="puesto" data-puesto="4"><p>Puesto 4</p><img src="assets/TomaCorriente.jpeg" alt=""></div>
                <div class="puesto" data-puesto="3"><p>Puesto 3</p><img src="assets/TomaCorriente.jpeg" alt=""></div>
                <div class="puesto" data-puesto="2"><p>Puesto 2</p><img src="assets/TomaCorriente.jpeg" alt=""></div>
                <div class="puesto" data-puesto="1"><p>Puesto 1</p><img src="assets/TomaCorriente.jpeg" alt=""></div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="fila-puestos">
                <div class="puesto" data-puesto="1"><p>Puesto 1</p><img src="assets/TomaCorriente.jpeg" alt=""></div>
                <div class="puesto" data-puesto="2"><p>Puesto 2</p><img src="assets/TomaCorriente.jpeg" alt=""></div>
                <div class="puesto" data-puesto="3"><p>Puesto 3</p><img src="assets/TomaCorriente.jpeg" alt=""></div>
                <div class="puesto" data-puesto="4"><p>Puesto 4</p><img src="assets/TomaCorriente.jpeg" alt=""></div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="fila-puestos">
                <div class="puesto" data-puesto="4"><p>Puesto 4</p><img src="assets/TomaCorriente.jpeg" alt=""></div>
                <div class="puesto" data-puesto="3"><p>Puesto 3</p><img src="assets/TomaCorriente.jpeg" alt=""></div>
                <div class="puesto" data-puesto="2"><p>Puesto 2</p><img src="assets/TomaCorriente.jpeg" alt=""></div>
                <div class="puesto" data-puesto="1"><p>Puesto 1</p><img src="assets/TomaCorriente.jpeg" alt=""></div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="fila-puestos">
                <div class="puesto" data-puesto="1"><p>Puesto 1</p><img src="assets/TomaCorriente.jpeg" alt=""></div>
                <div class="puesto" data-puesto="2"><p>Puesto 2</p><img src="assets/TomaCorriente.jpeg" alt=""></div>
                <div class="puesto" data-puesto="3"><p>Puesto 3</p><img src="assets/TomaCorriente.jpeg" alt=""></div>
                <div class="puesto" data-puesto="4"><p>Puesto 4</p><img src="assets/TomaCorriente.jpeg" alt=""></div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="fila-puestos">
                <div class="puesto" data-puesto="1"><p>Puesto 1</p><img src="assets/TomaCorriente.jpeg" alt=""></div>
                <div class="puesto" data-puesto="2"><p>Puesto 2</p><img src="assets/TomaCorriente.jpeg" alt=""></div>
                <div class="puesto" data-puesto="3"><p>Puesto 3</p><img src="assets/TomaCorriente.jpeg" alt=""></div>
                <div class="puesto" data-puesto="4"><p>Puesto 4</p><img src="assets/TomaCorriente.jpeg" alt=""></div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="fila-puestos">
                <div class="puesto" data-puesto="1"><p>Puesto 1</p><img src="assets/TomaCorriente.jpeg" alt=""></div>
                <div class="puesto" data-puesto="2"><p>Puesto 2</p><img src="assets/TomaCorriente.jpeg" alt=""></div>
                <div class="puesto" data-puesto="3"><p>Puesto 3</p><img src="assets/TomaCorriente.jpeg" alt=""></div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-4">
              <div class="fila-puestos">
                <div class="puesto" data-puesto="1"><p>Puesto 1</p><img src="assets/TomaCorriente.jpeg" alt=""></div>
                <div class="puesto" data-puesto="2"><p>Puesto 2</p><img src="assets/TomaCorriente.jpeg" alt=""></div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="fila-puestos">
                <div class="puesto" data-puesto="1"><p>Puesto 1</p><img src="assets/TomaCorriente.jpeg" alt=""></div>
                <div class="puesto" data-puesto="2"><p>Puesto 2</p><img src="assets/TomaCorriente.jpeg" alt=""></div>
                <div class="puesto" data-puesto="3"><p>Puesto 3</p><img src="assets/TomaCorriente.jpeg" alt=""></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  `;
}

// bind selection logic when this view is rendered
let _sala1Bound = false;
function bindSala1Events() {
  if (_sala1Bound) return;
  _sala1Bound = true;

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.sala1-container .puesto');
    if (!btn) return;
    btn.classList.toggle('seleccionado');
  });
}

// listen for render event from router
document.addEventListener('view-rendered', (e) => {
  if (e?.detail?.view === 'sala1') {
    // small timeout to ensure DOM is available
    setTimeout(bindSala1Events, 0);
  }
});