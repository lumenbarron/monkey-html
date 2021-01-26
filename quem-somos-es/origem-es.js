class Origem extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <div class="container-fluid" id="origem">
    <div class="row p-0">
      <h1 class="big-header origem-header">ORIGEN</h1>
      <div class="container-btn"> <button class="btn-main">2016</button></div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-5 flex-general p-0">
        <img src='./images/origem.png' class="origem-banner" alt="origem" />
      </div>
      <div class="col-sm-12 col-md-12 col-lg-7 origem-text">
        <p class="main-text p-0">
          Nascimos en el 2016, desde ahí fue mucho aprendizaje y mucho impacto en la economia de nuestros clientes. Nuestros
          fundadores Gustavo Mueller, Bruno Oliveira e Felipe Adorno traen en su experiencia grandes conocimentos
          en el mercado financiero y de tecnología. Juntos trajeron una nueva visión de como el crédito es entendido y
          valuado en Brasil.
        </p>
      </div>
    </div>
  </div>
        `;
  }
}

window.customElements.define("origem-section", Origem);
