class MainBanner extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
      <div class="container-fluid" id="home">
      <div class="row">
        <h1 class="contact-header center-text text-main-about">
          A Monkey nasceu com o propósito de melhorar saúde financeira dos pequenos e médios fornecedores.
        </h1>
        <p class="main-text center-text text-about">
          Soluções que conectam grandes empresas com grandes investidores para ajudar os fornecedores, trazendo uma
          taxa mais justa para antecipar valores importantes para os grandes e pequenos produtores.
        </p>
        <img src='./images/sobrenos.png' class="sobre-nos-bannerr" alt="sobrenos" />
      </div>
    </div>
          `;
    }
  }
  
  window.customElements.define("main-banner", MainBanner);
  