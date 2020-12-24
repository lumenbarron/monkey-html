class Supplier extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      console.log("holi");
      this.innerHTML = `

          `;
    }
  }
  
  window.customElements.define("supplier-section", Supplier);
  