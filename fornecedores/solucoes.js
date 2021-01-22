class Soluções extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `

          `;
    }
  }
  
  window.customElements.define("soluções-section", Soluções);