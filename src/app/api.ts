import { Xior } from "xior";

const BASE_URL = "https://monitor-api.l1rn.org" 
// "https://monitor-api.l1rn.org";

export const xiorInstance = Xior.create({
    baseURL: BASE_URL,
})