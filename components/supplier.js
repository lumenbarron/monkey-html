class Supplier extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
        <div class="container-fluid" id="supplier">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-6 order-two border-test flex-general p-0">
              <img
              src='./images/supplier-banner-2.png'
              class="supplier-banner"
              alt="supplier-banner"
            />
            </div>
            <div class="col-sm-12 col-md-12 col-lg-6 order-one border-test supplier-container">
            <button class="btn-supplier mb-4">Fornecedor</button>  
            <h2 class="title-h2">
                Notas Fiscais para receber só daqui a 30, 45 ou 120 dias? Antecipe agora mesmo.
              </h2>
              <h2 class="title-h2">
              Antecipe agora mesmo.
            </h2>
              <p class="main-text">
              Garantimos para você a melhor taxa, para que você desconte sua Nota Fiscal de: produto, serviço ou de transporte (CTE). Assim, você recebe mais dinheiro, no mesmo dia
              </p>
              <p class="main-text">
              Com esse dinheiro você pode pagar uma dívida mais cara ou investir em seu negócio para vender mais.
              </p>
              <a class="link-style" href="#contact">
                Saiba mais sobre as vantagens.
              </a>
            </div>
          </div>
          <div class="row icons-container border-test">
            <div class="col text-icons">
              <img src='./images/calendar.svg' class="pb-3" alt="calendar-icon" />
              <div>
              <h5 class="title-icons">
              Juros Competitivos
              </h5>
              <p class="supplier-text-icons pb-1">
              Nossos juros é em media 70% menor que o mercado cobra.
              </p>
              </div>
            </div>
            <div class="col text-icons">
              <img src='./images/chart.svg' class="pb-3" alt="chart.png-icon" />
              <div>
              <h5 class="title-icons">
              Antecipe Notas Fiscais
              </h5>
              <p class="supplier-text-icons pb-1">
              A solução para a sua Nota Fiscal a partir de 15 dias.
              </p>
              </div>
            </div>
            <div class="col text-icons">
              <img src='./images/wallet.svg' class="pb-3" alt="wallet.svg-icon" />
              <div>
              <h5 class="title-icons">
              Dinheiro no Mesmo Dia
              </h5>
              <p class="supplier-text-icons pb-1">
              Nossos investidores depositam o dinheiro no mesmo dia.
              </p>
              </div>
              </div>
          </div>
        </div>
        `;
  }
}

window.customElements.define("supplier-section", Supplier);
