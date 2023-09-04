import { api } from "./AxiosService.js";
import { AppState } from "../AppState.js";
import { Quote } from "../models/Quote.js";


class QuotesService {
    async getQuote() {
        let res = await api.get('/api/quotes')
        AppState.quote = new Quote(res.data)
    }
}

export const quotesService = new QuotesService()