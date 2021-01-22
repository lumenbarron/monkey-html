class MainBanner extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `

          `;
    }
  }
  
  window.customElements.define("main-banner", MainBanner);
  