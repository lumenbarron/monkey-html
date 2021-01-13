class BrandingCostumer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
      <div class="container-fluid container-brand border-test">
      <div class="row container-text">
      <p class="supplier-text-icons pb-1">
      Atendemos as maiores empresas, se você fornece para algumas delas, você pode antecipar em nosso programa.
      </p>
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
      <div class="row container-text-info">
      <p class="supplier-text-icons pb-1">
      Não encontrou a empresa que você fornece ? Entre em contato com a gente e iremos
      responder se a empresa possui a nossa solução.
      </p>
      </div>
      <div class="row container-text">
      <button class="btn-branding "><a href="#contact"> Entrar em contato </a></button>
      </div>
    </div>
          `;
  }
}

window.customElements.define("branding-costumer", BrandingCostumer);
