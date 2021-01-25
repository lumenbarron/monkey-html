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
            Começamos com <b>Supply Chain Finance</b> , implementamos uma plataforma white-label em <b> grandes
              empresas</b>, para conectar <b>fornecedores</b> com<b> instituições financeiras</b> em um
            <b>leilão</b> totalmente automático para garantir o <b>menor juros</b> possível, para que possa
            antecipar sua nota fiscal com taxas até <b>80% menor que o mercado.</b>
          </p>
        </div>
      </div>
    </div>
          `;
    }
  }
  
  window.customElements.define("negocio-section", Negocio);