class Historias extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `

          `;
    }
  }
  
  window.customElements.define("historias-section", Historias);