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
        <p class="text-spike">
          E em fevereiro estamos lançando nosso segundo produto, Spike é mais uma solução financeira para que
          estabelecimentos comerciais possam antecipar as vendas em maquininhas de uma maneira fácil, ágil e com
          juros baixos.
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