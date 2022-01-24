import { WIRESTATE } from "./Enums"

export class Wire{
    name:string=''
    state:WIRESTATE=WIRESTATE.ON
    
    constructor(name:string){
        this.name=name
    }
    
    setState(state:WIRESTATE=WIRESTATE.OFF){
        this.state=state
    }

    getState(){
        return this.state
    }
}