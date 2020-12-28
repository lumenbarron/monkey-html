class Investor extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
      <div class="container-fluid investor-company p-0">
      <div class="row row-company m-0">
        <div class="col-sm-12 col-md-6 col-lg-6 text-container border-test p-0">
          <button class="btn-investor mb-3">Investidor</button>
          <h2 class="title-h2">
          Aqui na Monkey você investidor tem mais acesso a grandes empresas.
          </h2>
          <p class="main-text">
          Tenha oportunidades de operar em grandes empresas, com uma plataforma ágil, facil e eficaz. Com um onboarding totalmente digital e com controle de cada cadastro.          Aumente o seu prazo de pagamento, e ajude os seus fornecedores a
            terem uma vida financeira mais saúdavel.
          </p>
          <a class="link-style" >
            Entenda as vantagens de ter um programa.
        </a>
        <div class="row icons-container-left m-0">

        <div class="col text-icons">
        <img src="./images/chart.svg" class="pb-3" alt="chart-icon" />
        <div>
        <h5 class="title-icons">Onboarding Online</h5>
        <p class="supplier-text-icons pr-4">
        Todos os cadastros de Fornecedor e Âncoras, é feito totalmente online. 
        </p>
        </div>
      </div>    
        <div class="col text-icons">
          <img src='./images/calendar.svg' class="pb-3" alt="calendar-icon" />
          <div>
          <h5 class="title-icons">Processo Ágil e Fácil</h5>
          <p class="supplier-text-icons">
          Uma Plataforma intuitiva, e todos processos digitais e online.
          </p>
          </div>
        </div>
          
        </div>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 border-test p-0">
          <img
          src='./images/investor-banner.png'
          class="investor-banner"
          alt="investor-banner"
        />
        </div>
      </div>
    </div>
          `;
    }
  }
  
  window.customElements.define("investor-section", Investor);
  