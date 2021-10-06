
import { TOOLTYPE, PINTYPE } from './Enums'
import { Pin } from './Pin'
export class Komponent {
    element: string = ''
    public type: TOOLTYPE = null
    public canvas: HTMLElement
    constructor(element: string, type: TOOLTYPE = null, canvasEl: string = null) {
        if (type) this.type = type
        this.element = element
        if (canvasEl)
            this.canvas = document.getElementById(canvasEl)
    }
    render() {

    }
    Fire() {
        console.log("Fire")
    }
}