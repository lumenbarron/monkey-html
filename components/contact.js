class Contact extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    console.log('contact');
    this.innerHTML = `
    <div class="container-fluid" id="contact">
    <div class="row contact-container">
      <div class="col-sm-12 col-md-6 col-lg-6 contact-text-container border-test">
        <h1 class="contact-header">
          Se interessou e quer conversar com a gente?
          </h1>
          <p class="contact-text">
          Deixe o seu contato ao lado, que o nosso time de consultores, irá entrar em contato com você para você ter a melhor solução possível.
          </p>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6 contact-form-container border-test">
        <form id="contact-form">
        <div class="row">
          <div class="col-lg-6 col-sm-12">
            <div class="label-text label-name">
              <label for="nome" class="form-label" >Nome</label>
              <input type="nome" class="form-control" id="nome" required />
              <p id="errorName"></p>
            </div>
          </div>
          <div class="col-lg-6 col-sm-12">
            <div class="label-text">
              <label for="telefone" class="form-label" >Telefone</label>
              <input type="telefone" class="form-control" id="telefone" required />
              <p id="errorTelefone"></p>
            </div>
          </div>
        </div>
          <div class="label-text">
            <label for="email" class="form-label" >E-mail</label>
            <input type="email" class="form-control" id="email" required />
            <p id="errorEmail"></p>
          </div>
          <div class="label-text">
            <label for="message" class="form-label" >Deixe uma mensagem</label>
            <textarea class="form-control" id="message" rows="3" required></textarea>
            <p id="errorMessage"></p>
          </div>
        <p class="pt-4">Conte pra gente como você se enquadra em nosso negócio. Você:</p>
          <div>
            <div class="form-check mb-3">
              <input class="form-check-input radio-text" type="radio" name="choice" value="fornecedor" id="fornecedorRadio" checked>
              <label class="form-check-label" for="fornecedorRadio">
                Fornece para uma Empresa
              </label>
            </div>
            <div class="form-check mb-3">
              <input class="form-check-input radio-text" type="radio" name="choice" value="empresa" id="empresaRadio">
              <label class="form-check-label" for="empresaRadio">
                Tem vários fornecedores
              </label>
            </div>
            <div class="form-check mb-3">
              <input class="form-check-input radio-text" type="radio" name="choice" value="investidor" id="investidorRadio">
              <label class="form-check-label" for="investidorRadio">
                É um Investidor
              </label>
            </div>
          </div>
          <button class="submit-button" onclick="sendContact(event)">Enviar</button>
        </form>
      </div>
    </div>
    <div class="row contact-background"></div>
  </div>
          `;
  }
}

window.customElements.define("contact-section", Contact);
