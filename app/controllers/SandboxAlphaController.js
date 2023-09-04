import { Pop } from "../utils/Pop.js"
import { sandboxAlphaService } from "../services/SandboxAlphaService.js"
import { AppState } from "../AppState.js"
import { setHTML } from "../utils/Writer.js"

function drawImage() {
    console.log('drawing to page');
    let image = AppState.activeImage
    document.body.style.backgroundImage = `url(${image.largeImgUrl})`
    setHTML('Image', image.ActiveTemplate)
}

export class SandboxAlphaController {

    constructor() {
        console.log("SandboxAlphaController Loaded")
        AppState.on('account', this.getImage)
        AppState.on('activeImage', drawImage)
    }

    async getImage() {
        try {
            console.log("SandboxAlphaController Getting Images")
            await sandboxAlphaService.getImage()
        } catch (error) {
            Pop.error(error)
            console.error
        }
    }
}