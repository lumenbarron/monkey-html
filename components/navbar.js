class NavBar extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
        <nav class="main-nav navbar-expand-md navbar-light">
        <div class="container-fluid container-nav px-0 pt-4 border-test">
          <a class="navbar-brand" href="#">
            <img src="images/monkey-logo.svg" class="monkey-logo" alt="monkey-logo" />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="container-nav m-0">
              <li class="">
                <a class="nav-link " aria-current="page" href="#">Fornecedores</a>
              </li>
              <li class="">
                <a class="nav-link" href="#">Instituições Financeiras</a>
              </li>
              <li class="">
                <a class="nav-link" href="#">Empresas</a>
              </li>
              <li class="">
                <a class="nav-link" href="#">Quem Somos</a>
              </li>
              <li class="">
                <a class="nav-link" href="#">Dúvidas</a>
              </li>
              <button class="btn-full-nav mr-2">
                PT
            </button>
            <button class="btn-border-nav">
            Vamos Conversar?
            </button>
            </ul>
          </div>
        </div>
    </nav>
        `;
  }
}

window.customElements.define("navbar-section", NavBar);
