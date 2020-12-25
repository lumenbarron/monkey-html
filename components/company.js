class Company extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
      <div class="container-fluid main-company p-0">
      <div class="row row-company m-0">
        <div
          class="col-sm-12 col-md-6 col-lg-6 text-container border-test p-0"
        >
          <button class="btn-company mb-3">Âncora</button>
          <h2 class="title-h2">
            Aqui na Monkey, denominamos os clientes que são donos de
            programas como âncora.
          </h2>
          <p class="main-text">
            Aumente o seu prazo de pagamento, e ajude os seus fornecedores a
            terem uma vida financeira mais saúdavel.
          </p>
          <a class="link-style">
            Entenda as vantagens de ter um programa.
          </a>
          <div class="row icons-container-left m-0">
            <div class="col">
              <img src="./images/chart.svg" class="pb-3" alt="chart-icon" />
              <h5 class="">Fluxo de Caixa</h5>
              <p class="supplier-text-icons pr-4">
                Com o nosso sistema, você poderá aumentar seu prazo de
                pagamento.
              </p>
            </div>
            <div class="col">
              <img src="./images/work.svg" class="pb-3" alt="work-icon" />
              <h5 class="">Flexibilidade no Pagamento</h5>
              <p class="supplier-text-icons">
                Novas opções para solucionar o seu pagamento e controle dos
                fornecedores.
              </p>
            </div>
          </div>
        </div>
      <div class="col-sm-12 col-md-6 col-lg-6 border-test p-0">
        <img
          src="./images/company-banner.png"
          class="company-banner"
          alt="company-banner"
        />
      </div>
    </div>
    <div class="row m-0">
      <div class="col-lg-2 p-0">
        <div class="row first-block"></div>
        <div class="row second-block"></div>
      </div>
      <div class="col-lg-10 products-container">
        <div class="row pt-5 pb-4 title-product">
          <h4>Algumas das nossas soluções</h4>
        </div>
        <div class="row m-0">
          <div class="col-lg-3 product-card-container pr-0 border-test">
            <div class="border-test product-card">
              <div class="product-text">
                <img src='./images/icon-heart.svg' class="pb-3" alt="icon-heart" />
                <h5>Fomente seus fornecedores.</h5>
                <p class="supplier-text-icons m-0">
                  Crie um impacto na sua cadeia, do menor até o maior
                  fornecedor.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 product-card-container pr-0 border-test">
            <div class="border-test product-card">
              <div class="product-text">
                <img src='./images/icon-star.svg' class="pb-3" alt="icon-star" />
                <h5>Prazo de pagamento.</h5>
                <p class="supplier-text-icons m-0">
                  Tenha mais fluxo, e aumente o prazo médio de pagamento.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 product-card-container pr-0 border-test">
            <div class="border-test product-card">
              <div class="product-text">
                <img src='./images/icon-work.svg' class="pb-3" alt="icon-work" />
                <h5>Otimização do Fluxo.</h5>
                <p class="supplier-text-icons m-0">
                  Otimize e tenha um melhor controle do fluxo de caixa da sua empresa.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 product-card-container pr-0 border-test">
            <div class="border-test product-card">
              <div class="product-text">
                <img src='./images/icon-graph.svg' class="pb-3" alt="icon-graph" />
                <h5>Acesso a linhas de créditos.</h5>
                <p class="supplier-text-icons m-0">
                  A sua empresa terá acesso a mais de 22 investidores para as linhas de créditos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </div>
          `;
    }
  }
  
  window.customElements.define("company-section", Company);  