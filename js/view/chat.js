// File: js/view/chat.js
// Patrón obligatorio: render() = HTML puro | cargarRender() = toda la lógica

export function renderChat() {
  return {
    // ─── RENDER: Solo HTML puro ───
    render() {
      return `<div class="chat-container p-4">
    <div class="row g-0 shadow-sm rounded-4 overflow-hidden bg-white" style="height: 80vh;">
        <div class="col-md-4 col-lg-3 border-end d-flex flex-column bg-light chat-sidebar d-none d-md-flex">
            <div class="p-3 border-bottom bg-white">
                <h5 class="fw-bold mb-0">Mensajes</h5>
            </div>
            <div class="flex-grow-1 overflow-y-auto">
                <div class="contact-item active p-3 d-flex align-items-center gap-3">
                    <div class="avatar">E</div>
                    <div>
                      <h6 class="mb-0 fw-bold">Juan Empleado</h6>
                      <small class="text-muted d-none d-sm-inline">En línea</small>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-8 col-lg-9 d-flex flex-column">
            <div class="p-3 border-bottom d-flex align-items-center justify-content-between bg-white">
                <div class="d-flex align-items-center gap-3">
                    <div class="avatar sm">E</div>
                    <h6 class="mb-0 fw-bold">Chat con Juan Empleado</h6>
                </div>
                <button id="clearChatBtn" class="btn btn-sm btn-outline-secondary">Limpiar Chat</button>
            </div>

            <div class="chat-messages flex-grow-1 p-4 overflow-y-auto bg-white" id="chatMessages">
                <!-- mensajes se añadirán aquí -->
            </div>

            <div class="p-3 border-top bg-light">
                <form id="chatForm" class="d-flex gap-2 align-items-center position-relative">
                  <input id="chatInput" type="text" class="form-control rounded-pill px-4" placeholder="Escribe un mensaje aquí...">
                  <input id="chatImage" type="file" accept="image/*" class="d-none" aria-hidden="true">
                  <button type="button" id="chatImageBtn" class="btn btn-outline-secondary btn-sm" title="Adjuntar imagen">
                    <i class="bi bi-paperclip"></i>
                  </button>
                  <button type="submit" class="btn btn-send rounded-circle ms-auto">
                    <i class="bi bi-send-fill"></i>
                  </button>
                </form>
            </div>
        </div>
    </div>
  </div>`;
    },

    // ─── CARGAR RENDER: Toda la lógica (selectores, eventos, estado) ───
    cargarRender() {
      // --- Funciones auxiliares internas ---
      function createMessageHtml({ direction = 'received', text = '', imgSrc = null, time = null }) {
        const cls = direction === 'sent' ? 'message sent mb-3' : 'message received mb-3';
        const timeHtml = time ? `<div class="message-time">${time}</div>` : '';
        const imgHtml = imgSrc
          ? `<div style="margin-top:8px"><img src="${imgSrc}" style="max-width:100%;max-height:300px;height:auto;width:auto;border-radius:8px;display:block"></div>`
          : '';
        return `<div class="${cls}"><div class="message-content shadow-sm">${text}${imgHtml}${timeHtml}</div></div>`;
      }

      function appendMessage(msg) {
        const container = document.getElementById('chatMessages');
        if (!container) return;
        container.insertAdjacentHTML('beforeend', createMessageHtml(msg));

        const last = container.lastElementChild;
        if (last) {
          const img = last.querySelector('img');
          if (img) {
            img.addEventListener('load', () => { container.scrollTop = container.scrollHeight; });
          }
        }
        container.scrollTop = container.scrollHeight;
      }

      // --- Selectores del DOM ---
      const container = document.getElementById('chatMessages');
      const form = document.getElementById('chatForm');
      const input = document.getElementById('chatInput');
      const fileInput = document.getElementById('chatImage');
      const clearBtn = document.getElementById('clearChatBtn');
      const imageBtn = document.getElementById('chatImageBtn');

      // Limpiar mensajes al cargar la vista
      if (container) container.innerHTML = '';

      // --- Event Listeners ---
      if (imageBtn) {
        imageBtn.addEventListener('click', () => {
          const fi = document.getElementById('chatImage');
          if (fi) fi.click();
        });
      }

      if (form) {
        form.addEventListener('submit', (ev) => {
          ev.preventDefault();
          const text = input ? input.value.trim() : '';
          const file = fileInput && fileInput.files ? fileInput.files[0] : null;

          if (file) {
            if (!file.type.startsWith('image/')) {
              alert('Solo se permiten imágenes.');
            } else {
              const reader = new FileReader();
              reader.onload = function (evt) {
                appendMessage({ direction: 'sent', text: text || '', imgSrc: evt.target.result, time: new Date().toLocaleTimeString() });
              };
              reader.readAsDataURL(file);
            }
          } else if (text) {
            appendMessage({ direction: 'sent', text, time: new Date().toLocaleTimeString() });
          }

          if (input) input.value = '';
          if (fileInput) fileInput.value = '';
        });
      }

      if (clearBtn) {
        clearBtn.addEventListener('click', () => {
          const c = document.getElementById('chatMessages');
          if (c) c.innerHTML = '';
        });
      }
    }
  };
}
