class BrandingCostumer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
      <div class="container-fluid container-brand border-test">
      <div class="row container-text">
        <h4 class="brand-text">
          Os melhores acreditam em nossas soluções
    </h4>
      </div>
      <div class="row container-logo-one">
        <img src='./images/natura.png' class="brand-size" alt="natura-company" />
        <img src='./images/philco.png' id="philco" class="brand-size" alt="philco-company" />
        <img src='./images/ifood.png' id="ifood" class="brand-size" alt="ifood-company" />
        <img src='./images/braskem.png' id="braskem" class="brand-size" alt="braskem-company" />
      </div>
      <div class="row container-logo-two">
        <img src='./images/petrobras.png' id="petrobras" class="brand-size" alt="petrobras-company" />
        <img src='./images/minerva.png' class="brand-size" alt="minerva-company" />
        <img src='./images/mdias.png' id="mdias" class="brand-size" alt="mdias-company" />
        <img src='./images/kws.png' id="kws" class="brand-size" alt="kws-company" />
        <img src='./images/gerdau.png' id="gerdau" class="brand-size" alt="gerdau-company" />
      </div>
    </div>
          `;
  }
}

window.customElements.define("branding-costumer", BrandingCostumer);
