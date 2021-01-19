class Negocio extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
  
          `;
    }
  }
  
  window.customElements.define("negocio-section", Negocio);