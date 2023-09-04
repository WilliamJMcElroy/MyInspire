import { AppState } from "../AppState.js";
import { Pop } from "../utils/Pop.js";
import { quotesService } from "../services/QuotesService.js";


function _drawQuote() {
    let content = ''
    content += AppState.quote.QuoteTemplate
    document.getElementById('quote').innerHTML = content
}


export class QuotesController {

    constructor() {
        AppState.on('quote', _drawQuote)
        this.getQuote()
    }

    async getQuote() {
        try {
            await quotesService.getQuote()
        } catch (error) {
            Pop.error(error)
            console.error('getQuote Controller Error', error)
        }


    }

}
