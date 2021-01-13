class MainBanner extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
          <div class="container-fluid" id="home">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-6 px-0 text-container border-test">
                <h1 class="main-header mb-2">
                  Monkey le ayuda a usted proovedor para adelantar el pago de sus Notas Fiscales.
                </h1>
                <p class="main-text">
                  Estamos aqui para ayudarle en todos los momentos, proporcionamos la
                  mejor taza para adelantar sus Nota Fiscales y tener el dinero en el mismo dia.
                </p>
                <button class="btn-border-header"> <a href="#contact">Saber Más</a></button>
              </div>
              <div class="col-sm-12 col-md-12 col-lg-6 px-0 flex-general border-test">
                <img src='./images/main-banner-es.png' class="monkey-banner" alt="monkey-banner" />
              </div>
            </div>
          </div>
          `;
    }
  }
  
  window.customElements.define("main-banner", MainBanner);
  