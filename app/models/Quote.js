export class Quote {
    constructor(data) {
        this.quote = data.content
        this.author = data.author
    }

    get QuoteTemplate() {
        return `
        <div class="text-center no-select blurry rounded-pill px-5 py-1">
        <p><small title="${this.author}">${this.quote}</small></p>
        </div>
        `
    }
}

