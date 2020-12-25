class Footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
      <footer class="container-fluid p-0 footer-container">
      <div class="row m-0 row-logo">
        <img src='./images/monkey-logo-footer.svg' class="logo-monkey" alt="logo-monkey" />
      </div>
      <div class="row m-0 container-titles">
        <div class="col-sm-12 col-md-3 col-lg-3 titles-footer">
          <h6>Produtos</h6>
          <p>Empresas</p>
          <p>Fornecedores</p>
          <p>Instituições Financeiras</p>
        </div>
        <div class="col-sm-12 col-md-3 col-lg-3 titles-footer">
          <h6>Institucional</h6>
          <p>Sobre Nós</p>
          <p>Dúvidas</p>
          <p>Quem Somos</p>
        </div>
        <div class="col-sm-12 col-md-3 col-lg-3 titles-footer">
          <h6>Redes Socias</h6>
          <p>Vem seguir a gente :D</p>
          <div class="row container-icons">
            <div class="col">
              <img src='./images/instagram-icon.svg' class="" alt="instagram-icon" />
            </div>
            <div class="col">
              <img src='./images/facebook-icon.svg' class="" alt="facebook-icon" />
            </div>
            <div class="col">
              <img src='./images/linkedin-icon.svg' class="" alt="linkedin-icon" />
            </div>
            <div class="col">
              <img src='./images/twitter-icon.svg' class="" alt="twitter-icon" />
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-3 col-lg-3 titles-footer">
          <h6>Endereço</h6>
          <p>
            Av. Brg. Faria Lima, 1485 - Pinheiros, São Paulo - SP, 01451-001,
            Brasil
          </p>
        </div>
      </div>
      <div class="row m-0 row-copyright">
        <p class="copyright-footer">
          © Monkey Exchange 2021. Todos os direitos reservados. Acesse nossa
          <a> Politica de Privacidade.</a>
        </p>
      </div>
      <div class="m-0 lenguage-row border-test">
        <div class="radio-input">
          <input class="form-check-input" type="radio" name="portugues" id="portuguesRadio">
          <label class="form-check-label" for="portuguesRadio">
            Português
          </label>
        </div>
        <div class="radio-input">
          <input class="form-check-input" type="radio" name="ingles" id="inglesRadio">
          <label class="form-check-label" for="inglesRadio">
            Inglês
          </label>
        </div>
        <div class="radio-input">
          <input class="form-check-input" type="radio" name="espanhol" id="espanholRadio">
          <label class="form-check-label" for="espanholRadio">
            Espanhol
          </label>
        </div>
      </div>
    </footer>
          `;
  }
}

window.customElements.define("footer-section", Footer);
