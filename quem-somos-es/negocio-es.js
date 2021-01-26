class Negocio extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
      <div class="container-fluid first-block" id="negocio">
      <div class="row p-0">
        <h1 class="big-header" style="text-align: end;">
          NEGÓCIO
        </h1>
      </div>
      <div class="row row-container">
        <div class="col-sm-12 col-md-12 col-lg-6 ">
          <img src='./images/negocio.svg' class="negocio-banner" alt="negocio" />
        </div>
        <div class="col-sm-12 col-md-12 col-lg-6  negocio-text">
          <p class="main-text ">
            Comenzamos con <b>Supply Chain Finance</b> , implementamos una plataforma white-label en <b> grandes
              empresas</b>, para conectar <b>fornecedores</b> con<b> instituciones financieras</b> en una
            <b>subasta</b> totalmente automática para garantizar el <b>menor interés</b> posible, para que pueda
            anticipar su nota fiscal con tazas de hasta <b>80% menor que el mercado.</b>
          </p>
        </div>
      </div>
    </div>
          `;
    }
  }
  
  window.customElements.define("negocio-section", Negocio);