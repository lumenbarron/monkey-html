class MainBanner extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
      <div class="container-fluid" id="home">
      <div class="row">
        <h1 class="contact-header center-text text-main-about">
          Monkey nasció con el propósito de meljorar la salud financiera de los pequeños y medianos proveedores.
        </h1>
        <p class="main-text center-text text-about">
          Soluciones que conectan grandes empresas con grandes inversionistas para ayudar a los proveedores, trayendo una
          taza más justa para anticipar valores importantes para los grandes y pequeños productores.
        </p>
        <img src='./images/sobrenos.png' class="sobre-nos-bannerr" alt="sobrenos" />
      </div>
    </div>
          `;
    }
  }
  
  window.customElements.define("main-banner", MainBanner);
  