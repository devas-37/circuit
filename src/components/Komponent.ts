
import { TOOLTYPE, PINTYPE } from './Enums'
import { Pin } from './Pin'
export class Komponent {
    element: string = ''
    public type: TOOLTYPE = null
    constructor(element: string, type: TOOLTYPE = null) {
        if (type) this.type = type
        this.element = element
        
    }
    render(){
        
    }
}