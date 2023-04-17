class CardNews extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build())
        shadow.appendChild(this.styles())
    }
    build() {
        const componentRoot = document.createElement('div')
        componentRoot.setAttribute('class', 'card')

        const cardLeft = document.createElement('div')
        cardLeft.setAttribute('class', 'card_left')

        const autor = document.createElement('span')     
        const linkTitle = document.createElement('a')       
        const paragrafo = document.createElement('p')

        cardLeft.appendChild(autor)
        cardLeft.appendChild(linkTitle)
        cardLeft.appendChild(paragrafo)
        
        const cardRigt = document.createElement('div')
        cardRigt.setAttribute('class', 'card_rigth')

        const newImage = document.createElement('img')
        cardRigt.appendChild(newImage)

        componentRoot.appendChild(cardLeft)
        componentRoot.appendChild(cardRigt)

        return componentRoot
    }

    styles() {

    }
}
customElements.define('card-news', CardNews)