import { Pop } from "../utils/Pop.js";
import { api } from "./AxiosService.js";
import { AppState } from "../AppState.js";
import { Image } from "../models/Image.js";



class SandboxAlphaService {

    async getImage() {
        const res = await api.get('api/images')
        console.log(res.data)
        AppState.activeImage = new Image(res.data)
        console.log(AppState.myImage)
    }


}
export const sandboxAlphaService = new SandboxAlphaService()
