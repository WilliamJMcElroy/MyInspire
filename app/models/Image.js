

export class Image {

    constructor(data) {
        this.url = data.url || data.imgUrl
        this.query = data.query
        this.author = data.author
        this.largeImgUrl = data.largeImgUrl
    }

    get ActiveTemplate() {
        return /*html*/`
        <div class="text-white-50 image-header">
        <span>
        Image by
        ${this.author}
        </span>
        </div>
    `
    }

}
