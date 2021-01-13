class News extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
      <div class="container-fluid px-0 border-test">
      <div class="row container-title m-0">
        <h4 class="brand-text">Estamos em todos os cantos</h4>
      </div>
      <div class="row m-0 carousel-container border-test">
        <button aria-label="before" class="carousel-prev button-icons px-0">
        <img src='./images/icon-prev.svg' class="" alt="icon-graph" />
        </button>
       <div class="carousel-list px-0 border-test">
        <div class=" news-container1">
          <p class="data-text">Dezembro/2020</p>
          <a>
            <h6 class="title-new">
              Petrobras prevê adesão maciça a linha de capital
            </h6>
          </a>
        </div>
        <div class=" news-container2">
          <p class="data-text">Dezembro/2020</p>
          <a>
            <h6 class="title-new">
              Petrobras prevê adesão maciça a linha de capital
            </h6>
          </a>
        </div>
        <div class=" news-container3">
          <p class="data-text">Dezembro/2020</p>
          <a>
            <h6 class="title-new">
              Petrobras prevê adesão maciça a linha de capital
            </h6>
          </a>
        </div>
        <div class=" news-container4">
          <p class="data-text">Dezembro/2020</p>
          <a>
            <h6 class="title-new">
              Petrobras prevê adesão maciça a linha de capital
            </h6>
          </a>
        </div>
        <div class=" news-container1">
          <p class="data-text">Dezembro/2020</p>
          <a>
            <h6 class="title-new">
              Petrobras prevê adesão maciça a linha de capital
            </h6>
          </a>
        </div>
        <div class=" news-container2">
          <p class="data-text">Dezembro/2020</p>
          <a>
            <h6 class="title-new">
              Petrobras prevê adesão maciça a linha de capital
            </h6>
          </a>
        </div>
        <div class=" news-container3">
          <p class="data-text">Dezembro/2020</p>
          <a>
            <h6 class="title-new">
              Petrobras prevê adesão maciça a linha de capital
            </h6>
          </a>
        </div>
        <div class=" news-container4">
          <p class="data-text">Dezembro/2020</p>
          <a>
            <h6 class="title-new">
              Petrobras prevê adesão maciça a linha de capital
            </h6>
          </a>
        </div>
      </div>
        <button aria-label="after" class="carousel-next button-icons px-0">
          <img src='./images/icon-next.svg' class="" alt="icon-graph" />
          </button>
      </div>
      <div class="row m-0 button-container">
        <button class="button-news">
          Explore Todas as Nossas Notícias
          </button>
      </div>
    </div>
          `;
  }
}

window.customElements.define("news-section", News);
