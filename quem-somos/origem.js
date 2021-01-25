class Origem extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <div class="container-fluid" id="origem">
    <div class="row p-0">
      <h1 class="big-header origem-header">ORIGEM</h1>
      <div class="container-btn"> <button class="btn-main">2016</button></div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-5 flex-general p-0">
        <img src='./images/origem.png' class="origem-banner" alt="origem" />
      </div>
      <div class="col-sm-12 col-md-12 col-lg-7 origem-text">
        <p class="main-text p-0">
          Nascemos em 2016, desde lá foi muito aprendizado e muito impacto na economia dos nossos clientes. Nossos
          fundadores Gustavo Mueller, Bruno Oliveira e Felipe Adorno trazem em sua bagagem grandes conhecimentos
          no mercado financeiro e de tecnologia. Juntos trouxeram uma nova visão de como o crédito é entendido e
          precificado no Brasil.
        </p>
      </div>
    </div>
  </div>
        `;
  }
}

window.customElements.define("origem-section", Origem);
