class Fazemos extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `

          `;
    }
  }
  
  window.customElements.define("fazemos-section", Fazemos);