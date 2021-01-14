class Supplier extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
          <div class="container-fluid" id="supplier">
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-6 order-two border-test flex-general p-0">
                <img
                src='./images/supplier-banner-es.png'
                class="supplier-banner"
                alt="supplier-banner"
              />
              </div>
              <div class="col-sm-12 col-md-12 col-lg-6 order-one border-test supplier-container">
              <button class="btn-supplier mb-4">Proveedor</button>  
              <h2 class="title-h2">
                  ¿ Notas Fiscales para recibir sólo de aqui a 30, 45 o 120 días?.
                </h2>
                <h2 class="title-h2">
                Adelantalas ahora mismo.
              </h2>
                <p class="main-text">
                Garantizamos la mejor taza para usted, así podrá descontar de su Nota Fiscal: productos, servicios o transporte. Así, usted recibe más dinero, en el mismo día.
                </p>
                <p class="main-text">
                Con ese dinero usted puede pagar una deuda más cara o invertir en su negocio para vender más.
                </p>
                <a class="link-style" href="#contact">
                  Saber más sobre las ventajas.
                </a>
              </div>
            </div>
            <div class="row icons-container border-test">
              <div class="col text-icons">
                <img src='./images/calendar.svg' class="pb-3" alt="calendar-icon" />
                <div>
                <h5 class="title-icons">
                Intereses Competitivos
                </h5>
                <p class="supplier-text-icons pb-1">
                Nuestros intereses son en promedio 70% menor del que se cobra en el mercado.
                </p>
                </div>
              </div>
              <div class="col text-icons">
                <img src='./images/chart.svg' class="pb-3" alt="chart.png-icon" />
                <div>
                <h5 class="title-icons">
                Adelante Notas Fiscales
                </h5>
                <p class="supplier-text-icons pb-1">
                La solución para su Nota Fiscal a partir de 15 días.
                </p>
                </div>
              </div>
              <div class="col text-icons">
                <img src='./images/wallet.svg' class="pb-3" alt="wallet.svg-icon" />
                <div>
                <h5 class="title-icons">
                Dinero en el mismo día
                </h5>
                <p class="supplier-text-icons pb-1">
                Nuestros inversionistas depositan el dinero en el mismo día.
                </p>
                </div>
                </div>
            </div>
          </div>
          `;
    }
  }
  
  window.customElements.define("supplier-section", Supplier);