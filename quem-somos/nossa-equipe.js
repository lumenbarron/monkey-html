class Equipe extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
  
          `;
    }
  }
  
  window.customElements.define("equipe-section", Equipe);