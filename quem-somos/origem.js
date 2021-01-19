class Origem extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `

        `;
  }
}

window.customElements.define("origem-section", Origem);
