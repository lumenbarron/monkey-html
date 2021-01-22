class Midia extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
      <div class="container-fluid container-midia" id="nossa-equipe">
      <div class="row">
        <h1 class="big-header">MONKEY</h1>
        <div class="container-btn"> <button class="btn-midia">NA MÍDIA</button></div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-5 container-col border-test">
          <img src="images/estadao.svg" class="estadao" alt="estadao" />
        </div>
        <div class="col-sm-12 col-md-12 col-lg-7 border-test container-info-midia">
          <h1 class="header-midia mb-4">Fintech Monkey Exchange investirá até R$ 7 milhões para chegar ao Chile</h1>
          <p class="text-midia">
            A Monkey Exchange, marketplace que conecta empresas a instituições financeiras para antecipar
            recebíveis, se prepara para botar os pés fora do Brasil.
          </p>
          <a class="link-style" href="">
            Leia Mais
          </a>
        </div>
      </div>
      <div class="row row-images">

        <img src="images/segs.png" class="brand-size" alt="segs" />


        <img src="images/ipnews.png" class="brand-size" alt="ipnews" />


        <img src="images/exame.png" class="brand-size" id="exame" alt="exame" />


        <img src="images/aws.png" class="brand-size" alt="aws" />

      </div>
    </div>
          `;
    }
  }
  
  window.customElements.define("midia-section", Midia);