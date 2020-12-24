class MainBanner extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    console.log("holi");
    this.innerHTML = `
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-6 px-0 text-container border-test">
              <h1 class="main-header mb-2">
                A Monkey ajuda você fornecedor a antecipar Notas Fiscais.
              </h1>
              <p class="main-text">
                Estamos aqui para te ajudar em todos os momentos, providenciamos a
                melhor taxa para você antecipar sua Nota Fiscal e ter o dinheiro no
                mesmo dia.
              </p>
              <button class="btn-border-header">Saiba Mais</button>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6 px-0 border-test">
              <img src='./images/main-banner.png' class="monkey-banner" alt="monkey-banner" />
            </div>
          </div>
        </div>
        `;
  }
}

window.customElements.define("main-banner", MainBanner);
