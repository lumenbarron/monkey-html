class Supplier extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    console.log("holi");
    this.innerHTML = `
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-6 border-test p-0">
              <img
              src='./images/supplier-banner.png'
              class="supplier-banner"
              alt="supplier-banner"
            />
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6 border-test supplier-container">
              <h2 class="title-h2">
                Notas Fiscais para receber só daqui 120 dias? Antecipe agora mesmo.
              </h2>
              <p class="main-text">
                Garantimos para você a melhor taxa para ser descontado o menor valor
                possível. Acreditamos na sustentabilidade em uma cadeia de
                Fornecedores.
              </p>
              <a class="link-style">
                Saiba mais sobre as vantagens.
              </a>
            </div>
          </div>
          <div class="row icons-container border-test">
            <div class="col">
              <img src='./images/calendar.svg' class="pb-3" alt="calendar-icon" />
              <h5 class="">
              Juros Competitivos
              </h5>
              <p class="supplier-text-icons pb-1">
              Nossos juros é 70% menor que o mercado cobra.
              </p>
            </div>
            <div class="col">
              <img src='./images/chart.svg' class="pb-3" alt="chart.png-icon" />
              <h5 class="">
              Antecipe Notas Fiscais
              </h5>
              <p class="supplier-text-icons pb-1">
              A solução para a sua Nota Fiscal com um prazo longo.
              </p>
            </div>
            <div class="col">
              <img src='./images/wallet.svg' class="pb-3" alt="wallet.svg-icon" />
              <h5 class="">
              Dinheiro no Mesmo Dia
              </h5>
              <p class="supplier-text-icons pb-1">
              Nossos investidores depositam o dinheiro no mesmo dia.
              </p>
            </div>
          </div>
        </div>
        `;
  }
}

window.customElements.define("supplier-section", Supplier);
