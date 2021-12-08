class CustomLoader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._render();
  }

  connectedCallback() {
    this._animateLoader();
  }

  _render() {
    this.shadowRoot.innerHTML = `
              <style>
                .container {
                  width: 100%;
                  display: flex;
                  justify-content: center;
                  padding: 50px 5px;
                }
                .ball {
                  width: 50px;
                  height: 50px;
                  border-radius: 50%;
                  background-color: red;
                  margin: 15px;
                }
                .ball1 {
                  background-color: #FF1744;
                }
                .ball2 {
                  background-color: #2979FF;
                }
                .ball3 {
                  background-color: #1DE9B6;
                }
                .ball4 {
                  background-color: #FF9100;
                }
              </style>
              <div class="container">
                <div class="ball ball1"></div>
                <div class="ball ball2"></div>
                <div class="ball ball3"></div>
                <div class="ball ball4"></div>
              </div>
            `;
  }

  _animateLoader() {
    const balls = this.shadowRoot.querySelectorAll(".ball");

    const keyframes = [
      { transform: "translateY(0)" },
      { transform: "translateY(100%)" },
    ];

    const options = {
      duration: 700,
      iterations: Infinity,
      direction: "alternate",
      easing: "ease-in-out",
    };

    balls.forEach((ball, i) => {
      ball.animate(keyframes, Object.assign({ delay: i * 200 }, options));
    });
  }
}

customElements.define("custom-loader", CustomLoader);
