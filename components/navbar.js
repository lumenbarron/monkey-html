class NavBar extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
        <nav class="navbar main-nav navbar-expand-lg navbar-light">
        <div class="container-fluid container-nav px-0 pt-4 border-test">
          <a class="navbar-brand" href="#home">
            <img src="images/monkey-logo.svg" class="monkey-logo" alt="monkey-logo" />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 container-nav m-0">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Soluções
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink1">
                  <a class="dropdown-item nav-link" href="#supplier">Fornecedores</a>
                  <a class="dropdown-item nav-link" href="#investidor">Investidor</a>
                  <a class="dropdown-item nav-link" href="#company">Empresas</a>
                </div>
              </li>
              <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Produtos
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item nav-link" href="#">Supply Chain Finance</a>
                <a class="dropdown-item nav-link" href="#">Spike</a>
              </div>
            </li>
              <li class="">
                <a class="nav-link" href="#">Quem Somos</a>
              </li>
              <li class="">
                <a class="nav-link" target="_blank" href="http://help.monkey.exchange/pt-BR/">Dúvidas</a>
              </li>
              <button class="btn-full-nav mr-2">
                PT
            </button>
            <button class="btn-border-nav">
            <a href="#contact">
            Vamos Conversar?
            </a>
            </button>
            </ul>
          </div>
        </div>
    </nav>
        `;
  }
}

window.customElements.define("navbar-section", NavBar);
