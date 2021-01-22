class Equipe extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
      <div class="container-fluid container-equipe" id="nossa-equipe">
      <div class="row">
        <h1 class="big-header equipe-header-1">NOSSA</h1>
      </div>
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-5 equipe-text border-test">
          <p class="main-text">
            Caminhamos em nossa missão e nossa equipe está cada vez mais engajada em atingir nosso propósito.
            Estamos criando uma equipe criativa e diversificada para criar o melhor produto e impactar a vida de
            milhões.
          </p>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-7 border-test">
          <h1 class="big-header">EQUIPE</h1>
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