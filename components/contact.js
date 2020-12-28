class Contact extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    console.log('holi contact');
    this.innerHTML = `
      <div class="container-fluid">
      <div class="row contact-container">
        <div class="col-sm-12 col-md-6 col-lg-6 contact-text-container border-test">
          <h1 class="contact-header">
            Se interessou e quer conversar com alguém especializado?
            </h1>
            <p class="contact-text">
            Deixe o seu contato ao lado, que o nosso time de consultores, irá entrar em contato com você para você ter a melhor solução possível.
            </p>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 contact-form-container border-test">
          <form>
            <div class="label-text label-name">
              <label for="formControlNome" class="form-label" >Nome</label>
              <input readonly type="nome" class="form-control" id="formControlNome" />
            </div>
            <div class="label-text">
              <label for="formControlEmail" class="form-label" >E-mail</label>
              <input readonly type="email" class="form-control" id="formControlEmail" />
            </div>
            <div class="label-text">
              <label for="formControlTelefone" class="form-label" >Telefone</label>
              <input readonly type="telefone" class="form-control" id="formControlTelefone" />
            </div>
          <p class="pt-4">Conte pra gente como você se enquadra em nosso negócio. Você:</p>
            <div>
              <div class="form-check mb-3">
                <input class="form-check-input radio-text" type="radio" name="fornecedor" id="fornecedorRadio">
                <label class="form-check-label" for="fornecedorRadio">
                  Fornece para uma Empresa
                </label>
              </div>
              <div class="form-check mb-3">
                <input class="form-check-input radio-text" type="radio" name="empresa" id="empresaRadio">
                <label class="form-check-label" for="empresaRadio">
                  Tem vários fornecedores
                </label>
              </div>
              <div class="form-check mb-3">
                <input class="form-check-input radio-text" type="radio" name="investidor" id="investidorRadio">
                <label class="form-check-label" for="investidorRadio">
                  É um Investidor
                </label>
              </div>
            </div>
            <button class="submit-button">Enviar</button>
          </form>
        </div>
      </div>
      <div class="row contact-background"></div>
    </div>
          `;
  }
}

window.customElements.define("contact-section", Contact);
