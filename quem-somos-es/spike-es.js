class Spike extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
      <div class="container-fluid container-spike mt-4" id="spike">
      <div class="row pt-2">
        <div class="mt-5 container-col">
          <img src="images/spike.svg" class="spike-logo" alt="spike-logo" />
        </div>
        <p class="text-spike center-text">
          En febrero estamos lanzando nuestro segundo producto, Spike es una solución financiera para que
          establecimentos comerciales puedan anticipar las ventas en terminales de uma manera fácil, ágil y con
          intereses bajos.
        </p>
        <div class="p-0">
          <img src="images/waves.svg" class="waves" alt="waves" />
        </div>
      </div>
    </div>
          `;
    }
  }
  
  window.customElements.define("spike-section", Spike);