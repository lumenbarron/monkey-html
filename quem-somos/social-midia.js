class Midia extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
  
          `;
    }
  }
  
  window.customElements.define("midia-section", Midia);