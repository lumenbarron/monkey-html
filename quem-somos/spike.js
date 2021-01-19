class Spike extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
  
          `;
    }
  }
  
  window.customElements.define("spike-section", Spike);