class CardNews extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }
  build() {
    const componentRoot = document.createElement('div');
    componentRoot.setAttribute('class', 'card');

    const cardLeft = document.createElement('div');
    cardLeft.setAttribute('class', 'card_left');

    const autor = document.createElement('span');
    autor.textContent = 'By ' + (this.getAttribute('autor') || 'Anonymous');

    const linkTitle = document.createElement('a');
    linkTitle.textContent = this.getAttribute('title');
    linkTitle.href = this.getAttribute('url-link');

    const paragrafo = document.createElement('p');
    paragrafo.textContent = this.getAttribute('content');

    cardLeft.appendChild(autor);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(paragrafo);

    const cardRigt = document.createElement('div');
    cardRigt.setAttribute('class', 'card_rigth');

    const newImage = document.createElement('img');
    newImage.src = this.getAttribute('photo') || 'assetsimageNull.png';
    newImage.alt = 'The Office';
    cardRigt.appendChild(newImage);

    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRigt);

    return componentRoot;
  }

  styles() {
    const style = document.createElement('style');
    style.textContent = `
        *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
img{
    margin: 10px;
    width: 250px;
}

.card {
    width: 75%;
    display: flex;
    flex-direction: row;
box-shadow: 10px 10px 22px -6px rgba(0, 0, 0, 0.71);
    -webkit-box-shadow: 10px 10px 22px -6px rgba(0, 0, 0, 0.71);
    -moz-box-shadow: 10px 10px 22px -6px rgba(0, 0, 0, 0.71);
    justify-content: space-between;
}


.card_left{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left:  10px;
}

.card_left > h1 {
    margin: 15px;
    font-size: 25px;
}
.card_left > span {
    font-weight: 400;
}
.card_left > p {
color: gray;
}`;

    return style;
  }
}
customElements.define('card-news', CardNews);
