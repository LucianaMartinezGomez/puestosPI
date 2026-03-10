// File: js/view/sala1.js
// Patrón obligatorio: render() = HTML puro | cargarRender() = toda la lógica

export function renderSala1() {
  return {
    render() {
      return `
<svg aria-hidden="true" style="display:none">
  <symbol id="socket-bw" viewBox="0 0 44 48">
    <rect x="1" y="1" width="42" height="46" rx="6" fill="#ffffff" stroke="none" stroke-width="0"></rect>
    <rect x="3" y="3" width="38" height="42" rx="4.5" fill="none" stroke="#374151" stroke-width="1"></rect>
    <rect x="6" y="6.5" width="14" height="20" rx="3" fill="#ffffff" stroke="#374151" stroke-width="1"></rect>
    <rect x="8" y="9.5" width="4" height="12" rx="2" fill="#6B7280"></rect>
    <rect x="14" y="9.5" width="4" height="12" rx="2" fill="#6B7280"></rect>
    <circle cx="13" cy="34" r="4" fill="#6B7280"></circle>
    <circle cx="13" cy="34" r="2" fill="#ffffff"></circle>
    <rect x="24" y="6.5" width="14" height="20" rx="3" fill="#ffffff" stroke="#374151" stroke-width="1"></rect>
    <rect x="26" y="9.5" width="4" height="12" rx="2" fill="#6B7280"></rect>
    <rect x="32" y="9.5" width="4" height="12" rx="2" fill="#6B7280"></rect>
    <circle cx="30" cy="34" r="4" fill="#6B7280"></circle>
    <circle cx="30" cy="34" r="2" fill="#ffffff"></circle>
  </symbol>
</svg>

<div class="map-outer socket-module">
  <div class="map-header">
    <div class="map-header-title">📍 Sala 3 — Piso 1</div>
  </div>

  <div class="map-body">

    <!-- TL -->
    <div class="tl-row">
      <div class="tl-wrap">
        <div class="tl-lbl">Puesto TL</div>
        <div class="p-tl sb" onclick="clickPC(this,'TL')">
          <svg class="socket-img" viewBox="0 0 44 48" aria-hidden="true"><use href="#socket-bw"></use></svg>
        </div>
      </div>
    </div>

    <div class="bloques">

      <!-- ══ BLOQUE IZQUIERDO ══ -->
      <div class="bloque">

        <!-- Mesa A -->
        <div class="mesa-fila"><div class="mesa"><div class="prow">
          <div class="p sg" onclick="clickPC(this,'A-P4')"><svg class="socket-img" viewBox="0 0 44 48" aria-hidden="true"><use href="#socket-bw"></use></svg><div class="plbl-in">P4</div></div>
          <div class="p so" onclick="clickPC(this,'A-P3')"><svg class="socket-img" viewBox="0 0 44 48" aria-hidden="true"><use href="#socket-bw"></use></svg><div class="plbl-in">P3</div></div>
          <div class="p sv" onclick="clickPC(this,'A-P2')"><svg class="socket-img" viewBox="0 0 44 48" aria-hidden="true"><use href="#socket-bw"></use></svg><div class="plbl-in">P2</div></div>
          <div class="p sg" onclick="clickPC(this,'A-P1')"><svg class="socket-img" viewBox="0 0 44 48" aria-hidden="true"><use href="#socket-bw"></use></svg><div class="plbl-in">P1</div></div>
        </div></div></div>

        <!-- Mesa B -->
        <div class="mesa-fila"><div class="mesa"><div class="prow">
          <div class="p sb" onclick="clickPC(this,'B-P4')"><svg class="socket-img" viewBox="0 0 44 48" aria-hidden="true"><use href="#socket-bw"></use></svg><div class="plbl-in">P4</div></div>
          <div class="p sg" onclick="clickPC(this,'B-P3')"><svg class="socket-img" viewBox="0 0 44 48" aria-hidden="true"><use href="#socket-bw"></use></svg><div class="plbl-in">P3</div></div>
          <div class="p so" onclick="clickPC(this,'B-P2')"><svg class="socket-img" viewBox="0 0 44 48" aria-hidden="true"><use href="#socket-bw"></use></svg><div class="plbl-in">P2</div></div>
          <div class="p sv" onclick="clickPC(this,'B-P1')"><svg class="socket-img" viewBox="0 0 44 48" aria-hidden="true"><use href="#socket-bw"></use></svg><div class="plbl-in">P1</div></div>
        </div></div></div>

        <!-- Mesa C -->
        <div class="mesa-fila"><div class="mesa"><div class="prow">
          <div class="p sg" onclick="clickPC(this,'C-P1')"><svg class="socket-img" viewBox="0 0 44 48" aria-hidden="true"><use href="#socket-bw"></use></svg><div class="plbl-in">P1</div></div>
          <div class="p sv" onclick="clickPC(this,'C-P2')"><svg class="socket-img" viewBox="0 0 44 48" aria-hidden="true"><use href="#socket-bw"></use></svg><div class="plbl-in">P2</div></div>
          <div class="p sg" onclick="clickPC(this,'C-P3')"><svg class="socket-img" viewBox="0 0 44 48" aria-hidden="true"><use href="#socket-bw"></use></svg><div class="plbl-in">P3</div></div>
          <div class="p so" onclick="clickPC(this,'C-P4')"><svg class="socket-img" viewBox="0 0 44 48" aria-hidden="true"><use href="#socket-bw"></use></svg><div class="plbl-in">P4</div></div>
        </div></div></div>

        <!-- Mesa D -->
        <div class="mesa-fila"><div class="mesa"><div class="prow">
          <div class="p sg" onclick="clickPC(this,'D-P1')"><svg class="socket-img" viewBox="0 0 44 48" aria-hidden="true"><use href="#socket-bw"></use></svg><div class="plbl-in">P1</div></div>
          <div class="p sg" onclick="clickPC(this,'D-P2')"><svg class="socket-img" viewBox="0 0 44 48" aria-hidden="true"><use href="#socket-bw"></use></svg><div class="plbl-in">P2</div></div>
          <div class="p sg" onclick="clickPC(this,'D-P3')"><svg class="socket-img" viewBox="0 0 44 48" aria-hidden="true"><use href="#socket-bw"></use></svg><div class="plbl-in">P3</div></div>
          <div class="p sg" onclick="clickPC(this,'D-P4')"><svg class="socket-img" viewBox="0 0 44 48" aria-hidden="true"><use href="#socket-bw"></use></svg><div class="plbl-in">P4</div></div>
        </div></div></div>

        <!-- Mesa E -->
        <div class="mesa-fila"><div class="mesa"><div class="prow">
          <div class="p sg" onclick="clickPC(this,'E-P1')"><svg class="socket-img" viewBox="0 0 44 48" aria-hidden="true"><use href="#socket-bw"></use></svg><div class="plbl-in">P1</div></div>
          <div class="p sb" onclick="clickPC(this,'E-P2')"><svg class="socket-img" viewBox="0 0 44 48" aria-hidden="true"><use href="#socket-bw"></use></svg><div class="plbl-in">P2</div></div>
        </div></div></div>

      </div>

      <!-- ══ BLOQUE DERECHO ══ -->
      <div class="bloque">

        <!-- Mesa F -->
        <div class="mesa-fila"><div class="mesa"><div class="prow">
          <div class="p sv" onclick="clickPC(this,'F-P1')"><svg class="socket-img" viewBox="0 0 44 48" aria-hidden="true"><use href="#socket-bw"></use></svg><div class="plbl-in">P1</div></div>
          <div class="p sg" onclick="clickPC(this,'F-P2')"><svg class="socket-img" viewBox="0 0 44 48" aria-hidden="true"><use href="#socket-bw"></use></svg><div class="plbl-in">P2</div></div>
          <div class="p so" onclick="clickPC(this,'F-P3')"><svg class="socket-img" viewBox="0 0 44 48" aria-hidden="true"><use href="#socket-bw"></use></svg><div class="plbl-in">P3</div></div>
          <div class="p sb" onclick="clickPC(this,'F-P4')"><svg class="socket-img" viewBox="0 0 44 48" aria-hidden="true"><use href="#socket-bw"></use></svg><div class="plbl-in">P4</div></div>
        </div></div></div>

        <!-- Mesa G -->
        <div class="mesa-fila"><div class="mesa"><div class="prow">
          <div class="p sg" onclick="clickPC(this,'G-P1')"><svg class="socket-img" viewBox="0 0 44 48" aria-hidden="true"><use href="#socket-bw"></use></svg><div class="plbl-in">P1</div></div>
          <div class="p sv" onclick="clickPC(this,'G-P2')"><svg class="socket-img" viewBox="0 0 44 48" aria-hidden="true"><use href="#socket-bw"></use></svg><div class="plbl-in">P2</div></div>
          <div class="p sg" onclick="clickPC(this,'G-P3')"><svg class="socket-img" viewBox="0 0 44 48" aria-hidden="true"><use href="#socket-bw"></use></svg><div class="plbl-in">P3</div></div>
          <div class="p so" onclick="clickPC(this,'G-P4')"><svg class="socket-img" viewBox="0 0 44 48" aria-hidden="true"><use href="#socket-bw"></use></svg><div class="plbl-in">P4</div></div>
        </div></div></div>

        <!-- Mesa H -->
        <div class="mesa-fila"><div class="mesa"><div class="prow">
          <div class="p sg" onclick="clickPC(this,'H-P1')"><svg class="socket-img" viewBox="0 0 44 48" aria-hidden="true"><use href="#socket-bw"></use></svg><div class="plbl-in">P1</div></div>
          <div class="p sg" onclick="clickPC(this,'H-P2')"><svg class="socket-img" viewBox="0 0 44 48" aria-hidden="true"><use href="#socket-bw"></use></svg><div class="plbl-in">P2</div></div>
          <div class="p sg" onclick="clickPC(this,'H-P3')"><svg class="socket-img" viewBox="0 0 44 48" aria-hidden="true"><use href="#socket-bw"></use></svg><div class="plbl-in">P3</div></div>
          <div class="p sg" onclick="clickPC(this,'H-P4')"><svg class="socket-img" viewBox="0 0 44 48" aria-hidden="true"><use href="#socket-bw"></use></svg><div class="plbl-in">P4</div></div>
        </div></div></div>

        <!-- Mesa I -->
        <div class="mesa-fila"><div class="mesa"><div class="prow">
          <div class="p sg" onclick="clickPC(this,'I-P1')"><svg class="socket-img" viewBox="0 0 44 48" aria-hidden="true"><use href="#socket-bw"></use></svg><div class="plbl-in">P1</div></div>
          <div class="p sb" onclick="clickPC(this,'I-P2')"><svg class="socket-img" viewBox="0 0 44 48" aria-hidden="true"><use href="#socket-bw"></use></svg><div class="plbl-in">P2</div></div>
          <div class="p sv" onclick="clickPC(this,'I-P3')"><svg class="socket-img" viewBox="0 0 44 48" aria-hidden="true"><use href="#socket-bw"></use></svg><div class="plbl-in">P3</div></div>
        </div></div></div>

        <!-- Mesa J -->
        <div class="mesa-fila"><div class="mesa"><div class="prow">
          <div class="p so" onclick="clickPC(this,'J-P1')"><svg class="socket-img" viewBox="0 0 44 48" aria-hidden="true"><use href="#socket-bw"></use></svg><div class="plbl-in">P1</div></div>
          <div class="p sg" onclick="clickPC(this,'J-P2')"><svg class="socket-img" viewBox="0 0 44 48" aria-hidden="true"><use href="#socket-bw"></use></svg><div class="plbl-in">P2</div></div>
          <div class="p sv" onclick="clickPC(this,'J-P3')"><svg class="socket-img" viewBox="0 0 44 48" aria-hidden="true"><use href="#socket-bw"></use></svg><div class="plbl-in">P3</div></div>
        </div></div></div>

      </div>

    </div>

    <!-- Leyenda -->
    <div class="legend">
      <div class="leg"><div class="ldot g"></div>Sin revisar</div>
      <div class="leg"><div class="ldot o"></div>Con daño</div>
      <div class="leg"><div class="ldot b"></div>En revisión</div>  
      <div class="leg"><div class="ldot v"></div>Verificado</div>
    </div>

  </div>
</div>
  `;
    },

    cargarRender() {
      // Sin lógica adicional por ahora para Sala 1
    }
  };
}
