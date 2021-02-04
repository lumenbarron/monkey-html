class Equipe extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
      <div class="container-fluid container-equipe" id="nossa-equipe">
      <div class="row">
        <h1 class="big-header equipe-header-1">NUESTRO</h1>
      </div>
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-5 order-two equipe-text">
          <p class="main-text ">
            Caminamos en nuestra misión y nuestro equipo está cada vez más comprometido en alcanzar nuestro propósito.
            Estamos creando un equipo creativo y diversificado para crear el mejor producto e impactar la vida de
            millones.
          </p>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-7 equipe-header-2 order-one">
          <h1 class="big-header">EQUIPO</h1>
        </div>
      </div>
      <div class="row">
        <img src="images/equipe.png" class="" alt="sobrenos" />
      </div>
    </div>
          `;
    }
  }
  
  window.customElements.define("equipe-section", Equipe);