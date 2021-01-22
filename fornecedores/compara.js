class Compara extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `

          `;
    }
  }
  
  window.customElements.define("compara-section", Compara);