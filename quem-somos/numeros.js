class Numeros extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
  
          `;
    }
  }
  
  window.customElements.define("numeros-section", Numeros);